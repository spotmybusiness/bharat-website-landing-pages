/**
 * Allcargo / Gati Logistics Live API Tracking Adapter
 * 
 * Directly queries the live Allcargo Gati production tracking endpoints:
 * Primary: POST https://admin.allcargologistics.com/api/track-shipment (with auto-refreshed session Bearer token)
 * Fallback: POST https://admin.allcargologistics.com/api/get-docket-details
 */

export interface AllcargoTimelineEvent {
  status: string;
  date: string;
  isBooked: boolean;
}

export interface AllcargoTrackingData {
  carrier: string;
  trackingNumber: string;
  pickupLocation: string;
  pickupDate: string;
  deliveryDestination: string;
  deliveryDate: string;
  receiversName: string;
  remark: string;
  gaRemark: string;
  podUrl?: string;
  gstInvoiceUrl?: string;
  timeline: AllcargoTimelineEvent[];
}

export interface AllcargoTrackResult {
  success: boolean;
  data?: AllcargoTrackingData;
  code?: string;
  message: string;
}

export class AllcargoAdapter {
  private apiBaseUrl: string;
  private timeout: number;
  private token: string | null = null;
  private tokenExpiresAt: number = 0;

  constructor(options: { apiBaseUrl?: string; timeout?: number } = {}) {
    this.apiBaseUrl = options.apiBaseUrl || 'https://admin.allcargologistics.com/api/';
    this.timeout = options.timeout || 12000;
  }

  validate(trackingNumber: string): { valid: boolean; sanitized?: string; error?: string } {
    if (!trackingNumber || typeof trackingNumber !== 'string') {
      return { valid: false, error: 'Tracking or Docket number is required.' };
    }

    const sanitized = trackingNumber.trim();

    if (sanitized.length < 3 || sanitized.length > 30) {
      return { valid: false, error: 'Invalid reference length. Please enter a valid docket or tracking number.' };
    }

    return { valid: true, sanitized };
  }

  async getBearerToken(): Promise<string | null> {
    if (this.token && Date.now() < this.tokenExpiresAt - 30000) {
      return this.token;
    }

    try {
      const response = await fetch(`${this.apiBaseUrl}frontend/token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Origin': 'https://www.allcargologistics.com',
          'Referer': 'https://www.allcargologistics.com/',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        },
        body: JSON.stringify({})
      });

      if (response.ok) {
        const json = await response.json();
        if (json.token) {
          this.token = json.token;
          const expiresIn = json.expires_in || 300;
          this.tokenExpiresAt = Date.now() + expiresIn * 1000;
          return this.token;
        }
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      console.warn('Failed to fetch Allcargo frontend session token:', msg);
    }

    return null;
  }

  async track(rawTrackingNumber: string): Promise<AllcargoTrackResult> {
    const validation = this.validate(rawTrackingNumber);
    if (!validation.valid || !validation.sanitized) {
      return {
        success: false,
        code: 'VALIDATION_ERROR',
        message: validation.error || 'Invalid tracking number.'
      };
    }

    const docketNo = validation.sanitized;

    try {
      const token = await this.getBearerToken();
      if (token) {
        const result = await this._queryTrackShipment(docketNo, token);
        if (result && result.success) {
          return result;
        }
      }

      return await this._queryDocketDetails(docketNo);
    } catch (error: unknown) {
      const isAbort = error instanceof Error && error.name === 'AbortError';
      if (isAbort) {
        return {
          success: false,
          code: 'TIMEOUT',
          message: 'Request to Allcargo live tracking service timed out. Please try again.'
        };
      }

      const msg = error instanceof Error ? error.message : String(error);
      return {
        success: false,
        code: 'NETWORK_ERROR',
        message: `Failed to connect to Allcargo live service: ${msg}`
      };
    }
  }

  private async _queryTrackShipment(docketNo: string, token: string): Promise<AllcargoTrackResult | null> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      const response = await fetch(`${this.apiBaseUrl}track-shipment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`,
          'Origin': 'https://www.allcargologistics.com',
          'Referer': 'https://www.allcargologistics.com/track-shipment',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        },
        body: JSON.stringify({ docketNo }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (response.status === 401) {
        this.token = null;
        this.tokenExpiresAt = 0;
        const freshToken = await this.getBearerToken();
        if (freshToken) {
          return await this._queryTrackShipment(docketNo, freshToken);
        }
      }

      if (!response.ok) return null;

      const json = await response.json();
      if (!json?.success || !Array.isArray(json?.data?.details) || json.data.details.length === 0) {
        return null;
      }

      const item = json.data.details[0];
      if (item.result === 'failed') return null;

      return {
        success: true,
        data: this.normalizeTrackShipmentResponse(docketNo, item),
        message: 'Live tracking details retrieved successfully from Allcargo.'
      };
    } catch {
      return null;
    }
  }

  private async _queryDocketDetails(docketNo: string): Promise<AllcargoTrackResult> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    const response = await fetch(`${this.apiBaseUrl}get-docket-details`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      },
      body: JSON.stringify({ dktNo: docketNo }),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      return {
        success: false,
        code: 'API_ERROR',
        message: `Allcargo service responded with status code ${response.status}.`
      };
    }

    const json = await response.json();

    if (!json?.success || json?.data?.result === 'failed' || !Array.isArray(json?.data?.details) || json.data.details.length === 0) {
      const errMsg = json?.data?.sErrMsg || 'No Data Found';
      return {
        success: false,
        code: 'NOT_FOUND',
        message: `No live record found for docket number "${docketNo}" in Allcargo Gati database (${errMsg}).`
      };
    }

    const item = json.data.details[0];
    return {
      success: true,
      data: this.normalizeDocketDetailsResponse(docketNo, item),
      message: 'Live tracking details retrieved successfully from Allcargo.'
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private normalizeTrackShipmentResponse(docketNo: string, item: any): AllcargoTrackingData {
    const pickupDateFormatted = this.formatDate(item.bookedDateTime);
    const deliveryDateFormatted = this.formatDate(item.DeliveryDt);

    const timeline: AllcargoTimelineEvent[] = [];
    if (Array.isArray(item.TRANSIT_DTLS) && item.TRANSIT_DTLS.length > 0) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      item.TRANSIT_DTLS.forEach((t: any, index: number) => {
        const isLastOrBooked =
          index === item.TRANSIT_DTLS.length - 1 ||
          t.milestonecode === 'DCRE' ||
          String(t.intransitStatus || '').toLowerCase().includes('booked');

        timeline.push({
          status: String(t.intransitStatus || '').trim(),
          date: `${this.formatDate(t.intransitDate)} ${t.intransitTime || ''}`.trim(),
          isBooked: isLastOrBooked
        });
      });
    }

    return {
      carrier: 'Allcargo Gati',
      trackingNumber: item.docketNumber || docketNo,
      pickupLocation: this.formatCity(item.bookingStation),
      pickupDate: pickupDateFormatted,
      deliveryDestination: this.formatCity(item.deliveryStation),
      deliveryDate: deliveryDateFormatted,
      receiversName: this.formatCity(item.ReceiversName || item.consigneeName),
      remark: item.ReceiversRemarks || 'Delivered',
      gaRemark: item.GARemarks || item.ReceiversRemarks || 'Delivered',
      podUrl: item.pod || `https://www.gati.com/showPOD.jsp?dktNo=${docketNo}`,
      gstInvoiceUrl: `https://www.gati.com/download-gst-invoice?dktNo=${docketNo}`,
      timeline
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private normalizeDocketDetailsResponse(docketNo: string, item: any): AllcargoTrackingData {
    const pickupDateFormatted = this.formatDate(item.BKG_DT);
    const deliveryDateFormatted = this.formatDate(item.APPROVED_DLY_DT);

    return {
      carrier: 'Allcargo Gati',
      trackingNumber: docketNo,
      pickupLocation: this.formatCity(item.BOOKING_STN),
      pickupDate: pickupDateFormatted,
      deliveryDestination: this.formatCity(item.DELIVERY_STN),
      deliveryDate: deliveryDateFormatted,
      receiversName: this.formatCity(item.CONSIGNEE_NAME),
      remark: 'Shipment delivered / in transit as per schedule',
      gaRemark: 'Shipment delivered / in transit as per schedule',
      podUrl: `https://www.gati.com/showPOD.jsp?dktNo=${docketNo}`,
      gstInvoiceUrl: `https://www.gati.com/download-gst-invoice?dktNo=${docketNo}`,
      timeline: [
        { status: `Delivered`, date: deliveryDateFormatted, isBooked: false },
        { status: `Shipment Booked`, date: pickupDateFormatted, isBooked: true }
      ]
    };
  }

  formatDate(dateStr?: string): string {
    if (!dateStr) return 'N/A';
    const datePart = dateStr.split(' ')[0];
    const parts = datePart.split('-');
    if (parts.length === 3) {
      const months: Record<string, string> = {
        JAN: 'Jan', FEB: 'Feb', MAR: 'Mar', APR: 'Apr', MAY: 'May', JUN: 'Jun',
        JUL: 'Jul', AUG: 'Aug', SEP: 'Sep', OCT: 'Oct', NOV: 'Nov', DEC: 'Dec'
      };
      const m = months[parts[1].toUpperCase()] || parts[1];
      return `${parts[0]} ${m} ${parts[2]}`;
    }
    return dateStr;
  }

  formatCity(str?: string): string {
    if (!str) return 'N/A';
    return str
      .trim()
      .split(/\s+/)
      .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
      .join(' ');
  }
}

export const allcargoAdapter = new AllcargoAdapter();

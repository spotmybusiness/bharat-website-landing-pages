import { NextRequest, NextResponse } from 'next/server';
import { allcargoAdapter } from '@/lib/adapters/allcargoAdapter';
import { dpWorldAdapter } from '@/lib/adapters/dpWorldAdapter';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const trackingNumber = body.trackingNumber || body.trackingId || body.id;
    const carrier = body.carrier;

    if (!trackingNumber || typeof trackingNumber !== 'string') {
      return NextResponse.json(
        {
          success: false,
          code: 'MISSING_PARAM',
          message: 'Please provide a valid consignment or tracking number.'
        },
        { status: 400 }
      );
    }

    const cleanNumber = trackingNumber.trim();
    const isNumericDocket = /^\d{7,11}$/.test(cleanNumber);

    let primaryAdapter = isNumericDocket ? allcargoAdapter : dpWorldAdapter;
    let fallbackAdapter = isNumericDocket ? dpWorldAdapter : allcargoAdapter;

    if (carrier === 'dpworld') {
      primaryAdapter = dpWorldAdapter;
      fallbackAdapter = allcargoAdapter;
    } else if (carrier === 'allcargo') {
      primaryAdapter = allcargoAdapter;
      fallbackAdapter = dpWorldAdapter;
    }

    // 1. Try Primary Adapter
    let result = await primaryAdapter.track(cleanNumber);

    // 2. If primary returned not found, try fallback adapter
    if (!result.success && fallbackAdapter) {
      const fallbackResult = await fallbackAdapter.track(cleanNumber);
      if (fallbackResult.success) {
        result = fallbackResult;
      }
    }

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          code: result.code || 'NOT_FOUND',
          message: result.message || `No active shipment records found for "${cleanNumber}".`,
          searchedId: cleanNumber
        },
        { status: 200 }
      );
    }

    return NextResponse.json({
      success: true,
      data: result.data,
      message: result.message
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      {
        success: false,
        code: 'INTERNAL_ERROR',
        message: `An unexpected error occurred while checking tracking status: ${msg}`
      },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const trackingNumber = searchParams.get('trackingNumber') || searchParams.get('id') || searchParams.get('q');
  const carrier = searchParams.get('carrier') || undefined;

  if (!trackingNumber) {
    return NextResponse.json(
      {
        success: false,
        code: 'MISSING_PARAM',
        message: 'Please provide a valid tracking number query parameter.'
      },
      { status: 400 }
    );
  }

  const cleanNumber = trackingNumber.trim();
  const isNumericDocket = /^\d{7,11}$/.test(cleanNumber);

  let primaryAdapter = isNumericDocket ? allcargoAdapter : dpWorldAdapter;
  let fallbackAdapter = isNumericDocket ? dpWorldAdapter : allcargoAdapter;

  if (carrier === 'dpworld') {
    primaryAdapter = dpWorldAdapter;
    fallbackAdapter = allcargoAdapter;
  } else if (carrier === 'allcargo') {
    primaryAdapter = allcargoAdapter;
    fallbackAdapter = dpWorldAdapter;
  }

  let result = await primaryAdapter.track(cleanNumber);

  if (!result.success && fallbackAdapter) {
    const fallbackResult = await fallbackAdapter.track(cleanNumber);
    if (fallbackResult.success) {
      result = fallbackResult;
    }
  }

  if (!result.success) {
    return NextResponse.json(
      {
        success: false,
        code: result.code || 'NOT_FOUND',
        message: result.message || `No active shipment records found for "${cleanNumber}".`,
        searchedId: cleanNumber
      },
      { status: 200 }
    );
  }

  return NextResponse.json({
    success: true,
    data: result.data,
    message: result.message
  });
}

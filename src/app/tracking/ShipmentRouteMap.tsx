'use client';

import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { LiveShipmentData, RoutePoint, resolveIndianCityCoords } from '@/lib/tracking';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type LeafletLib = any;

declare global {
  interface Window {
    L?: LeafletLib;
  }
}

let leafletLoadPromise: Promise<LeafletLib> | null = null;

function loadLeaflet(): Promise<LeafletLib> {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('Window is not available'));
  }
  if (window.L) {
    return Promise.resolve(window.L);
  }
  if (leafletLoadPromise) {
    return leafletLoadPromise;
  }

  leafletLoadPromise = new Promise((resolve, reject) => {
    // Inject Leaflet CSS if not already loaded
    if (!document.getElementById('leaflet-css-cdn')) {
      const link = document.createElement('link');
      link.id = 'leaflet-css-cdn';
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      link.crossOrigin = '';
      document.head.appendChild(link);
    }

    const existingScript = document.getElementById('leaflet-js-cdn') as HTMLScriptElement | null;
    if (existingScript) {
      existingScript.addEventListener('load', () => resolve(window.L));
      existingScript.addEventListener('error', (err) => reject(err));
      return;
    }

    const script = document.createElement('script');
    script.id = 'leaflet-js-cdn';
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    script.async = true;
    script.crossOrigin = '';
    script.onload = () => {
      if (window.L) {
        resolve(window.L);
      } else {
        reject(new Error('Leaflet failed to initialize'));
      }
    };
    script.onerror = (err) => reject(err);
    document.body.appendChild(script);
  });

  return leafletLoadPromise;
}

/**
 * Compute geographic bearing angle (in degrees) from point A to point B
 * so directional route arrows align with the highway vector.
 */
function computeBearingDegrees(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const toRad = (d: number) => (d * Math.PI) / 180;
  const toDeg = (r: number) => (r * 180) / Math.PI;
  const dLng = toRad(lng2 - lng1);
  const phi1 = toRad(lat1);
  const phi2 = toRad(lat2);
  const y = Math.sin(dLng) * Math.cos(phi2);
  const x = Math.cos(phi1) * Math.sin(phi2) - Math.sin(phi1) * Math.cos(phi2) * Math.cos(dLng);
  return (toDeg(Math.atan2(y, x)) + 360) % 360;
}

export default function ShipmentRouteMap({ data }: { data: LiveShipmentData }) {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapInstanceRef = useRef<any>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [mapReady, setMapReady] = useState(false);
  const [mapError, setMapError] = useState(false);

  // Derive route points from data.routePoints or fallback from pickup/current/delivery locations
  const routePoints = useMemo<RoutePoint[]>(() => {
    if (Array.isArray(data.routePoints) && data.routePoints.length > 0) {
      return data.routePoints;
    }

    const fallbackPoints: RoutePoint[] = [];
    const originCoords = resolveIndianCityCoords(data.pickupLocation);
    if (originCoords && data.pickupLocation) {
      fallbackPoints.push({
        name: data.pickupLocation,
        city: data.pickupLocation,
        status: 'Origin Hub',
        date: data.pickupDate,
        lat: originCoords.lat,
        lng: originCoords.lng,
        type: 'origin',
      });
    }

    if (data.currentCoordinates) {
      fallbackPoints.push({
        name: data.currentCoordinates.label || data.currentLocation || 'Current Hub',
        status: data.remark || 'In Transit',
        lat: data.currentCoordinates.lat,
        lng: data.currentCoordinates.lng,
        type: 'current',
      });
    } else {
      const currCoords = resolveIndianCityCoords(data.currentLocation || data.remark);
      if (currCoords) {
        fallbackPoints.push({
          name: data.currentLocation || data.remark || 'Current Hub',
          status: data.remark || 'In Transit',
          lat: currCoords.lat,
          lng: currCoords.lng,
          type: 'current',
        });
      }
    }

    const destCoords = resolveIndianCityCoords(data.deliveryDestination);
    if (destCoords && data.deliveryDestination) {
      const isDelivered = (data.remark || '').toLowerCase().includes('delivered');
      fallbackPoints.push({
        name: data.deliveryDestination,
        city: data.deliveryDestination,
        status: isDelivered ? 'Delivered' : `Destination (ETA: ${data.deliveryDate || 'Scheduled'})`,
        date: data.deliveryDate,
        lat: destCoords.lat,
        lng: destCoords.lng,
        type: isDelivered ? 'current' : 'destination',
      });
    }

    return fallbackPoints;
  }, [data]);

  const currentPoint = useMemo(() => {
    return (
      routePoints.find((p) => p.type === 'current') ||
      routePoints[routePoints.length - 1] ||
      null
    );
  }, [routePoints]);

  const fitMapBounds = useCallback(() => {
    const L = window.L;
    const map = mapInstanceRef.current;
    if (!L || !map || routePoints.length === 0) return;

    map.invalidateSize();
    if (routePoints.length === 1) {
      map.setView([routePoints[0].lat, routePoints[0].lng], 10);
    } else {
      const bounds = L.latLngBounds(routePoints.map((p) => [p.lat, p.lng]));
      map.fitBounds(bounds, { padding: [42, 42], maxZoom: 11 });
    }
  }, [routePoints]);

  useEffect(() => {
    if (routePoints.length === 0) return;
    let isCancelled = false;

    loadLeaflet()
      .then((L) => {
        if (isCancelled || !mapContainerRef.current) return;

        if (mapInstanceRef.current) {
          mapInstanceRef.current.remove();
          mapInstanceRef.current = null;
        }

        const map = L.map(mapContainerRef.current, {
          zoomControl: false,
          attributionControl: true,
          scrollWheelZoom: true,
        });

        mapInstanceRef.current = map;

        // Add Zoom Control at bottom-right
        L.control.zoom({ position: 'bottomright' }).addTo(map);

        // Standard OpenStreetMap tile layer matching DP World's clear street + regional label aesthetic
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 18,
          attribution: '&copy; OpenStreetMap contributors',
        }).addTo(map);

        // Separate completed points (origin -> transit -> current) from upcoming destination
        const completedPoints = routePoints.filter((p) => p.type !== 'destination');
        const destinationPoint = routePoints.find((p) => p.type === 'destination');

        // 1. Draw solid navy/indigo polyline for completed transit path (matching DP World screenshot)
        if (completedPoints.length >= 2) {
          const completedLatLngs = completedPoints.map((p) => [p.lat, p.lng]);

          // Subtle outer glow line
          L.polyline(completedLatLngs, {
            color: '#312E81',
            weight: 7,
            opacity: 0.22,
            lineCap: 'round',
            lineJoin: 'round',
          }).addTo(map);

          // Main route line
          L.polyline(completedLatLngs, {
            color: '#23265A',
            weight: 3.5,
            opacity: 0.95,
            lineCap: 'round',
            lineJoin: 'round',
          }).addTo(map);

          // Add directional arrows at the midpoint of each completed route leg
          for (let i = 0; i < completedPoints.length - 1; i++) {
            const p1 = completedPoints[i];
            const p2 = completedPoints[i + 1];
            const midLat = (p1.lat + p2.lat) / 2;
            const midLng = (p1.lng + p2.lng) / 2;
            const bearing = computeBearingDegrees(p1.lat, p1.lng, p2.lat, p2.lng);

            const arrowIcon = L.divIcon({
              className: 'bharat-route-arrow',
              html: `<div style="transform: rotate(${bearing - 90}deg); width: 18px; height: 18px; display: flex; align-items: center; justify-content: center; color: #23265A; font-size: 14px; font-weight: 900; text-shadow: 0 0 3px #fff;">&#10148;</div>`,
              iconSize: [18, 18],
              iconAnchor: [9, 9],
            });

            L.marker([midLat, midLng], { icon: arrowIcon, interactive: false }).addTo(map);
          }
        }

        // 2. Draw dashed orange/amber line from current location to destination (if in transit)
        if (completedPoints.length >= 1 && destinationPoint) {
          const lastCompleted = completedPoints[completedPoints.length - 1];
          L.polyline(
            [
              [lastCompleted.lat, lastCompleted.lng],
              [destinationPoint.lat, destinationPoint.lng],
            ],
            {
              color: '#F28A32',
              weight: 3,
              opacity: 0.85,
              dashArray: '7, 7',
            }
          ).addTo(map);
        }

        // 3. Render Hub & Cargo Markers
        routePoints.forEach((pt, idx) => {
          let markerHtml = '';
          let iconSize: [number, number] = [24, 24];
          let iconAnchor: [number, number] = [12, 12];

          if (pt.type === 'current') {
            iconSize = [34, 34];
            iconAnchor = [17, 17];
            markerHtml = `
              <div style="position: relative; width: 34px; height: 34px; display: flex; align-items: center; justify-content: center;">
                <span style="position: absolute; inset: 0; border-radius: 9999px; background: rgba(35, 38, 90, 0.32); animation: ping 1.8s cubic-bezier(0, 0, 0.2, 1) infinite;"></span>
                <div style="position: relative; width: 26px; height: 26px; border-radius: 9999px; background: #23265A; border: 2.5px solid #FFFFFF; box-shadow: 0 4px 10px rgba(0,0,0,0.35); display: flex; align-items: center; justify-content: center; color: #FFFFFF;">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
              </div>
            `;
          } else if (pt.type === 'origin') {
            iconSize = [22, 22];
            iconAnchor = [11, 11];
            markerHtml = `
              <div style="width: 22px; height: 22px; border-radius: 9999px; background: #23265A; border: 2.5px solid #FFFFFF; box-shadow: 0 2px 6px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center;">
                <div style="width: 7px; height: 7px; border-radius: 9999px; background: #FFFFFF;"></div>
              </div>
            `;
          } else if (pt.type === 'destination') {
            iconSize = [26, 26];
            iconAnchor = [13, 13];
            markerHtml = `
              <div style="width: 26px; height: 26px; border-radius: 9999px; background: #F28A32; border: 2.5px solid #FFFFFF; box-shadow: 0 3px 8px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center; color: #FFFFFF;">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
            `;
          } else {
            iconSize = [16, 16];
            iconAnchor = [8, 8];
            markerHtml = `
              <div style="width: 16px; height: 16px; border-radius: 9999px; background: #3B429F; border: 2px solid #FFFFFF; box-shadow: 0 2px 5px rgba(0,0,0,0.25);"></div>
            `;
          }

          const icon = L.divIcon({
            className: `bharat-map-pin-${pt.type}-${idx}`,
            html: markerHtml,
            iconSize,
            iconAnchor,
            popupAnchor: [0, -12],
          });

          const badgeLabel =
            pt.type === 'current'
              ? 'Current Cargo Location'
              : pt.type === 'origin'
              ? 'Origin Hub'
              : pt.type === 'destination'
              ? 'Delivery Destination'
              : 'Transit Checkpoint';

          const badgeColor =
            pt.type === 'current'
              ? '#10B981'
              : pt.type === 'origin'
              ? '#3B82F6'
              : pt.type === 'destination'
              ? '#F28A32'
              : '#6366F1';

          const popupHtml = `
            <div style="font-family: sans-serif; min-width: 180px; padding: 2px;">
              <div style="font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; color: ${badgeColor}; margin-bottom: 3px;">
                ${badgeLabel}
              </div>
              <div style="font-size: 13px; font-weight: 800; color: #0F172A; margin-bottom: 2px;">
                ${pt.name}
              </div>
              ${
                pt.status
                  ? `<div style="font-size: 11px; color: #334155; font-weight: 600;">${pt.status}</div>`
                  : ''
              }
              ${
                pt.date
                  ? `<div style="font-size: 10px; color: #64748B; font-family: monospace; margin-top: 3px;">${pt.date}</div>`
                  : ''
              }
            </div>
          `;

          const marker = L.marker([pt.lat, pt.lng], { icon }).addTo(map);
          marker.bindPopup(popupHtml);
        });

        setMapReady(true);
        setTimeout(() => {
          if (!isCancelled) fitMapBounds();
        }, 120);
      })
      .catch(() => {
        if (!isCancelled) setMapError(true);
      });

    return () => {
      isCancelled = true;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [routePoints, fitMapBounds]);

  // Re-fit bounds when expanding/collapsing map view
  useEffect(() => {
    if (!mapReady) return;
    const timer = setTimeout(() => {
      fitMapBounds();
    }, 200);
    return () => clearTimeout(timer);
  }, [isExpanded, mapReady, fitMapBounds]);

  if (routePoints.length === 0 || mapError) {
    return null;
  }

  return (
    <div
      className={`rounded-2xl bg-[#071A2B] border border-white/10 overflow-hidden flex flex-col ${
        isExpanded ? 'fixed inset-4 sm:inset-8 z-50 shadow-2xl border-white/25' : 'h-full'
      }`}
    >
      {/* Top Header Bar */}
      <div className="px-5 py-3.5 bg-white/5 border-b border-white/10 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <h4 className="text-sm sm:text-base font-bold text-white">Live Cargo Route Map</h4>
        </div>

        <div className="flex items-center gap-2">
          {currentPoint && (
            <span className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{currentPoint.name}</span>
            </span>
          )}

          <button
            type="button"
            onClick={fitMapBounds}
            title="Recenter Route"
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
              />
            </svg>
          </button>

          <button
            type="button"
            onClick={() => setIsExpanded((prev) => !prev)}
            title={isExpanded ? 'Exit Fullscreen' : 'Expand Map'}
            className="px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/15 transition-colors cursor-pointer"
          >
            {isExpanded ? 'Close Fullscreen' : 'Expand'}
          </button>
        </div>
      </div>

      {/* Interactive Map Canvas */}
      <div className="relative flex-1 min-h-[360px] sm:min-h-[430px] w-full bg-slate-900">
        <div ref={mapContainerRef} className="absolute inset-0 w-full h-full z-10" />
      </div>

      {/* Map Legend & Telemetry Footer */}
      <div className="px-4 py-3 bg-[#0B253D] border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
        <div className="flex flex-wrap items-center gap-4">
          <span className="inline-flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#23265A] border-2 border-white inline-block" />
            <span>Current / Hub Scan</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-5 h-0.5 bg-[#23265A] inline-block" />
            <span>Completed Corridor</span>
          </span>
          {routePoints.some((p) => p.type === 'destination') && (
            <span className="inline-flex items-center gap-1.5">
              <span className="w-5 h-0.5 border-b-2 border-dashed border-[#F28A32] inline-block" />
              <span>Upcoming Leg</span>
            </span>
          )}
        </div>

        {currentPoint && (
          <span className="font-mono text-[11px] text-slate-400">
            GPS: {currentPoint.lat.toFixed(4)}° N, {currentPoint.lng.toFixed(4)}° E
          </span>
        )}
      </div>
    </div>
  );
}


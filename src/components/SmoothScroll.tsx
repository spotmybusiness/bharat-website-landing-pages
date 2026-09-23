'use client';

import React from 'react';

/**
 * SmoothScroll component - Soft scroll (Lenis) disabled.
 * Passthrough wrapper rendering children directly with native browser scrolling.
 */
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}


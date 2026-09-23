'use client';

import { useEffect, useRef } from 'react';
import { trackViewPillarGuide } from '@/lib/analytics';

interface TrackPillarGuideProps {
  slug: string;
}

/**
 * TrackPillarGuide Component
 *
 * Emits the `view_pillar_guide` conversion event exactly once when a pillar guide is mounted.
 * Allows parent guide pages to remain Server Components for maximum SEO and performance.
 */
export default function TrackPillarGuide({ slug }: TrackPillarGuideProps) {
  const trackedRef = useRef(false);

  useEffect(() => {
    if (!trackedRef.current && slug) {
      trackViewPillarGuide({ guide_slug: slug });
      trackedRef.current = true;
    }
  }, [slug]);

  return null;
}


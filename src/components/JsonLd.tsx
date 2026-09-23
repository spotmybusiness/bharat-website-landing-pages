import React from 'react';

interface JsonLdProps {
  /** The structured data object — must include @context and @type. */
  data: Record<string, unknown>;
}

/**
 * Renders a JSON-LD `<script type="application/ld+json">` tag.
 * Server Component — no `'use client'` needed.
 *
 * @example
 * ```tsx
 * <JsonLd data={{
 *   '@context': 'https://schema.org',
 *   '@type': 'LocalBusiness',
 *   name: 'Bharat Relocators',
 * }} />
 * ```
 */
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}


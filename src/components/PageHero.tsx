import React from 'react';
import Breadcrumb, { BreadcrumbItem } from '@/components/Breadcrumb';

export interface PageHeroProps {
  label?: string;
  title: React.ReactNode;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  actions?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  /** Hero image tag slot: e.g. <img src="" alt="..." />. If src is blank, default placeholder frame displays. */
  image?: React.ReactElement<React.ImgHTMLAttributes<HTMLImageElement>>;
  /** Custom right-hand visual/image/graphic to override the placeholder */
  visual?: React.ReactNode;
  /** Custom icon node to override the contextual placeholder icon */
  placeholderIcon?: React.ReactNode;
  /** Custom title/label for the placeholder card */
  placeholderLabel?: string;
  /** Set to false if a page explicitly wishes to omit the right-side visual */
  showPlaceholder?: boolean;
}

interface ContextualVisual {
  label: string;
  icon: React.ReactNode;
}

/**
 * Derives contextual placeholder metadata and SVG icon based on the page's
 * label, breadcrumb hierarchy, and title keywords.
 */
function resolveContextualVisual(
  label?: string,
  title?: React.ReactNode,
  breadcrumbs?: BreadcrumbItem[]
): ContextualVisual {
  const parts: string[] = [];
  if (label) parts.push(label);
  if (breadcrumbs) {
    breadcrumbs.forEach((b) => parts.push(b.label));
  }
  if (typeof title === 'string') {
    parts.push(title);
  }
  const query = parts.join(' ').toLowerCase();

  // 1. Car Transportation
  if (query.includes('car')) {
    return {
      label: 'Car Carrier Visual',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M5 17a2 2 0 100-4 2 2 0 000 4zm14 0a2 2 0 100-4 2 2 0 000 4z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M3 13l2-5h14l2 5M5 13h14v4H5v-4z"
          />
        </svg>
      ),
    };
  }

  // 2. Bike Transportation
  if (query.includes('bike') || query.includes('motorcycle') || query.includes('two-wheeler')) {
    return {
      label: 'Bike Transport Visual',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="5.5" cy="16.5" r="3.5" strokeWidth={1.75} />
          <circle cx="18.5" cy="16.5" r="3.5" strokeWidth={1.75} />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M5.5 16.5h3.5l3-5h4l2 5h1M12 11.5V7m-3 0h6"
          />
        </svg>
      ),
    };
  }

  // 3. Parcel & Cargo
  if (query.includes('parcel') || query.includes('cargo') || query.includes('courier')) {
    return {
      label: 'Parcel & Cargo Visual',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      ),
    };
  }

  // 4. Office Relocation
  if (query.includes('office') || query.includes('commercial') || query.includes('corporate')) {
    return {
      label: 'Office Relocation Visual',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    };
  }

  // 5. International Moving
  if (query.includes('international') || query.includes('global') || query.includes('overseas')) {
    return {
      label: 'Global Freight Visual',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    };
  }

  // 6. Tracking
  if (query.includes('track') || query.includes('consignment')) {
    return {
      label: 'Shipment Tracking Console',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    };
  }

  // 7. Household Shifting / Residential Moves
  if (query.includes('household') || query.includes('home') || query.includes('residential')) {
    return {
      label: 'Household Shifting Visual',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8h4l3 3v5a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h2"
          />
        </svg>
      ),
    };
  }

  // 8. Testimonials / Reviews
  if (query.includes('testimonial') || query.includes('review') || query.includes('feedback')) {
    return {
      label: 'Customer Reviews Visual',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      ),
    };
  }

  // 9. FAQs / Questions
  if (query.includes('faq') || query.includes('question')) {
    return {
      label: 'Knowledge Base Visual',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    };
  }

  // 10. Contact
  if (query.includes('contact') || query.includes('touch')) {
    return {
      label: 'Contact Office Visual',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
    };
  }

  // 11. Process
  if (query.includes('process') || query.includes('how we work')) {
    return {
      label: 'Relocation Process Visual',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
      ),
    };
  }

  // 12. Why Us
  if (query.includes('why us') || query.includes('why choose')) {
    return {
      label: 'Why Choose Us Visual',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    };
  }

  // 13. Moving Guides / Checklist
  if (query.includes('checklist') || query.includes('guide')) {
    return {
      label: 'Relocation Guide Visual',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    };
  }

  // 14. About Us
  if (query.includes('about')) {
    return {
      label: 'About Bharat Relocators',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    };
  }

  // 15. Get a Quote
  if (query.includes('quote') || query.includes('pricing')) {
    return {
      label: 'Instant Quote Visual',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    };
  }

  // Default Fallback
  return {
    label: 'Hero Asset Placeholder',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  };
}

/**
 * Reusable PageHero component styled strictly with the visual language of Bharat Relocators.
 * Uses the navy ambient backdrop, breadcrumb slot, responsive spacing, and a right-aligned
 * visual asset placeholder container for future image/icon placement.
 */
export default function PageHero({
  label,
  title,
  subtitle,
  breadcrumbs,
  actions,
  children,
  className = '',
  image,
  visual,
  placeholderIcon,
  placeholderLabel,
  showPlaceholder = true,
}: PageHeroProps) {
  const contextual = resolveContextualVisual(label, title, breadcrumbs);
  const resolvedLabel = placeholderLabel || contextual.label;
  const resolvedIcon = placeholderIcon || contextual.icon;

  const imageSrc = image?.props?.src;
  const imageType = image?.type;
  const hasValidImage =
    Boolean(image) &&
    (
      // bare <img> with a non-empty src
      (imageType === 'img' && typeof imageSrc === 'string' && imageSrc.trim() !== '') ||
      // <div> wrapper (glass border) containing the image
      (imageType === 'div' && Boolean(image?.props?.children))
    );

  return (
    <section
      className={`relative pt-32 pb-16 lg:pt-36 lg:pb-20 bg-[#071A2B] text-white overflow-hidden w-full max-w-full ${className}`}
    >
      {/* Ambient Dark Navy & Ember Glow Gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071A2B] via-[#071A2B]/95 to-[#082f52]/85 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1478B5]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[250px] bg-[#E53935]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 grain-overlay opacity-[0.03] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="mb-6">
            <Breadcrumb items={breadcrumbs} />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading, Subtitle, Actions, Children */}
          <div className="lg:col-span-7 xl:col-span-7 max-w-3xl min-w-0 w-full">
            {label && (
              <div className="mb-4">
                <span className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white/90 shadow-xs">
                  {label}
                </span>
              </div>
            )}

            <h1 className="text-2xl sm:text-4xl lg:text-[2.75rem] font-display font-extrabold leading-[1.15] mb-5 tracking-tight text-white break-words">
              {title}
            </h1>

            {subtitle && (
              <p className="text-base sm:text-lg text-white/80 font-normal leading-relaxed mb-8 max-w-2xl break-words">
                {subtitle}
              </p>
            )}

            {actions && (
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 items-stretch sm:items-center max-w-full">
                {actions}
              </div>
            )}

            {children}
          </div>

          {/* Right Column: Visual Media / Icon Placeholder Slot */}
          {showPlaceholder && (
            <div className="hidden lg:flex lg:col-span-5 xl:col-span-5 justify-center lg:justify-end">
              {hasValidImage ? (
                <div className="flex items-center justify-center lg:justify-end w-full">
                  {imageType === 'div'
                    ? image
                    : image &&
                      React.cloneElement(image, {
                        className: `max-w-full max-h-[360px] xl:max-h-[400px] w-auto h-auto object-contain transition-transform duration-300 hover:scale-[1.02] drop-shadow-2xl ${image.props.className || ''}`,
                      })}
                </div>
              ) : visual ? (
                visual
              ) : (
                <div className="w-full max-w-[340px] xl:max-w-[390px] rounded-3xl bg-gradient-to-b from-[#0B253D] to-[#071A2B] border border-white/15 p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group transition-all duration-300 hover:border-[#F28A32]/40">
                  {/* Ambient Glows */}
                  <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#F28A32]/15 rounded-full blur-2xl pointer-events-none group-hover:bg-[#F28A32]/25 transition-all duration-500" />
                  <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-[#E53935]/15 rounded-full blur-2xl pointer-events-none group-hover:bg-[#E53935]/25 transition-all duration-500" />

                  {/* Dashed Media Frame (Designated Drop-in Slot) */}
                  <div className="relative w-full aspect-[4/3] rounded-2xl border-2 border-dashed border-white/20 group-hover:border-[#F28A32]/50 transition-all duration-300 flex flex-col items-center justify-center p-6 bg-white/[0.02]">
                    {/* Corner Framing Brackets */}
                    <span className="absolute top-2.5 left-2.5 w-3 h-3 border-t-2 border-l-2 border-white/40 group-hover:border-[#F28A32] transition-colors" />
                    <span className="absolute top-2.5 right-2.5 w-3 h-3 border-t-2 border-r-2 border-white/40 group-hover:border-[#F28A32] transition-colors" />
                    <span className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b-2 border-l-2 border-white/40 group-hover:border-[#F28A32] transition-colors" />
                    <span className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b-2 border-r-2 border-white/40 group-hover:border-[#F28A32] transition-colors" />

                    {/* Center Icon Aura */}
                    <div className="w-20 h-20 xl:w-24 xl:h-24 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/15 flex items-center justify-center shadow-xl text-[#F28A32] group-hover:scale-105 group-hover:text-white transition-all duration-300 mb-3.5">
                      {resolvedIcon}
                    </div>

                    {/* Placeholder Labels */}
                    <span className="text-xs sm:text-sm font-bold text-white tracking-wide uppercase text-center px-2 line-clamp-1">
                      {resolvedLabel}
                    </span>
                    <span className="text-[11px] text-slate-400 mt-1 text-center font-medium">
                      Images or icons to be added
                    </span>
                  </div>

                  {/* Bottom Status / Guidance Bar */}
                  <div className="mt-4 flex items-center justify-between text-[11px] text-slate-400 px-1 pt-1 border-t border-white/10">
                    <span className="inline-flex items-center gap-1.5 font-medium">
                      <span className="w-2 h-2 rounded-full bg-[#E53935] animate-pulse" />
                      Visual Placeholder
                    </span>
                    <span className="font-mono text-[10px] text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                      Slot Size: 4:3
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 inset-x-0 z-10 pointer-events-none">
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
    </section>
  );
}

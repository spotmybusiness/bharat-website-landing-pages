/**
 * Bharat Relocators — Gallery Image Data
 *
 * HOW TO ADD YOUR IMAGES:
 * ─────────────────────────────────────────────────────────────────────────
 * 1. Drop your image files into:  public/images/gallery/
 * 2. Add each filename to the array below (follow the same pattern)
 * 3. Save the file — changes appear instantly on the website
 *
 * Supported formats: .jpg  .jpeg  .png  .webp  .avif
 * ─────────────────────────────────────────────────────────────────────────
 */

export interface GalleryImage {
  src: string;
  alt: string;
  /** Optional: 'wide' images span 2 columns in the gallery grid */
  wide?: boolean;
}

export const galleryImages: GalleryImage[] = [
  // ── ADD YOUR IMAGES BELOW ──────────────────────────────────────────────
  // Example entries — replace with your actual filenames:
  //
  // { src: '/images/gallery/photo1.jpg',   alt: 'Household shifting Kolkata' },
  // { src: '/images/gallery/photo2.jpg',   alt: 'Car transport on carrier'   },
  // { src: '/images/gallery/photo3.jpg',   alt: 'Office relocation team'     },
  // { src: '/images/gallery/photo4.jpg',   alt: 'Packing materials close-up' },
  // { src: '/images/gallery/photo5.jpeg',  alt: 'Bike loading on truck'      },
  // { src: '/images/gallery/photo6.png',   alt: 'Furniture wrapping process' },
  //
  // Keep adding entries for all 80 images in the same format.
  // ──────────────────────────────────────────────────────────────────────
];

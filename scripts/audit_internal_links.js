const fs = require('fs');
const path = require('path');

const canonicalRoutes = new Set([
  '/',
  '/about',
  '/services',
  '/household-shifting',
  '/bike-shifting',
  '/car-shifting',
  '/parcel-shifting',
  '/office-relocation',
  '/international-moving',
  '/blogs',
  '/blogs/packers-and-movers-kolkata-charges',
  '/blogs/packers-and-movers-kolkata-charges-rate-card',
  '/blogs/bike-transport-kolkata-charges-wooden-crating-guide',
  '/blogs/car-transport-from-kolkata-cost-carrier-guide',
  '/blogs/train-parcel-vs-packers-and-movers-bike-shifting-kolkata',
  '/blogs/kolkata-to-bangalore-hyderabad-relocation-cost-corridor-guide',
  '/blogs/avoid-fake-packers-and-movers-scams-kolkata-gst-verification',
  '/blogs/south-kolkata-behala-haltu-to-new-town-rajarhat-shifting-guide',
  '/blogs/shared-part-load-vs-dedicated-container-truck-moving-kolkata',
  '/blogs/iba-approved-bill-format-bank-corporate-reimbursement-guide',
  '/blogs/monsoon-house-shifting-kolkata-waterproof-packing-tips',
  '/blogs/weekend-office-it-server-relocation-salt-lake-sector-v-new-town',
  '/blogs/how-to-pack-fragile-temple-idols-bone-china-antiques-kolkata',
  '/moving-checklist',
  '/vehicle-transportation-guide',
  '/intercity-moving-guide',
  '/process',
  '/why-us',
  '/gallery',
  '/get-a-quote',
  '/testimonials',
  '/faqs',
  '/tracking',
  '/track-your-shipment',
  '/contact'
]);

const validSectionHashes = new Set([
  '/#services',
  '/#process',
  '/#why-us',
  '/#reviews',
  '/#faq',
  '/#contact',
  '/#quote',
  '#services',
  '#process',
  '#why-us',
  '#reviews',
  '#faq',
  '#contact',
  '#quote',
  '#quick-answer',
  '#calculator',
  '#1bhk-moving-cost',
  '#2bhk-3bhk-cost',
  '#corridor-pricing',
  '#lift-comparison',
  '#shuttle-tempo-gst',
  '#official-references',
  '#faqs'
]);

const systemEndpoints = new Set([
  '/robots.txt',
  '/sitemap.xml',
  '/api/google-reviews'
]);

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('src');
const extractedLinks = [];
const hrefRegex = /href=["']([^"']+)["']/g;

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = hrefRegex.exec(content)) !== null) {
    const rawHref = match[1];
    extractedLinks.push({ file: path.relative('.', file), href: rawHref });
  }
});

console.log('Total href instances found in src/:', extractedLinks.length);

const invalidLinks = [];
extractedLinks.forEach(item => {
  const h = item.href;
  if (h.startsWith('tel:') || h.startsWith('mailto:') || h.startsWith('https://') || h.startsWith('http://')) {
    // external
    return;
  }
  if (h.startsWith('{') || h.startsWith('$')) {
    // dynamic expression
    return;
  }
  if (canonicalRoutes.has(h) || validSectionHashes.has(h) || systemEndpoints.has(h)) {
    // valid
    return;
  }
  invalidLinks.push(item);
});

console.log('--- INVALID / NON-CANONICAL / SUSPICIOUS INTERNAL LINKS ---');
console.log(JSON.stringify(invalidLinks, null, 2));

// Also check all links in navigation.ts
const navContent = fs.readFileSync('src/lib/navigation.ts', 'utf8');
const navHrefs = [];
const navRegex = /href:\s*['"]([^'"]+)['"]/g;
let nMatch;
while ((nMatch = navRegex.exec(navContent)) !== null) {
  navHrefs.push(nMatch[1]);
}
console.log('\n--- ALL NAVIGATION.TS HREF ENTRIES ---');
console.log(navHrefs);


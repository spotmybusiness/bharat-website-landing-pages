const fs = require('fs');
const path = require('path');

const canonicalRoutes = new Set([
  '/',
  '/about',
  '/household-shifting',
  '/bike-shifting',
  '/car-shifting',
  '/parcel-shifting',
  '/office-relocation',
  '/international-moving',
  '/moving-guides',
  '/moving-checklist',
  '/vehicle-transportation-guide',
  '/intercity-moving-guide',
  '/get-a-quote',
  '/testimonials',
  '/faqs',
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
  '#quote'
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


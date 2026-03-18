import fs from 'node:fs/promises';
import path from 'node:path';

const DIST_DIR = path.resolve('dist');
const DIST_INDEX_FILE = path.join(DIST_DIR, 'index.html');
const SEO_CONFIG_FILE = path.resolve('data', 'seo.json');

const managedTagPatterns = [
  /\s*<meta\s+name=["']description["'][^>]*>\s*/gi,
  /\s*<meta\s+name=["']robots["'][^>]*>\s*/gi,
  /\s*<link\s+rel=["']canonical["'][^>]*>\s*/gi,
  /\s*<meta\s+property=["']og:[^"']+["'][^>]*>\s*/gi,
  /\s*<meta\s+name=["']twitter:[^"']+["'][^>]*>\s*/gi
];

const escapeHtml = (value) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

const stripManagedTags = (html) =>
  managedTagPatterns.reduce(
    (cleanHtml, pattern) => cleanHtml.replace(pattern, '\n'),
    html
  );

const buildManagedTags = (entry) => {
  const title = escapeHtml(entry.title);
  const description = escapeHtml(entry.description);
  const canonical = escapeHtml(entry.canonical);
  const robots = escapeHtml(entry.robots);
  const ogTitle = escapeHtml(entry.ogTitle);
  const ogDescription = escapeHtml(entry.ogDescription);
  const ogType = escapeHtml(entry.ogType);
  const twitterCard = escapeHtml(entry.twitterCard);

  return [
    `<meta name="description" content="${description}" />`,
    `<link rel="canonical" href="${canonical}" />`,
    `<meta name="robots" content="${robots}" />`,
    `<meta property="og:type" content="${ogType}" />`,
    `<meta property="og:title" content="${ogTitle}" />`,
    `<meta property="og:description" content="${ogDescription}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:site_name" content="Motion Agency" />`,
    `<meta name="twitter:card" content="${twitterCard}" />`,
    `<meta name="twitter:title" content="${ogTitle}" />`,
    `<meta name="twitter:description" content="${ogDescription}" />`,
    `<title>${title}</title>`
  ].join('\n    ');
};

const injectSeoTags = (html, entry) => {
  const baseHtml = stripManagedTags(
    html.replace(/<title>[\s\S]*?<\/title>/i, '\n')
  );

  const managedTags = buildManagedTags(entry);
  return baseHtml.replace('</head>', `    ${managedTags}\n  </head>`);
};

const getOutputPath = (routePath) => {
  if (routePath === '/') {
    return DIST_INDEX_FILE;
  }

  const routeFolder = routePath.replace(/^\/+/, '').replace(/\/+$/, '');
  return path.join(DIST_DIR, routeFolder, 'index.html');
};

const run = async () => {
  const [indexHtml, seoConfigRaw] = await Promise.all([
    fs.readFile(DIST_INDEX_FILE, 'utf8'),
    fs.readFile(SEO_CONFIG_FILE, 'utf8')
  ]);

  const seoConfig = JSON.parse(seoConfigRaw);
  const routeEntries = Object.values(seoConfig.routes);

  await Promise.all(
    routeEntries.map(async (entry) => {
      const prerenderedHtml = injectSeoTags(indexHtml, entry);
      const outputPath = getOutputPath(entry.path);

      await fs.mkdir(path.dirname(outputPath), { recursive: true });
      await fs.writeFile(outputPath, prerenderedHtml, 'utf8');
      console.log(`[seo-prerender] generated ${outputPath}`);
    })
  );
};

run().catch((error) => {
  console.error('[seo-prerender] failed:', error);
  process.exitCode = 1;
});

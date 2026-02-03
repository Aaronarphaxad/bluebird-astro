import type { APIRoute } from 'astro';

const baseUrl = 'https://bluebirdweb.ca';

// All pages on the site
const pages = [
	{ url: '/', changefreq: 'weekly', priority: 1.0, lastmod: new Date().toISOString().split('T')[0] },
	{ url: '/about', changefreq: 'monthly', priority: 0.8, lastmod: new Date().toISOString().split('T')[0] },
	{ url: '/services', changefreq: 'monthly', priority: 0.9, lastmod: new Date().toISOString().split('T')[0] },
	{ url: '/projects', changefreq: 'weekly', priority: 0.9, lastmod: new Date().toISOString().split('T')[0] },
	{ url: '/contact', changefreq: 'monthly', priority: 0.7, lastmod: new Date().toISOString().split('T')[0] },
	{ url: '/privacy', changefreq: 'yearly', priority: 0.3, lastmod: new Date().toISOString().split('T')[0] },
	{ url: '/terms', changefreq: 'yearly', priority: 0.3, lastmod: new Date().toISOString().split('T')[0] },
];

export const GET: APIRoute = () => {
	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${pages
	.map(
		(page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'public, max-age=3600',
		},
	});
};

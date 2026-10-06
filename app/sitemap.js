export default function sitemap() {
  const baseUrl = 'https://rankcine.com';

  // Define all your static public routes
  const routes = [
    '',
    '/faq',
    '/publisher',
    '/ranker',
    '/brands',
    '/influencers',
    '/insights',
    '/contact',
    '/privacy',
    '/terms',
    '/coming-soon'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
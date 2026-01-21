/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.mediterraneanpublishing.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,

  // ❌ Never index these paths
  exclude: ['/not-found'],

  transform: async (config, path) => {
    // ✅ Homepage (root) — include ONCE
    if (path === '/') {
      return {
        loc: '/',
        changefreq: 'daily',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      };
    }

    // ✅ All other normal pages
    return {
      loc: path,
      changefreq: 'daily',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};

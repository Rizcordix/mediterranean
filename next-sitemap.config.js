/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.mediterraneanpublishing.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,

  // Never index error pages
  exclude: ['/not-found'],

  transform: async (config, path) => {
    // ✅ Canonical homepage
    if (path === '/home') {
      return {
        loc: '/', // ROOT ONLY ONCE
        changefreq: 'daily',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      };
    }

    // ❌ Prevent /home itself from appearing
    if (path === '/home') {
      return null;
    }

    // ❌ Prevent accidental duplicate root
    if (path === '/') {
      return null;
    }

    return {
      loc: path,
      changefreq: 'daily',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};

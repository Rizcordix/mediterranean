import { IConfig } from 'next-sitemap';

const config: IConfig = {
  siteUrl: process.env.SITE_URL || 'https://www.mediterraneanpublishing.com/', // change to your domain
  generateRobotsTxt: true, // generates robots.txt
  sitemapSize: 7000,
};

export default config;

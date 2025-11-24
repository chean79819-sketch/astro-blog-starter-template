import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // 您的网站域名
  site: 'https://www.forbidden-chamber.com',
  // 集成配置
  integrations: [mdx(), sitemap()],
});

// @ts-check
// 只需要一次性导入所有需要的模块
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  // 核心设置：您的实际域名
  site: "https://www.forbidden-chamber.com", 
  
  // 集成设置：包含了 MDX 和 Sitemap
  integrations: [mdx(), sitemap()],
  
  // Cloudflare 适配器设置
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
});

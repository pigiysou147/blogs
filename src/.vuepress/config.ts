import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/blogs/",

  lang: "zh-CN",
  title: "silly blogs",
  description: "vuepress-theme-hope 的博客演示",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});

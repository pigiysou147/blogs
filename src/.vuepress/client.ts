import { defineClientConfig } from "vuepress/client";
import BrowseSurport from "./components/browse-surport.vue";
export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    app.component("BrowseSurport", BrowseSurport);
  },
});
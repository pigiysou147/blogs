import { defineClientConfig } from "vuepress/client";
import BrowseSurport from "./components/browse-surport.vue";
export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    app.component("BrowseSurport", BrowseSurport);
  },
});


// import algoliasearch from 'algoliasearch'
// import records from './movie.json'

// const client = algoliasearch(
//   "YTV220JG6D",
//   "3b72d77a58e52810b9ee148fd8c71464"
// );

// const index = client.initIndex("silly-blogs");

// index.saveObjects(records, { autoGenerateObjectIDIfNotExist: true });

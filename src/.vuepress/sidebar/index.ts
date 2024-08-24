import { sidebar } from "vuepress-theme-hope";
import { images, html, css, javascript,performance } from "./web/index.js";
export default sidebar({
  "/": [
    "",
    // {
    //   text: "如何使用",
    //   icon: "laptop-code",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    // {
    //   text: "文章",
    //   icon: "book",
    //   prefix: "posts/",
    //   children: "structure",
    // },
    // "intro",

  ],
  "/web/images/": images,
  "/web/html/": html,
  "/web/css/": css,
  "/web/javascript/": javascript,
  "/web/performance/":performance,


});

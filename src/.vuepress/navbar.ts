import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // "/demo/",
  // {
  //   text: "软件教程",
  //   icon: "software",
  //   prefix: "/software/",
  //   children: [
  //     {
  //       text: "软件教程",
  //       icon: "software",
  //       link: "",
  //       activeMatch: "^/software/$",
  //     },
  //     "vscode/",
  //     "git/",
  //   ],
  // },
  {
    text: "web教程",
    icon: "software",
    prefix: "/web/",
    children: [
      {
        text: "html教程",
        icon: "software",
        link: "html/",
        activeMatch: "^/web/$",
      },
      {
        text: "css教程",
        icon: "software",
        link: "css/",
        activeMatch: "^/web/$",
      },
      {
        text: "javascript教程",
        icon: "software",
        link: "javascript/",
        activeMatch: "^/web/$",
      },
      {
        text: "图片教程",
        icon: "software",
        link: "images/",
        activeMatch: "^/web/$",
      },
      {
        text: "性能优化",
        icon: "software",
        link: "performance/",
        activeMatch: "^/web/$",
      },
      
    ],
  },
]);

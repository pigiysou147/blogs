/*
 * @Author: silly
 * @Descripttion: In User Settings Edit
 * @LastEditTime: 2024-08-18 17:35:35
 * @Date: 2024-08-11 22:28:29
 * @LastEditors: silly
 * @FilePath: \my-docs\src\.vuepress\sidebar.ts
 */
import { sidebar } from "vuepress-theme-hope";


export default sidebar({
  "/": [
    "",
    // "intro",
    {
      text: "软件教程",
      icon: "software",
      prefix: "/software/",
      children: [
        {
          text: "软件教程",
          icon: "software",
          link: "",
          activeMatch: "^/software/$",
        },
        "vscode/",
        "git/",
      ],
    },
  ],
});

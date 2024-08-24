/*
 * @Author: silly
 * @Descripttion: In User Settings Edit
 * @LastEditTime: 2024-08-21 21:41:28
 * @Date: 2024-08-17 17:34:39
 * @LastEditors: silly
 * @FilePath: \my-docs\src\.vuepress\sidebar\web\javascript.ts
 */
import { arraySidebar } from "vuepress-theme-hope";

export const javascript = arraySidebar([
  "",
  "introduction",
  {
    text: "数据类型和结构",
    icon: "laptop-code",
    prefix: "data-types/",
    link: "data-types/",
    children: [
      '',
      'number',
      'string',
      'boolean',
      'null-undefined',
      'bigint',
      'symbol',
      'variable',
    ],
  },

  "comparison",
  "control-flow",
  {
    text: "函数",
    icon: "laptop-code",
    prefix: "functions/",
    // link: "functions/",
    children: [
      'intro',
      'function-expressions',
      'new',
      'return',
      'this',
    ],
  },
  {
    text: "对象",
    icon: "laptop-code",
    prefix: "objects/",
    // link: "objects/",
    children: [
      'intro',
      'property-accessors',
      'prototypal-inheritance',
      'property-descriptors',
    ],
  },
  {
    text: "集合",
    icon: "laptop-code",
    prefix: "collections/",
    link: "collections/",
    children: [
      'indexed',
      'keyed',
    ],
  },
  {
    text: "类",
    icon: "laptop-code",
    prefix: "classes/",
    // link: "classes/",
    children: [
      'intro',
      'extends',
      'class-fields',
      'static-initialization-blocks',
    ],
  },
  "appendix",
]);

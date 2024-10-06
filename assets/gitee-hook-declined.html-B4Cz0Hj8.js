import{_ as e,c as t,o as i,b as a}from"./app-C58kMEDU.js";const o={},s=a('<h3 id="gitee仓库代码提交报错解决方案" tabindex="-1"><a class="header-anchor" href="#gitee仓库代码提交报错解决方案"><span>Gitee仓库代码提交报错解决方案</span></a></h3><p>在尝试将分支推送到 Gitee 时，可能会遇到类似以下的错误信息：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>error: hook declined to update refs/heads/featrue/pipeline</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>这通常是由于 Gitee 上的某些钩子（hooks）拒绝了这次推送。以下是解决此问题的步骤。</p><h4 id="_1-检查邮箱设置" tabindex="-1"><a class="header-anchor" href="#_1-检查邮箱设置"><span>1. 检查邮箱设置</span></a></h4><p>Gitee 可能会因为邮箱未公开而拒绝推送。可以按照以下步骤检查和更改邮箱隐私设置：</p><ul><li>登录 Gitee。</li><li>进入 &quot;设置&quot; &gt; &quot;账户设置&quot;。</li><li>确保邮箱是公开的，或在选择 &quot;不公开邮件&quot; 的情况下考虑更改其他设置。</li></ul><p>通过确保邮箱设置正确，应该能够成功推送代码。如果问题仍然存在，建议检查其他可能的钩子设置或权限问题。</p>',8),n=[s];function l(r,d){return i(),t("div",null,n)}const p=e(o,[["render",l],["__file","gitee-hook-declined.html.vue"]]),h=JSON.parse('{"path":"/posts/gitee-hook-declined.html","title":"","lang":"zh-CN","frontmatter":{"description":"Gitee仓库代码提交报错解决方案 在尝试将分支推送到 Gitee 时，可能会遇到类似以下的错误信息： 这通常是由于 Gitee 上的某些钩子（hooks）拒绝了这次推送。以下是解决此问题的步骤。 1. 检查邮箱设置 Gitee 可能会因为邮箱未公开而拒绝推送。可以按照以下步骤检查和更改邮箱隐私设置： 登录 Gitee。 进入 \\"设置\\" > \\"账户设置...","head":[["meta",{"property":"og:url","content":"https://pigiysou147.github.io/blogs/posts/gitee-hook-declined.html"}],["meta",{"property":"og:site_name","content":"silly blogs"}],["meta",{"property":"og:description","content":"Gitee仓库代码提交报错解决方案 在尝试将分支推送到 Gitee 时，可能会遇到类似以下的错误信息： 这通常是由于 Gitee 上的某些钩子（hooks）拒绝了这次推送。以下是解决此问题的步骤。 1. 检查邮箱设置 Gitee 可能会因为邮箱未公开而拒绝推送。可以按照以下步骤检查和更改邮箱隐私设置： 登录 Gitee。 进入 \\"设置\\" > \\"账户设置..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-06T03:03:22.000Z"}],["meta",{"property":"article:author","content":"Silly"}],["meta",{"property":"article:modified_time","content":"2024-10-06T03:03:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-06T03:03:22.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Silly\\",\\"url\\":\\"https://pigiysou147.com\\"}]}"]]},"headers":[{"level":3,"title":"Gitee仓库代码提交报错解决方案","slug":"gitee仓库代码提交报错解决方案","link":"#gitee仓库代码提交报错解决方案","children":[]}],"git":{"createdTime":1728183802000,"updatedTime":1728183802000,"contributors":[{"name":"方勇","email":"silly@digitalgd.com.cn","commits":1}]},"readingTime":{"minutes":0.68,"words":204},"filePathRelative":"posts/gitee-hook-declined.md","localizedDate":"2024年10月6日","excerpt":"<h3>Gitee仓库代码提交报错解决方案</h3>\\n<p>在尝试将分支推送到 Gitee 时，可能会遇到类似以下的错误信息：</p>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" data-title=\\"\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>error: hook declined to update refs/heads/featrue/pipeline</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{p as comp,h as data};
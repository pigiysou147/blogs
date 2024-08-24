import{_ as e,c as i,o as n,d as a}from"./app-BFNMFIwh.js";const s={},l=a(`<h1 id="null-和-undefined" tabindex="-1"><a class="header-anchor" href="#null-和-undefined"><span>null 和 undefined</span></a></h1><p>JavaScript 有多种方法可以指示值缺失。本页面介绍了两种最常见的方式：<code>null</code> 和 <code>undefined</code> 数据类型。</p><h2 id="null" tabindex="-1"><a class="header-anchor" href="#null"><span><code>null</code></span></a></h2><p><code>null</code> 关键字表示故意定义的缺少值。<code>null</code> 是一个基元，不过 <code>typeof</code> 运算符返回 <code>null</code> 是一个对象。这是从 JavaScript 的第一个版本继承而来的<a href="https://2ality.com/2013/10/typeof-null.html" target="_blank" rel="noopener noreferrer">错误</a>，因此我们特意保留了此错误，以避免破坏预期在网络上的行为。</p><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">typeofnull</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">object</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>您可以将<a href="/web/javascript/data-types/variable" target="_blank" rel="noopener noreferrer">变量</a>定义为 <code>null</code>，并预期该变量反映的是脚本中某个时间点赋值的值或明确不存在的值。您还可以将 <code>null</code> 值分配给现有引用，以清除之前的值。</p><h2 id="undefined" tabindex="-1"><a class="header-anchor" href="#undefined"><span><code>undefined</code></span></a></h2><p><code>undefined</code> 是分配给刚刚声明的<a href="/web/javascript/data-types/variable" target="_blank" rel="noopener noreferrer">变量</a>或分配给未返回有意义的值的操作的结果值的原始值。例如，当您在浏览器的开发者控制台中声明函数时，可能会发生这种情况：</p><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> myFunction</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(){}</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">undefined</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>当函数的 <a href="/web/javascript/functions/return" target="_blank" rel="noopener noreferrer"><code>return</code> 语句</a>未返回任何值时，函数会明确返回 <code>undefined</code>。</p><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(){</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}());</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">undefined</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="null-与-undefined-的比较" tabindex="-1"><a class="header-anchor" href="#null-与-undefined-的比较"><span>“<code>null</code>”与“<code>undefined</code>”的比较</span></a></h2><p>虽然 <code>undefined</code> 和 <code>null</code> 在功能上有所重叠，但它们的用途不同。严格来说，<code>null</code> 表示特意定义为“空白”的值，<code>undefined</code> 表示缺少任何赋值。</p><p><code>null</code> 和 <code>undefined</code> <a href="/web/javascript/comparison#type-coercion-equality" target="_blank" rel="noopener noreferrer">松散相等，但并不严格相等</a>。松散等式运算符会将不同类型的运算数强制转换为布尔值，从而使 <code>null</code> 和 <code>undefined</code> 均为 <code>false</code>。严格的等式运算符将不同数据类型的运算数视为不相等。</p><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">null</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">undefined</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">null</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">===</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">undefined</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>与预留关键字 <code>null</code> 不同，<code>undefined</code> 是<a href="/web/javascript/data-types/variable#global-scope" target="_blank" rel="noopener noreferrer">全局对象</a>的属性。这是在 JavaScript 开发初期做出的设计决策，可让旧版浏览器完全覆盖 <code>undefined</code>。在现代浏览器中，仍可以将 <code>undefined</code> 用作非全局范围内的标识符，从而覆盖该声明的作用域内的值。<strong>切勿</strong>将 <code>undefined</code> 用作标识符。它可能会导致意外行为，并可能会使代码库的未来维护者感到困惑。</p>`,16),t=[l];function d(r,c){return n(),i("div",null,t)}const p=e(s,[["render",d],["__file","null-undefined.html.vue"]]),h=JSON.parse('{"path":"/web/javascript/data-types/null-undefined.html","title":"null 和 undefined","lang":"zh-CN","frontmatter":{"date":"2024-03-31T00:00:00.000Z","category":"javascript","description":"null 和 undefined JavaScript 有多种方法可以指示值缺失。本页面介绍了两种最常见的方式：null 和 undefined 数据类型。 null null 关键字表示故意定义的缺少值。null 是一个基元，不过 typeof 运算符返回 null 是一个对象。这是从 JavaScript 的第一个版本继承而来的错误，因此我们特意保...","head":[["meta",{"property":"og:url","content":"https://pigiysou147.github.io/blogs/web/javascript/data-types/null-undefined.html"}],["meta",{"property":"og:site_name","content":"silly blogs"}],["meta",{"property":"og:title","content":"null 和 undefined"}],["meta",{"property":"og:description","content":"null 和 undefined JavaScript 有多种方法可以指示值缺失。本页面介绍了两种最常见的方式：null 和 undefined 数据类型。 null null 关键字表示故意定义的缺少值。null 是一个基元，不过 typeof 运算符返回 null 是一个对象。这是从 JavaScript 的第一个版本继承而来的错误，因此我们特意保..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-24T07:14:05.000Z"}],["meta",{"property":"article:author","content":"Silly"}],["meta",{"property":"article:published_time","content":"2024-03-31T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-24T07:14:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"null 和 undefined\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-31T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-24T07:14:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Silly\\",\\"url\\":\\"https://pigiysou147.com\\"}]}"]]},"headers":[{"level":2,"title":"null","slug":"null","link":"#null","children":[]},{"level":2,"title":"undefined","slug":"undefined","link":"#undefined","children":[]},{"level":2,"title":"“null”与“undefined”的比较","slug":"null-与-undefined-的比较","link":"#null-与-undefined-的比较","children":[]}],"git":{"createdTime":1724483645000,"updatedTime":1724483645000,"contributors":[{"name":"方勇","email":"silly@digitalgd.com.cn","commits":1}]},"readingTime":{"minutes":1.84,"words":551},"filePathRelative":"web/javascript/data-types/null-undefined.md","localizedDate":"2024年3月31日","excerpt":"\\n<p>JavaScript 有多种方法可以指示值缺失。本页面介绍了两种最常见的方式：<code>null</code> 和 <code>undefined</code> 数据类型。</p>\\n<h2><code>null</code></h2>\\n<p><code>null</code> 关键字表示故意定义的缺少值。<code>null</code> 是一个基元，不过 <code>typeof</code> 运算符返回 <code>null</code> 是一个对象。这是从 JavaScript 的第一个版本继承而来的<a href=\\"https://2ality.com/2013/10/typeof-null.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">错误</a>，因此我们特意保留了此错误，以避免破坏预期在网络上的行为。</p>","autoDesc":true}');export{p as comp,h as data};
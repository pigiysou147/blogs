import{_ as i,c as s,o as a,d as n}from"./app-BEYv8s4s.js";const e={},t=n(`<h1 id="new关键字" tabindex="-1"><a class="header-anchor" href="#new关键字"><span>new关键字</span></a></h1><p>使用 <code>new</code> 调用函数时，系统会使用调用的函数作为该对象的“构造函数”创建一个新对象：</p><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">functionMyFunction</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(){}</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> myObject</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">newMyFunction</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">typeof</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> myObject</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;object&quot;\`</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，“构造函数函数”就可以提供一个模板，用于创建遵循相同结构模式的对象：</p><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">functionMyFunction</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(){</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">  this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">myProperty</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> myObject</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">newMyFunction</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">myObject</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">myProperty</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>构造函数函数中 <a href="/web/javascript/functions/this" target="_blank" rel="noopener noreferrer"><code>this</code></a> 的值引用正在创建的对象，以便在创建对象时使用属性和方法填充该对象。这样就可以创建包含数据值的对象，以及作为单个便携单元对这些数据执行操作所需的任何方法，这一概念称为“封装”：</p><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">functionMyFunction</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">( </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">myArgument</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ){</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">    this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">myValue</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> myArgument</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">    this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">doubleMyValue</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> myArgument</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> *</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> myObject</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">newMyFunction</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">myObject</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">myValue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">10</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">myObject</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">doubleMyValue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">20</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="/web/javascript/functions/this" target="_blank" rel="noopener noreferrer"><code>this</code></a> 是指函数的当前执行上下文，这意味着构造函数函数与任何其他函数遵循相同的 <code>this</code> 值规则。例如，某个用作构造函数的函数在独立调用时会对 <code>this</code> 的值使用<a href="/web/javascript/functions/this#global-binding" target="_blank" rel="noopener noreferrer">全局绑定</a>：</p><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">functionMyFunction</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(){</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">    console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  );</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> myObject</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">newMyFunction</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">MyFunction</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">MyFunction</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// Global \`this\` binding outside of strict mode is \`globalThis\`</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">Window</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{…}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(){</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;use strict&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    functionMyFunction</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(){</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">            console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    MyFunction</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();  </span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// Global \`this\` binding inside of strict mode is \`undefined\`</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}());</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">undefined</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>按照 JavaScript 的内置工厂函数建立的命名模式，构造函数标识符的第一个字符通常采用大写形式。虽然您有时会看到这两个术语可以互换使用，但构造函数函数（用于在使用 <code>new</code> 关键字调用时对新构造的对象执行操作的函数）与“工厂函数”不同，“工厂函数”在正常调用时会明确 <a href="/web/javascript/functions/return" target="_blank" rel="noopener noreferrer"><code>return</code></a> 一个对象：</p><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> myFunction</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">( </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">myArgument</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">){</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;myProperty&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> myArgument</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> };</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> myObject</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> myFunction</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">myObject</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">Object</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{ </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">myProperty</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>虽然基本原则相同，但 ES6 中引入的功能更完善的 <a href="/web/javascript/classes" target="_blank" rel="noopener noreferrer">Class</a> 语法更适合自定义构造函数函数的用例</p>`,12),l=[t];function h(k,p){return a(),s("div",null,l)}const d=i(e,[["render",h],["__file","new.html.vue"]]),c=JSON.parse('{"path":"/web/javascript/functions/new.html","title":"new关键字","lang":"zh-CN","frontmatter":{"date":"2024-03-31T00:00:00.000Z","category":"javascript","tag":["function"],"description":"new关键字 使用 new 调用函数时，系统会使用调用的函数作为该对象的“构造函数”创建一个新对象： 这样，“构造函数函数”就可以提供一个模板，用于创建遵循相同结构模式的对象： 构造函数函数中 this 的值引用正在创建的对象，以便在创建对象时使用属性和方法填充该对象。这样就可以创建包含数据值的对象，以及作为单个便携单元对这些数据执行操作所需的任何方法...","head":[["meta",{"property":"og:url","content":"https://pigiysou147.github.io/blogs/web/javascript/functions/new.html"}],["meta",{"property":"og:site_name","content":"silly blogs"}],["meta",{"property":"og:title","content":"new关键字"}],["meta",{"property":"og:description","content":"new关键字 使用 new 调用函数时，系统会使用调用的函数作为该对象的“构造函数”创建一个新对象： 这样，“构造函数函数”就可以提供一个模板，用于创建遵循相同结构模式的对象： 构造函数函数中 this 的值引用正在创建的对象，以便在创建对象时使用属性和方法填充该对象。这样就可以创建包含数据值的对象，以及作为单个便携单元对这些数据执行操作所需的任何方法..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-24T07:14:05.000Z"}],["meta",{"property":"article:author","content":"Silly"}],["meta",{"property":"article:tag","content":"function"}],["meta",{"property":"article:published_time","content":"2024-03-31T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-24T07:14:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"new关键字\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-31T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-24T07:14:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Silly\\",\\"url\\":\\"https://pigiysou147.com\\"}]}"]]},"headers":[],"git":{"createdTime":1724483645000,"updatedTime":1724483645000,"contributors":[{"name":"方勇","email":"silly@digitalgd.com.cn","commits":1}]},"readingTime":{"minutes":1.61,"words":483},"filePathRelative":"web/javascript/functions/new.md","localizedDate":"2024年3月31日","excerpt":"\\n<p>使用 <code>new</code> 调用函数时，系统会使用调用的函数作为该对象的“构造函数”创建一个新对象：</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"javascript\\" data-title=\\"javascript\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">functionMyFunction</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(){}</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">const</span><span style=\\"--shiki-light:#986801;--shiki-dark:#E5C07B\\"> myObject</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\"> =</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">newMyFunction</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">();</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#0184BC;--shiki-dark:#C678DD\\">typeof</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> myObject</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">&gt;</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"object\\"`</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{d as comp,c as data};

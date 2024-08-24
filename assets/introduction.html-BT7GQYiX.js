import{_ as e,c as s,o as i,d as t}from"./app-BEYv8s4s.js";const n="/blogs/assets/encoded-jwt3-dEFSfrL0.png",a="/blogs/assets/debugger-Cim273XF.png",l="/blogs/assets/client-credentials-grant-BsxYMi_c.png",r="/blogs/assets/comparing-jwt-vs-saml2-CDVbNx2w.png",o={},p=t(`<h2 id="什么是-json-web-token" tabindex="-1"><a class="header-anchor" href="#什么是-json-web-token"><span>什么是 JSON Web Token？</span></a></h2><p>JSON Web Token (JWT) 是一种开放标准 ( <a href="https://tools.ietf.org/html/rfc7519" target="_blank" rel="noopener noreferrer">RFC 7519</a> )，它定义了一种紧凑且自包含的方式，用于以 JSON 对象的形式在各​​方之间安全地传输信息。此信息可以验证和信任，因为它是经过数字签名的。可以使用密钥（使用<strong>HMAC算法）或使用****RSA</strong>或<strong>ECDSA</strong>的公钥/私钥对对JWT 进行签名。</p><p>尽管 JWT 可以加密以在各方之间提供保密性，但我们将重点介绍<em>签名</em>令牌。签名令牌可以验证其中包含的声明的<em>完整性，而加密令牌则向其他方**隐藏</em>这些声明。当使用公钥/私钥对对令牌进行签名时，签名还会证明只有持有私钥的一方才是签名者。</p><h2 id="何时应该使用-json-web-tokens" tabindex="-1"><a class="header-anchor" href="#何时应该使用-json-web-tokens"><span>何时应该使用 JSON Web Tokens？</span></a></h2><p>以下是 JSON Web Tokens 有用的一些场景：</p><ul><li><strong>授权</strong> ：这是使用 JWT 最常见的场景。用户登录后，每个后续请求都将包含 JWT，允许用户访问该令牌允许的路由、服务和资源。单点登录是如今广泛使用 JWT 的一项功能，因为它的开销很小，并且能够轻松跨不同域使用。</li><li><strong>信息交换</strong> ：JSON Web Tokens 是各方之间安全传输信息的一种好方法。由于 JWT 可以签名（例如，使用公钥/私钥对），因此您可以确保发送者的身份是他们所说的那个人。此外，由于签名是使用标头和有效负载计算的，因此您还可以验证内容未被篡改。</li></ul><h2 id="json-web-token-结构是什么" tabindex="-1"><a class="header-anchor" href="#json-web-token-结构是什么"><span>JSON Web Token 结构是什么？</span></a></h2><p>在其紧凑形式中，JSON Web Tokens 由以点 ( ) 分隔的三部分组成<code>.</code>，它们是：</p><ul><li>标头</li><li>有效载荷</li><li>签名</li></ul><p>因此，JWT 通常如下所示。</p><p><code>xxxxx.yyyyy.zzzzz</code></p><p>让我们分解一下不同的部分。</p><h3 id="标头" tabindex="-1"><a class="header-anchor" href="#标头"><span>标头</span></a></h3><p>标头<em>通常</em>由两部分组成：令牌的类型（即 JWT）和正在使用的签名算法（例如 HMAC SHA256 或 RSA）。</p><p>例如：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;alg&quot;: &quot;HS256&quot;,</span></span>
<span class="line"><span>  &quot;typ&quot;: &quot;JWT&quot;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，将此 JSON 经过<strong>Base64Url</strong>编码，形成 JWT 的第一部分。</p><h3 id="有效载荷" tabindex="-1"><a class="header-anchor" href="#有效载荷"><span>有效载荷</span></a></h3><p>令牌的第二部分是有效负载，其中包含声明。声明是关于实体（通常是用户）和其他数据的声明。声明有三种类型： <em>已注册</em> 、<em>公开</em>和<em>私有</em>声明。</p><ul><li><a href="https://tools.ietf.org/html/rfc7519#section-4.1" target="_blank" rel="noopener noreferrer"><strong>注册声明</strong></a>：这些是一组预定义的声明，它们不是强制性的，但建议使用，以提供一组有用的、可互操作的声明。其中一些是： ** iss** （颁发者）、 ** exp** （到期时间）、 ** sub** （主题）、 ** aud** （受众）<a href="https://tools.ietf.org/html/rfc7519#section-4.1" target="_blank" rel="noopener noreferrer">等</a>。 <blockquote><p>请注意，由于 JWT 力求紧凑，因此声明名称只有三个字符。</p></blockquote></li><li><a href="https://tools.ietf.org/html/rfc7519#section-4.2" target="_blank" rel="noopener noreferrer"><strong>公开声明</strong></a>：这些声明可以由使用 JWT 的用户随意定义。但为了避免冲突，应在<a href="https://www.iana.org/assignments/jwt/jwt.xhtml" target="_blank" rel="noopener noreferrer">IANA JSON Web Token Registry</a>中定义它们，或将其定义为包含抗冲突命名空间的 URI。</li><li><a href="https://tools.ietf.org/html/rfc7519#section-4.3" target="_blank" rel="noopener noreferrer"><strong>私人声明</strong></a>：这些是为在同意使用它们的各方之间共享信息而创建的自定义声明，既不是<em>注册声明</em>也不是<em>公开</em>声明。</li></ul><p>示例有效载荷可能是：</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;sub&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;1234567890&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;name&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;John Doe&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;admin&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">true</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后对有效负载进行<strong>Base64Url</strong>编码以形成 JSON Web Token 的第二部分。</p><blockquote><p>请注意，对于签名令牌，此信息虽然受到防篡改保护，但任何人都可以读取。除非已加密，否则不要将机密信息放入 JWT 的有效负载或标头元素中。</p></blockquote><h3 id="签名" tabindex="-1"><a class="header-anchor" href="#签名"><span>签名</span></a></h3><p>要创建签名部分，您必须获取编码的标头、编码的有效负载、秘密、标头中指定的算法，然后对其进行签名。</p><p>例如，如果您想使用 HMAC SHA256 算法，则签名将按以下方式创建：</p><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">HMACSHA256</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  base64UrlEncode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">header</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;.&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> +</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  base64UrlEncode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">payload</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  secret</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>签名用于验证消息在传输过程中未被更改，并且，对于使用私钥签名的令牌，它还可以验证 JWT 的发送者是否是其所述的那个人。</p><h3 id="综合起来" tabindex="-1"><a class="header-anchor" href="#综合起来"><span>综合起来</span></a></h3><p>输出是三个以点分隔的 Base64-URL 字符串，可以在 HTML 和 HTTP 环境中轻松传递，同时与 SAML 等基于 XML 的标准相比更加紧凑。</p><p>下面显示了一个已对先前的标头和有效负载进行编码并使用密钥进行签名的 JWT。 <img src="`+n+'" alt="编码的 JWT" loading="lazy"></p><p>如果您想使用 JWT 并将这些概念付诸实践，您可以使用<a href="https://jwt.io/#debugger-io" target="_blank" rel="noopener noreferrer">jwt.io Debugger</a>来解码、验证和生成 JWT。</p><figure><img src="'+a+'" alt="JWT.io 调试器" tabindex="0" loading="lazy"><figcaption>JWT.io 调试器</figcaption></figure><h2 id="json-web-tokens-如何工作" tabindex="-1"><a class="header-anchor" href="#json-web-tokens-如何工作"><span>JSON Web Tokens 如何工作？</span></a></h2><p>在身份验证中，当用户使用其凭据成功登录时，将返回 JSON Web Token。由于令牌是凭据，因此必须格外小心，以防止出现安全问题。一般来说，您不应将令牌保留超过所需时间。</p><p><a href="https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html#local-storage" target="_blank" rel="noopener noreferrer">由于缺乏安全性，</a>您也不应将敏感的会话数据存储在浏览器存储中。</p><p>每当用户想要访问受保护的路由或资源时，用户代理都应发送 JWT，通常在使用Bearer架构的<strong>Authorization</strong>标头中发送。标头的内容应如下所示：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Authorization:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Bearer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">toke</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">n&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>在某些情况下，这可能是一种无状态授权机制。服务器的受保护路由将检查<code>Authorization</code>标头中是否存在有效的 JWT，如果存在，则允许用户访问受保护的资源。如果 JWT 包含必要的数据，则查询数据库以执行某些操作的需要可能会减少，尽管情况可能并非总是如此。</p><p>请注意，如果您通过 HTTP 标头发送 JWT 令牌，则应尝试防止它们变得太大。某些服务器不接受超过 8 KB 的标头。如果您尝试在 JWT 令牌中嵌入过多信息（例如包括所有用户权限），则可能需要替代解决方案，例如<a href="https://fga.dev/" target="_blank" rel="noopener noreferrer">Auth0 细粒度授权</a>。</p><p>如果在标头中发送令牌<code>Authorization</code>，则跨源资源共享 (CORS) 将不会成为问题，因为它不使用 cookie。</p><p>下图展示了如何获取 JWT 以及如何使用它来访问 API 或资源：</p><figure><img src="'+l+'" alt="JSON Web Token 如何工作" tabindex="0" loading="lazy"><figcaption>JSON Web Token 如何工作</figcaption></figure><ol><li>应用程序或客户端向授权服务器请求授权。这是通过不同的授权流程之一执行的。例如，典型的符合<a href="http://openid.net/connect/" target="_blank" rel="noopener noreferrer">OpenID Connect 的</a><code>/oauth/authorize</code>Web 应用程序将使用<a href="http://openid.net/specs/openid-connect-core-1_0.html#CodeFlowAuth" target="_blank" rel="noopener noreferrer">授权码流程</a>通过端点。</li><li>当授权被批准时，授权服务器会向应用程序返回访问令牌。</li><li>应用程序使用访问令牌来访问受保护的资源（如 API）。</li></ol><p>请注意，使用签名令牌时，令牌中包含的所有信息都会暴露给用户或其他方，即使他们无法更改这些信息。这意味着您不应将秘密信息放在令牌中。</p><h2 id="为什么我们应该使用-json-web-tokens" tabindex="-1"><a class="header-anchor" href="#为什么我们应该使用-json-web-tokens"><span>为什么我们应该使用 JSON Web Tokens？</span></a></h2><p><strong>让我们来谈谈JSON Web 令牌（JWT）与</strong> <strong>简单 Web 令牌（SWT）</strong> 和 <strong>安全断言标记语言令牌（SAML）</strong> 相比的优势。</p><p>由于 JSON 比 XML 更简洁，因此编码后的大小也更小，使得 JWT 比 SAML 更紧凑。这使得 JWT 成为在 HTML 和 HTTP 环境中传递的理想选择。</p><p>在安全性方面，SWT 只能使用 HMAC 算法通过共享密钥进行对称签名。但是，JWT 和 SAML 令牌可以使用 X.509 证书形式的公钥/私钥对进行签名。与 JSON 签名的简单性相比，使用 XML 数字签名对 XML 进行签名而不引入隐蔽的安全漏洞非常困难。</p><p>JSON 解析器在大多数编程语言中很常见，因为它们直接映射到对象。相反，XML 没有自然的文档到对象映射。这使得使用 JWT 比使用 SAML 断言更容易。</p><p>就使用而言，JWT 在互联网规模上使用。这凸显了 JSON Web 令牌在多个平台（尤其是移动平台）上的客户端处理的简易性。</p><p><img src="'+r+'" alt="比较编码的 JWT 和编码的 SAML 的长度" loading="lazy"> <em>编码后的 JWT 和编码后的 SAML 的长度比较</em></p>',53),h=[p];function d(k,c){return i(),s("div",null,h)}const b=e(o,[["render",d],["__file","introduction.html.vue"]]),u=JSON.parse('{"path":"/posts/jwt/introduction.html","title":"JWT 简介","lang":"zh-CN","frontmatter":{"title":"JWT 简介","date":"2024-06-04T00:00:00.000Z","category":"认证","tags":["jwt"],"description":"什么是 JSON Web Token？ JSON Web Token (JWT) 是一种开放标准 ( RFC 7519 )，它定义了一种紧凑且自包含的方式，用于以 JSON 对象的形式在各​​方之间安全地传输信息。此信息可以验证和信任，因为它是经过数字签名的。可以使用密钥（使用HMAC算法）或使用****RSA或ECDSA的公钥/私钥对对JWT 进行签...","head":[["meta",{"property":"og:url","content":"https://pigiysou147.github.io/blogs/posts/jwt/introduction.html"}],["meta",{"property":"og:site_name","content":"silly blogs"}],["meta",{"property":"og:title","content":"JWT 简介"}],["meta",{"property":"og:description","content":"什么是 JSON Web Token？ JSON Web Token (JWT) 是一种开放标准 ( RFC 7519 )，它定义了一种紧凑且自包含的方式，用于以 JSON 对象的形式在各​​方之间安全地传输信息。此信息可以验证和信任，因为它是经过数字签名的。可以使用密钥（使用HMAC算法）或使用****RSA或ECDSA的公钥/私钥对对JWT 进行签..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-24T07:14:05.000Z"}],["meta",{"property":"article:author","content":"Silly"}],["meta",{"property":"article:tag","content":"jwt"}],["meta",{"property":"article:published_time","content":"2024-06-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-24T07:14:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JWT 简介\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-06-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-24T07:14:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Silly\\",\\"url\\":\\"https://pigiysou147.com\\"}]}"]]},"headers":[{"level":2,"title":"什么是 JSON Web Token？","slug":"什么是-json-web-token","link":"#什么是-json-web-token","children":[]},{"level":2,"title":"何时应该使用 JSON Web Tokens？","slug":"何时应该使用-json-web-tokens","link":"#何时应该使用-json-web-tokens","children":[]},{"level":2,"title":"JSON Web Token 结构是什么？","slug":"json-web-token-结构是什么","link":"#json-web-token-结构是什么","children":[{"level":3,"title":"标头","slug":"标头","link":"#标头","children":[]},{"level":3,"title":"有效载荷","slug":"有效载荷","link":"#有效载荷","children":[]},{"level":3,"title":"签名","slug":"签名","link":"#签名","children":[]},{"level":3,"title":"综合起来","slug":"综合起来","link":"#综合起来","children":[]}]},{"level":2,"title":"JSON Web Tokens 如何工作？","slug":"json-web-tokens-如何工作","link":"#json-web-tokens-如何工作","children":[]},{"level":2,"title":"为什么我们应该使用 JSON Web Tokens？","slug":"为什么我们应该使用-json-web-tokens","link":"#为什么我们应该使用-json-web-tokens","children":[]}],"git":{"createdTime":1724483645000,"updatedTime":1724483645000,"contributors":[{"name":"方勇","email":"silly@digitalgd.com.cn","commits":1}]},"readingTime":{"minutes":6.98,"words":2093},"filePathRelative":"posts/jwt/introduction.md","localizedDate":"2024年6月4日","excerpt":"<h2>什么是 JSON Web Token？</h2>\\n<p>JSON Web Token (JWT) 是一种开放标准 (&nbsp;<a href=\\"https://tools.ietf.org/html/rfc7519\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">RFC 7519</a>&nbsp;)，它定义了一种紧凑且自包含的方式，用于以 JSON 对象的形式在各​​方之间安全地传输信息。此信息可以验证和信任，因为它是经过数字签名的。可以使用密钥（使用<strong>HMAC算法）或使用****RSA</strong>或<strong>ECDSA</strong>的公钥/私钥对对JWT 进行签名。</p>","autoDesc":true}');export{b as comp,u as data};

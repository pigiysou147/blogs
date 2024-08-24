import{_ as e,c as i,o as a,d as s}from"./app-BFNMFIwh.js";const t={},n=s(`<h1 id="webrtc介绍" tabindex="-1"><a class="header-anchor" href="#webrtc介绍"><span>WebRTC介绍</span></a></h1><h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景"><span>背景</span></a></h2><p>在互联网的早期阶段，实时通信通常需要依赖复杂的插件或专用软件（如Flash、Silverlight等）。这不仅增加了开发难度，还存在安全性和兼容性问题。为了解决这些挑战，Google于2011年推出了WebRTC项目，旨在通过标准化的API，直接在浏览器中实现实时音视频通信和数据传输。</p><p>WebRTC迅速被W3C（万维网联盟）和IETF（互联网工程任务组）采纳，并成为Web技术的核心部分。如今，所有主流浏览器（如Chrome、Firefox、Safari和Edge）都支持WebRTC，开发者可以通过简单的JavaScript API实现高质量、低延迟的实时通信功能。 Web 实时通信 (WebRTC) 是一系列标准、协议和 JavaScript API，这些标准、协议和 API 的组合可实现浏览器（对等端）之间的点对点音频、视频和数据共享。WebRTC 无需依赖第三方插件或专有软件，而是将实时通信转变为任何 Web 应用程序都可以通过简单的 JavaScript API 利用的标准功能。</p><h2 id="核心组件" tabindex="-1"><a class="header-anchor" href="#核心组件"><span>核心组件</span></a></h2><p>要提供丰富、高质量的 RTC 应用（例如音频和视频电话会议以及点对点数据交换），浏览器需要具备许多新功能：音频和视频处理功能、新应用 API 以及对六种新网络协议的支持。幸运的是，浏览器将大部分复杂性抽象为三个主要 API：</p><h3 id="_1-getusermedia" tabindex="-1"><a class="header-anchor" href="#_1-getusermedia"><span>1. GetUserMedia</span></a></h3><p><code>GetUserMedia</code> 是WebRTC的基础API之一，负责从用户设备（如麦克风、摄像头等）获取音视频流。通过调用 <code>navigator.mediaDevices.getUserMedia()</code>，开发者可以请求用户的音视频权限，并获取相应的媒体流。</p><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">navigator</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">mediaDevices</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getUserMedia</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({ </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">video</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">audio</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> })</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  .</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">then</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">stream</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> =&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    // 将stream绑定到视频元素，展示视频</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">    document</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">querySelector</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;video&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">srcObject</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> stream</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  })</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  .</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">catch</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">error</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> =&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">    console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">error</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;Error accessing media devices.&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">error</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  });</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个API是实时通信的基础，它允许浏览器直接访问硬件设备，并在页面中展示用户的音视频内容。</p><h3 id="_2-rtcpeerconnection" tabindex="-1"><a class="header-anchor" href="#_2-rtcpeerconnection"><span>2. RTCPeerConnection</span></a></h3><p><code>RTCPeerConnection</code> 是WebRTC最重要的组件之一，它负责在两个端点之间建立并维护点对点连接。通过RTCPeerConnection，音视频流和数据通道可以直接在用户之间传输，无需通过中间服务器。</p><p>RTCPeerConnection支持多种网络协议和编解码器，以确保通信的兼容性和质量。此外，它还内置了NAT穿越功能（如STUN和TURN），以应对复杂的网络环境。</p><h3 id="_3-rtcdatachannel" tabindex="-1"><a class="header-anchor" href="#_3-rtcdatachannel"><span>3. RTCDataChannel</span></a></h3><p><code>RTCDataChannel</code> 允许开发者通过WebRTC传输任意类型的数据。这一组件特别适用于低延迟、实时性要求高的应用场景，如实时游戏、文件共享、文本聊天等。</p><p>RTCDataChannel可以通过RTCPeerConnection对象创建，并支持可靠的（类似TCP）和不可靠的（类似UDP）数据传输模式。这使得它在不同的应用场景中具有极高的灵活性。</p><h2 id="webrtc-支持摘要" tabindex="-1"><a class="header-anchor" href="#webrtc-支持摘要"><span>WebRTC 支持摘要</span></a></h2><h3 id="mediastream-和-getusermedia-api" tabindex="-1"><a class="header-anchor" href="#mediastream-和-getusermedia-api"><span><code>MediaStream</code> <strong>和</strong> <code>getUserMedia</code> <strong>API</strong></span></a></h3><ul><li>Chrome 桌面版 18.0.1008 及更高版本；Chrome（Android 29 及更高版本）</li><li>Opera 18 及更高版本；适用于 Android 20 及更高版本的 Opera</li><li>Opera 12、Opera Mobile 12（基于 Presto 引擎）</li><li>Firefox 17 及更高版本</li><li>Microsoft Edge 16 及更高版本</li><li>iOS 上的 Safari 11.2 及更高版本以及 MacOS 上的 Safari 11.1 及更高版本</li><li>Android 设备上的 UC 11.8 及更高版本</li><li>Samsung Internet 4 及更高版本</li></ul><h3 id="rtcpeerconnection-api" tabindex="-1"><a class="header-anchor" href="#rtcpeerconnection-api"><span><code>RTCPeerConnection</code> <strong>API</strong></span></a></h3><ul><li>Chrome 桌面版 20 及更高版本；Chrome（Android 29 及更高版本）（无标志）</li><li>Opera 18 及更高版本（默认开启）；适用于 Android 20 及更高版本的 Opera（默认开启）</li><li>Firefox 22 及更高版本（默认开启）</li><li>Microsoft Edge 16 及更高版本</li><li>iOS 上的 Safari 11.2 及更高版本以及 MacOS 上的 Safari 11.1 及更高版本</li><li>Samsung Internet 4 及更高版本</li></ul><h3 id="rtcdatachannel-api" tabindex="-1"><a class="header-anchor" href="#rtcdatachannel-api"><span><code>RTCDataChannel</code> <strong>API</strong></span></a></h3><ul><li>Chrome 25 中的实验性版本，但在 Chrome 26 及更高版本中更稳定（以及与 Firefox 交互操作功能）；Chrome（Android 29 及更高版本）</li><li>Opera 18 及更高版本中的稳定版（以及与 Firefox 的互操作性）；Opera（Android 20 及更高版本）</li><li>Firefox 22 及更高版本（默认开启）</li></ul><p>如需详细了解针对 API 的跨平台支持（例如 <code>getUserMedia</code> 和 <code>RTCPeerConnection</code>），请参阅 <a href="https://caniuse.com/" target="_blank" rel="noopener noreferrer">caniuse.com</a> 和 <a href="https://chromestatus.com/" target="_blank" rel="noopener noreferrer">Chrome 平台状态</a>。</p>`,24),r=[n];function l(h,p){return a(),i("div",null,r)}const o=e(t,[["render",l],["__file","webrtc.html.vue"]]),c=JSON.parse('{"path":"/posts/network/webrtc.html","title":"WebRTC介绍","lang":"zh-CN","frontmatter":{"date":"2024-06-04T00:00:00.000Z","category":"network","tags":["webrtc"],"description":"WebRTC介绍 背景 在互联网的早期阶段，实时通信通常需要依赖复杂的插件或专用软件（如Flash、Silverlight等）。这不仅增加了开发难度，还存在安全性和兼容性问题。为了解决这些挑战，Google于2011年推出了WebRTC项目，旨在通过标准化的API，直接在浏览器中实现实时音视频通信和数据传输。 WebRTC迅速被W3C（万维网联盟）和I...","head":[["meta",{"property":"og:url","content":"https://pigiysou147.github.io/blogs/posts/network/webrtc.html"}],["meta",{"property":"og:site_name","content":"silly blogs"}],["meta",{"property":"og:title","content":"WebRTC介绍"}],["meta",{"property":"og:description","content":"WebRTC介绍 背景 在互联网的早期阶段，实时通信通常需要依赖复杂的插件或专用软件（如Flash、Silverlight等）。这不仅增加了开发难度，还存在安全性和兼容性问题。为了解决这些挑战，Google于2011年推出了WebRTC项目，旨在通过标准化的API，直接在浏览器中实现实时音视频通信和数据传输。 WebRTC迅速被W3C（万维网联盟）和I..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-24T07:14:05.000Z"}],["meta",{"property":"article:author","content":"Silly"}],["meta",{"property":"article:tag","content":"webrtc"}],["meta",{"property":"article:published_time","content":"2024-06-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-24T07:14:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"WebRTC介绍\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-06-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-24T07:14:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Silly\\",\\"url\\":\\"https://pigiysou147.com\\"}]}"]]},"headers":[{"level":2,"title":"背景","slug":"背景","link":"#背景","children":[]},{"level":2,"title":"核心组件","slug":"核心组件","link":"#核心组件","children":[{"level":3,"title":"1. GetUserMedia","slug":"_1-getusermedia","link":"#_1-getusermedia","children":[]},{"level":3,"title":"2. RTCPeerConnection","slug":"_2-rtcpeerconnection","link":"#_2-rtcpeerconnection","children":[]},{"level":3,"title":"3. RTCDataChannel","slug":"_3-rtcdatachannel","link":"#_3-rtcdatachannel","children":[]}]},{"level":2,"title":"WebRTC 支持摘要","slug":"webrtc-支持摘要","link":"#webrtc-支持摘要","children":[{"level":3,"title":"MediaStream 和 getUserMedia API","slug":"mediastream-和-getusermedia-api","link":"#mediastream-和-getusermedia-api","children":[]},{"level":3,"title":"RTCPeerConnection API","slug":"rtcpeerconnection-api","link":"#rtcpeerconnection-api","children":[]},{"level":3,"title":"RTCDataChannel API","slug":"rtcdatachannel-api","link":"#rtcdatachannel-api","children":[]}]}],"git":{"createdTime":1724483645000,"updatedTime":1724483645000,"contributors":[{"name":"方勇","email":"silly@digitalgd.com.cn","commits":1}]},"readingTime":{"minutes":3.61,"words":1083},"filePathRelative":"posts/network/webrtc.md","localizedDate":"2024年6月4日","excerpt":"\\n<h2>背景</h2>\\n<p>在互联网的早期阶段，实时通信通常需要依赖复杂的插件或专用软件（如Flash、Silverlight等）。这不仅增加了开发难度，还存在安全性和兼容性问题。为了解决这些挑战，Google于2011年推出了WebRTC项目，旨在通过标准化的API，直接在浏览器中实现实时音视频通信和数据传输。</p>\\n<p>WebRTC迅速被W3C（万维网联盟）和IETF（互联网工程任务组）采纳，并成为Web技术的核心部分。如今，所有主流浏览器（如Chrome、Firefox、Safari和Edge）都支持WebRTC，开发者可以通过简单的JavaScript API实现高质量、低延迟的实时通信功能。\\nWeb 实时通信 (WebRTC) 是一系列标准、协议和 JavaScript API，这些标准、协议和 API 的组合可实现浏览器（对等端）之间的点对点音频、视频和数据共享。WebRTC 无需依赖第三方插件或专有软件，而是将实时通信转变为任何 Web 应用程序都可以通过简单的 JavaScript API 利用的标准功能。</p>","autoDesc":true}');export{o as comp,c as data};
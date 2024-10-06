import{_ as e,c as n,o as s,b as a}from"./app-C58kMEDU.js";const i={},c=a(`<h1 id="docker-入门指南" tabindex="-1"><a class="header-anchor" href="#docker-入门指南"><span>Docker 入门指南</span></a></h1><p>Docker 是一种开源的容器化平台，可帮助开发人员和 IT 专业人员在不同环境之间轻松地构建、交付和运行应用程序。通过使用 Docker，您可以将应用程序及其依赖项封装在一个可移植的容器中，以便在任何地方运行。本指南将介绍 Docker 的基本概念和用法，以帮助您开始使用 Docker。</p><h2 id="安装-docker" tabindex="-1"><a class="header-anchor" href="#安装-docker"><span>安装 Docker</span></a></h2><p>首先，您需要在您的机器上安装 Docker。Docker 提供了不同的版本，包括 Docker Desktop for Mac、Docker Desktop for Windows 和 Docker Engine for Linux。您可以从 Docker 官方网站下载适合您操作系统的 Docker 版本，并按照安装说明进行安装。</p><h2 id="创建-docker-容器" tabindex="-1"><a class="header-anchor" href="#创建-docker-容器"><span>创建 Docker 容器</span></a></h2><p>一旦您已经安装了 Docker，您可以使用 Docker 命令行工具来创建和管理 Docker 容器。要创建 Docker 容器，您需要首先选择一个基础镜像（Base Image）。镜像是 Docker 容器的基础，包含了操作系统和一些预安装的软件包。Docker Hub 提供了许多官方和社区维护的镜像，您可以选择其中一个镜像作为您的基础镜像。</p><p>例如，要创建一个基于 Ubuntu 镜像的 Docker 容器，您可以执行以下命令：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>docker run -it ubuntu bash</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>这将创建一个名为 <code>ubuntu</code> 的容器，并打开一个交互式的 shell 终端。<code>-it</code> 参数表示启用交互式模式，<code>bash</code> 表示在容器中运行 Bash shell。</p><h2 id="管理-docker-容器" tabindex="-1"><a class="header-anchor" href="#管理-docker-容器"><span>管理 Docker 容器</span></a></h2><p>一旦您已经创建了 Docker 容器，您可以使用 Docker 命令行工具来管理容器。以下是一些常用的命令：</p><ul><li><code>docker ps</code>：查看正在运行的容器。</li><li><code>docker stop &lt;container_id&gt;</code>：停止运行的容器。</li><li><code>docker start &lt;container_id&gt;</code>：启动已停止的容器。</li><li><code>docker rm &lt;container_id&gt;</code>：删除容器。</li><li><code>docker logs &lt;container_id&gt;</code>：查看容器的日志。</li></ul><h2 id="构建-docker-镜像" tabindex="-1"><a class="header-anchor" href="#构建-docker-镜像"><span>构建 Docker 镜像</span></a></h2><p>除了使用现成的 Docker 镜像外，您还可以创建自己的 Docker 镜像。Docker 镜像是一个包含应用程序和其依赖项的可移植文件。您可以通过编写 Dockerfile 文件来构建 Docker 镜像。Dockerfile 文件包含了构建镜像所需的步骤和命令。</p><p>以下是一个简单的 Dockerfile 文件示例：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 使用基础镜像</span></span>
<span class="line"><span>FROM ubuntu</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 运行更新</span></span>
<span class="line"><span>RUN apt-get update</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 安装软件包</span></span>
<span class="line"><span>RUN apt-get install -y nginx</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 设置默认工作目录</span></span>
<span class="line"><span>WORKDIR /usr/share/nginx/html</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 复制文件</span></span>
<span class="line"><span>COPY index.html .</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 暴露端口</span></span>
<span class="line"><span>EXPOSE 80</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),r=[c];function o(l,t){return s(),n("div",null,r)}const p=e(i,[["render",o],["__file","Docker 入门指南.html.vue"]]),k=JSON.parse('{"path":"/posts/Docker%20%E5%85%A5%E9%97%A8%E6%8C%87%E5%8D%97.html","title":"Docker 入门指南","lang":"zh-CN","frontmatter":{"description":"Docker 入门指南 Docker 是一种开源的容器化平台，可帮助开发人员和 IT 专业人员在不同环境之间轻松地构建、交付和运行应用程序。通过使用 Docker，您可以将应用程序及其依赖项封装在一个可移植的容器中，以便在任何地方运行。本指南将介绍 Docker 的基本概念和用法，以帮助您开始使用 Docker。 安装 Docker 首先，您需要在您的...","head":[["meta",{"property":"og:url","content":"https://pigiysou147.github.io/blogs/posts/Docker%20%E5%85%A5%E9%97%A8%E6%8C%87%E5%8D%97.html"}],["meta",{"property":"og:site_name","content":"silly blogs"}],["meta",{"property":"og:title","content":"Docker 入门指南"}],["meta",{"property":"og:description","content":"Docker 入门指南 Docker 是一种开源的容器化平台，可帮助开发人员和 IT 专业人员在不同环境之间轻松地构建、交付和运行应用程序。通过使用 Docker，您可以将应用程序及其依赖项封装在一个可移植的容器中，以便在任何地方运行。本指南将介绍 Docker 的基本概念和用法，以帮助您开始使用 Docker。 安装 Docker 首先，您需要在您的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-06T03:03:22.000Z"}],["meta",{"property":"article:author","content":"Silly"}],["meta",{"property":"article:modified_time","content":"2024-10-06T03:03:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Docker 入门指南\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-06T03:03:22.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Silly\\",\\"url\\":\\"https://pigiysou147.com\\"}]}"]]},"headers":[{"level":2,"title":"安装 Docker","slug":"安装-docker","link":"#安装-docker","children":[]},{"level":2,"title":"创建 Docker 容器","slug":"创建-docker-容器","link":"#创建-docker-容器","children":[]},{"level":2,"title":"管理 Docker 容器","slug":"管理-docker-容器","link":"#管理-docker-容器","children":[]},{"level":2,"title":"构建 Docker 镜像","slug":"构建-docker-镜像","link":"#构建-docker-镜像","children":[]}],"git":{"createdTime":1728183802000,"updatedTime":1728183802000,"contributors":[{"name":"方勇","email":"silly@digitalgd.com.cn","commits":1}]},"readingTime":{"minutes":2.07,"words":621},"filePathRelative":"posts/Docker 入门指南.md","localizedDate":"2024年10月6日","excerpt":"\\n<p>Docker 是一种开源的容器化平台，可帮助开发人员和 IT 专业人员在不同环境之间轻松地构建、交付和运行应用程序。通过使用 Docker，您可以将应用程序及其依赖项封装在一个可移植的容器中，以便在任何地方运行。本指南将介绍 Docker 的基本概念和用法，以帮助您开始使用 Docker。</p>\\n<h2>安装 Docker</h2>\\n<p>首先，您需要在您的机器上安装 Docker。Docker 提供了不同的版本，包括 Docker Desktop for Mac、Docker Desktop for Windows 和 Docker Engine for Linux。您可以从 Docker 官方网站下载适合您操作系统的 Docker 版本，并按照安装说明进行安装。</p>","autoDesc":true}');export{p as comp,k as data};

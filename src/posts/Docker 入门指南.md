# Docker 入门指南

Docker 是一种开源的容器化平台，可帮助开发人员和 IT 专业人员在不同环境之间轻松地构建、交付和运行应用程序。通过使用 Docker，您可以将应用程序及其依赖项封装在一个可移植的容器中，以便在任何地方运行。本指南将介绍 Docker 的基本概念和用法，以帮助您开始使用 Docker。

## 安装 Docker

首先，您需要在您的机器上安装 Docker。Docker 提供了不同的版本，包括 Docker Desktop for Mac、Docker Desktop for Windows 和 Docker Engine for Linux。您可以从 Docker 官方网站下载适合您操作系统的 Docker 版本，并按照安装说明进行安装。

## 创建 Docker 容器

一旦您已经安装了 Docker，您可以使用 Docker 命令行工具来创建和管理 Docker 容器。要创建 Docker 容器，您需要首先选择一个基础镜像（Base Image）。镜像是 Docker 容器的基础，包含了操作系统和一些预安装的软件包。Docker Hub 提供了许多官方和社区维护的镜像，您可以选择其中一个镜像作为您的基础镜像。

例如，要创建一个基于 Ubuntu 镜像的 Docker 容器，您可以执行以下命令：

```
docker run -it ubuntu bash
```

这将创建一个名为 `ubuntu` 的容器，并打开一个交互式的 shell 终端。`-it` 参数表示启用交互式模式，`bash` 表示在容器中运行 Bash shell。

## 管理 Docker 容器

一旦您已经创建了 Docker 容器，您可以使用 Docker 命令行工具来管理容器。以下是一些常用的命令：

- `docker ps`：查看正在运行的容器。
- `docker stop <container_id>`：停止运行的容器。
- `docker start <container_id>`：启动已停止的容器。
- `docker rm <container_id>`：删除容器。
- `docker logs <container_id>`：查看容器的日志。

## 构建 Docker 镜像

除了使用现成的 Docker 镜像外，您还可以创建自己的 Docker 镜像。Docker 镜像是一个包含应用程序和其依赖项的可移植文件。您可以通过编写 Dockerfile 文件来构建 Docker 镜像。Dockerfile 文件包含了构建镜像所需的步骤和命令。

以下是一个简单的 Dockerfile 文件示例：

```
# 使用基础镜像
FROM ubuntu

# 运行更新
RUN apt-get update

# 安装软件包
RUN apt-get install -y nginx

# 设置默认工作目录
WORKDIR /usr/share/nginx/html

# 复制文件
COPY index.html .

# 暴露端口
EXPOSE 80

```
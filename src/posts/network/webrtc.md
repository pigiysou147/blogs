---
date: 2024-06-04
category: network
tags:
  - webrtc
---

# WebRTC介绍

## 背景

在互联网的早期阶段，实时通信通常需要依赖复杂的插件或专用软件（如Flash、Silverlight等）。这不仅增加了开发难度，还存在安全性和兼容性问题。为了解决这些挑战，Google于2011年推出了WebRTC项目，旨在通过标准化的API，直接在浏览器中实现实时音视频通信和数据传输。

WebRTC迅速被W3C（万维网联盟）和IETF（互联网工程任务组）采纳，并成为Web技术的核心部分。如今，所有主流浏览器（如Chrome、Firefox、Safari和Edge）都支持WebRTC，开发者可以通过简单的JavaScript API实现高质量、低延迟的实时通信功能。
Web 实时通信 (WebRTC) 是一系列标准、协议和 JavaScript API，这些标准、协议和 API 的组合可实现浏览器（对等端）之间的点对点音频、视频和数据共享。WebRTC 无需依赖第三方插件或专有软件，而是将实时通信转变为任何 Web 应用程序都可以通过简单的 JavaScript API 利用的标准功能。

## 核心组件

要提供丰富、高质量的 RTC 应用（例如音频和视频电话会议以及点对点数据交换），浏览器需要具备许多新功能：音频和视频处理功能、新应用 API 以及对六种新网络协议的支持。幸运的是，浏览器将大部分复杂性抽象为三个主要 API：

### 1. GetUserMedia

`GetUserMedia` 是WebRTC的基础API之一，负责从用户设备（如麦克风、摄像头等）获取音视频流。通过调用 `navigator.mediaDevices.getUserMedia()`，开发者可以请求用户的音视频权限，并获取相应的媒体流。
```javascript
navigator.mediaDevices.getUserMedia({ video: true, audio: true })
  .then(stream => {
    // 将stream绑定到视频元素，展示视频
    document.querySelector('video').srcObject = stream;
  })
  .catch(error => {
    console.error('Error accessing media devices.', error);
  });
```
这个API是实时通信的基础，它允许浏览器直接访问硬件设备，并在页面中展示用户的音视频内容。

### 2. RTCPeerConnection

`RTCPeerConnection` 是WebRTC最重要的组件之一，它负责在两个端点之间建立并维护点对点连接。通过RTCPeerConnection，音视频流和数据通道可以直接在用户之间传输，无需通过中间服务器。

RTCPeerConnection支持多种网络协议和编解码器，以确保通信的兼容性和质量。此外，它还内置了NAT穿越功能（如STUN和TURN），以应对复杂的网络环境。

### 3. RTCDataChannel

`RTCDataChannel` 允许开发者通过WebRTC传输任意类型的数据。这一组件特别适用于低延迟、实时性要求高的应用场景，如实时游戏、文件共享、文本聊天等。

RTCDataChannel可以通过RTCPeerConnection对象创建，并支持可靠的（类似TCP）和不可靠的（类似UDP）数据传输模式。这使得它在不同的应用场景中具有极高的灵活性。

## WebRTC 支持摘要

### `MediaStream` **和** `getUserMedia` **API**

* Chrome 桌面版 18.0.1008 及更高版本；Chrome（Android 29 及更高版本）
* Opera 18 及更高版本；适用于 Android 20 及更高版本的 Opera
* Opera 12、Opera Mobile 12（基于 Presto 引擎）
* Firefox 17 及更高版本
* Microsoft Edge 16 及更高版本
* iOS 上的 Safari 11.2 及更高版本以及 MacOS 上的 Safari 11.1 及更高版本
* Android 设备上的 UC 11.8 及更高版本
* Samsung Internet 4 及更高版本

### `RTCPeerConnection` **API**

* Chrome 桌面版 20 及更高版本；Chrome（Android 29 及更高版本）（无标志）
* Opera 18 及更高版本（默认开启）；适用于 Android 20 及更高版本的 Opera（默认开启）
* Firefox 22 及更高版本（默认开启）
* Microsoft Edge 16 及更高版本
* iOS 上的 Safari 11.2 及更高版本以及 MacOS 上的 Safari 11.1 及更高版本
* Samsung Internet 4 及更高版本

### `RTCDataChannel` **API**

* Chrome 25 中的实验性版本，但在 Chrome 26 及更高版本中更稳定（以及与 Firefox 交互操作功能）；Chrome（Android 29 及更高版本）
* Opera 18 及更高版本中的稳定版（以及与 Firefox 的互操作性）；Opera（Android 20 及更高版本）
* Firefox 22 及更高版本（默认开启）

如需详细了解针对 API 的跨平台支持（例如 `getUserMedia` 和 `RTCPeerConnection`），请参阅 [caniuse.com](https://caniuse.com/) 和 [Chrome 平台状态](https://chromestatus.com/)。

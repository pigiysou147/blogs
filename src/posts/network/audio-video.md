---
title: 'WebRTC音视频和传输'
date: 2024-06-04
category: network
tags:
  - webrtc
---


<small>以下内容摘录自 High Performance Browser Networking 翻译整理。如需了解完整版本和相关内容，请访问 [hpbn.co](https://hpbn.co/)</small>

## 音频和视频引擎

要在浏览器中实现丰富的电话会议体验，浏览器必须能够访问系统硬件以捕获音频和视频 - 无需第三方插件或自定义驱动程序，只需一个简单且一致的 API。但是，原始音频和视频流本身也不够：必须对每个流进行处理以提高质量、同步，并且输出比特率必须适应客户端之间不断波动的带宽和延迟。

在接收端，该过程是相反的，客户端必须实时解码流，并能够适应网络抖动和延迟。简而言之，捕获和处理音频和视频是一个复杂的问题。然而，好消息是，WebRTC 为浏览器带来了功能齐全的音频和视频引擎，它们可以替我们处理所有信号处理，甚至更多。

![WebRTC 音频和视频引擎](images/b8cf759a74914c66cec01d50b18de6e0.svg)

音频和视频引擎的完整实现和技术细节很容易成为专门书籍的主题，超出了我们的讨论范围。要了解更多信息，请访问 *[http://www.webrtc.org](http://www.webrtc.org/)* 。

获取的音频流经过降噪和回声消除处理，然后使用优化的窄带或宽带音频编解码器之一自动编码。最后，使用特殊的错误隐藏算法来隐藏网络抖动和数据包丢失的负面影响 - 这些只是亮点！视频引擎通过优化图像质量、选择最佳压缩和编解码器设置、应用抖动和数据包丢失隐藏等方式执行类似的处理。

所有处理都由浏览器直接完成，更重要的是，浏览器会动态调整其处理管道，以适应不断变化的音频和视频流参数以及网络条件。完成所有这些工作后，Web 应用程序将收到优化的媒体流，然后可以将其输出到本地屏幕和扬声器、转发给其他应用程序，或使用 HTML5 媒体 API 之一进行后期处理！

### 使用 getUserMedia 获取音频和视频

媒体捕获和流 W3C 规范定义了一组新的 JavaScript API，使应用程序能够从平台请求音频和视频流，以及一组 API 来操作和处理获取的媒体流。对象`MediaStream`是实现所有这些功能的主要接口。

![MediaStream 携带一个或多个同步轨道](images/1a86ca9ae4a3c0e208ddf2f7fdc38b95.svg)

* MediaStream 对象由一个或多个单独的轨道 (MediaStreamTrack) 组成。
* MediaStream 对象内的轨道彼此同步。
* 输入源可以是物理设备，例如麦克风、网络摄像头或者来自用户硬盘或远程网络对等点的本地或远程文件。
* MediaStream 的输出可以发送到一个或多个目的地：本地视频或音频元素、用于后期处理的 JavaScript 代码或远程对等点。

MediaStream 对象表示实时媒体流，允许应用程序代码获取数据、操作各个轨道并指定输出。所有音频和视频处理（例如噪音消除、均衡、图像增强等）均由音频和视频引擎自动处理。

但是，获取的媒体流的功能受到输入源功能的限制：麦克风只能发出音频流，而某些网络摄像头可以产生比其他摄像头更高分辨率的视频流。因此，在浏览器中请求媒体流时，API`getUserMedia()`允许我们指定强制和可选约束列表，以满足应用程序的需求：

```html
<video autoplay></video>  <!-- 1 -->

<script>
  var constraints = {
    audio: true, //2
    video: { //3
      mandatory: {  //4
        width: { min: 320 },
        height: { min: 180 }
      },
      optional: [  //5
        { width: { max: 1280 }},
        { frameRate: 30 },
        { facingMode: "user" }
      ]
    }
  }

  navigator.getUserMedia(constraints, gotStream, logError);  //6

  function gotStream(stream) { //7
    var video = document.querySelector('video');
    video.src = window.URL.createObjectURL(stream);
  }

  function logError(error) { ... }
</script>
```

1. HTML 视频输出元素
2. 请求强制音轨
3. 请求强制视频曲目
4. 视频轨道强制约束列表
5. 视频轨道的可选约束数组
6. 从浏览器请求音频和视频流
7. 回调函数处理获取的MediaStream

此示例说明了一种更为复杂的场景：我们正在请求音频和视频轨道，并指定必须使用的最低分辨率和摄像头类型，以及 720p 高清视频的可选约束列表！API `getUserMedia()`负责向用户请求对麦克风和摄像头的访问权限，并获取符合指定约束的流 — 这就是旋风之旅。

提供的 API 还使应用程序能够操作单个轨道、克隆轨道、修改约束等。此外，获取流后，我们可以将其输入到各种其他浏览器 API 中：

* Web Audio API 支持在浏览器中处理音频。
* Canvas API 支持捕获和后期处理单个视频帧。
* CSS3 和 WebGL API 可以在输出流上应用各种 2D/3D 效果。

长话短说，`getUserMedia()`这是一个从底层平台获取音频和视频流的简单 API。媒体由 WebRTC 音频和视频引擎自动优化、编码和解码，然后路由到一个或多个输出。这样，我们就完成了构建实时电话会议应用程序的一半——我们只需要将数据路由到对等端！

有关媒体捕获和流 API 功能的完整列表，请参阅[官方 W3C 标准](http://www.w3.org/TR/mediacapture-streams)。

#### 音频 (OPUS) 和视频 (VP8) 比特率

从浏览器请求音频和视频时，请仔细注意流的大小和质量。虽然硬件可能能够捕获高清质量的流，但 CPU 和带宽必须能够跟上！当前的 WebRTC 实现使用 Opus 和 VP8 编解码器：

* Opus 编解码器用于音频，支持恒定和可变比特率编码，需要 6-510 Kbit/s 的带宽。好消息是，该编解码器可以无缝切换并适应可变带宽。
* 用于视频编码的 VP8 编解码器也需要 100–2,000+ Kbit/s 的带宽，比特率取决于流的质量：
  * 720p，30 FPS：1.0~2.0 Mbps
  * 360p，30 FPS：0.5~1.0 Mbps
  * 180p，30 FPS：0.1~0.5 Mbps

因此，单方高清通话可能需要高达 2.5+ Mbps 的网络带宽。如果再增加几个通话方，通话质量必然会下降，以满足额外的带宽以及 CPU、GPU 和内存处理要求。

## 实时网络传输

实时通信对时间敏感；这并不奇怪。因此，音频和视频流应用程序被设计为容忍间歇性数据包丢失：音频和视频编解码器可以填补小的数据空白，通常对输出质量的影响最小。同样，应用程序必须实现自己的逻辑来从丢失或延迟的携带其他类型应用程序数据的数据包中恢复。及时性和低延迟可能比可靠性更重要。

音频和视频流尤其需要适应我们大脑的独特特性。事实证明，我们非常擅长填补空白，但对延迟非常敏感。在音频流中添加一些可变延迟，“感觉不对劲”，但在中间删除几个样本，我们大多数人甚至都不会注意到！

对时效性的要求高于可靠性，这是 UDP 协议成为实时数据传输首选传输协议的主要原因。TCP 传输可靠、有序的数据流：如果中间数据包丢失，则 TCP 会缓冲其后的所有数据包，等待重新传输，然后按顺序将数据流传输给应用程序。相比之下，UDP 提供以下“非服务”：

* 不保证消息传递
  * 无确认、重传或超时。
 
* 不保证交货顺序
  * 没有数据包序列号、没有重新排序、没有队头阻塞。

* 没有连接状态跟踪
  * 没有连接建立或拆除状态机。

* 无拥塞控制
  * 没有内置客户端或网络反馈机制。


UDP 不保证数据的可靠性或顺序，并在每个数据包到达时立即将其传送给应用程序。实际上，它是我们网络堆栈的 IP 层提供的尽力而为交付模型的薄包装。

WebRTC 在传输层使用 UDP：延迟和及时性至关重要。有了它，我们就可以发送音频、视频和应用程序 UDP 数据包，一切就绪了，对吧？嗯，不完全是。我们还需要机制来穿越多层 NAT 和防火墙，协商每个流的参数，提供用户数据加密，实现拥塞和流量控制等等！

UDP 是浏览器实时通信的基础，但为了满足 WebRTC 的所有要求，浏览器还需要大量的支持协议和服务


![WebRTC 协议栈](images/f91164cbbb944d8986c90a1e93afcd82.svg)

* ICE：交互式连接建立（RFC 5245）
  * STUN：NAT 会话遍历实用程序 (RFC 5389)
  * TURN: 使用中继绕过 NAT (RFC 5766)
* SDP：会话描述协议（RFC 4566）
* DTLS：数据报传输层安全性（RFC 6347）
* SCTP：流控制传输协议（RFC 4960）
* SRTP：安全实时传输协议（RFC 3711）

ICE、STUN 和 TURN 是建立和维护通过 UDP 建立的对等连接所必需的。DTLS 用于保护对等端之间的所有数据传输；加密是 WebRTC 的必备功能。最后，SCTP 和 SRTP 是用于多路复用不同流、提供拥塞和流量控制以及在 UDP 之上提供部分可靠交付和其他附加服务的应用协议。

是的，这是一个复杂的堆栈，而且毫不奇怪，在讨论端到端性能之前，我们需要了解每个堆栈在底层是如何工作的。这将是一场旋风之旅，但这是我们本章剩余部分的重点。让我们深入研究一下。

我们并没有忘记 SDP！正如我们将看到的，SDP 是一种用于协商对等连接参数的数据格式。但是，SDP“提供”和“回答”是在带外通信的，这就是协议图中缺少 SDP 的原因。

---
date: 2024-03-31
category: html
tag:
  - audio
  - video
---

# 音频和视频


正如您在[图片](/web/html/images)模块中学到的，HTML 支持将媒体嵌入网页。在本部分，我们将介绍音频和视频文件，包括如何嵌入它们、用户控件、为视频提供静态图片占位符，以及使音频和视频文件可供访问的最佳做法。

## `<audio>`和`<video>`

[`<video>`](https://developer.mozilla.org/docs/Web/HTML/Element/video) 和 [`<audio>`](https://developer.mozilla.org/docs/Web/HTML/Element/audio) 元素可用于通过 `src` 属性直接嵌入媒体播放器，也可以用作一系列 [`<source>`](https://developer.mozilla.org/docs/Web/HTML/Element/source) 元素的容器元素，每个元素都提供 `src` 文件建议。虽然 `<video>` 可用于嵌入音频文件，但 `<audio>` 元素更适用于嵌入声音文件。

起始 `<video>` 和 `<audio>` 标记可以包含其他几个属性，包括 `controls`、`autoplay`、`loop`、`mute`、`preload` 和全局属性。`<video>` 元素还支持 `height`、`width` 和 `poster` 属性。

```html
<video src="videos/machines.webm" poster="images/machine.jpg" controls>
  <p>Watch <a href="https://youtube.com/link">video on Youtube</a></p>
</video>
```

此 `<video>` 示例具有单个来源，该来源的 `src` 属性链接到视频来源。`poster` 属性提供在视频加载时显示的图片。最后，`controls` 属性提供用户视频控件。

后备内容包含在起始标记和结束标记之间。如果用户代理不支持 `<video>`（或 `<audio>`），系统会显示此内容。必须提供结束标记 `</video>`，即使两者之间没有内容，也是如此（但应该始终有后备内容，对吧？）。

如果起始 `<video>` 或 `<audio>` 标记中未包含 `src` 属性，请包含一个或多个 [`<source>`](https://developer.mozilla.org/docs/Web/HTML/Element/source) 元素，每个元素都具有媒体文件的 `src` 属性。以下示例包含三个媒体文件选项：后备内容，以及起始标记和结束标记之间的英语和法语字幕。

```html
<video controls poster="images/machine.jpg">
  <source src="videos/machines.webm" type="video/webm">
  <source src="videos/machines.mp4" type="video/mp4">
  <source src="videos/machines.ogv" type="video/ogg">
  <track label="English" kind="subtitles" srclang="en" src="vtt/subtitles-en.vtt" default />
  <track label="Francais" kind="subtitles" srclang="fr" src="vtt/subtitles-fr.vtt" />
  <p>Watch <a href="https://youtube.com/link">video on Youtube</a></p>
</video>
```

每个 `<source>` 子级都包含一个指向相应资源的 `src` 属性，而 `type` 属性会将所链接文件的[媒体类型](https://developer.mozilla.org/docs/Web/Media/Formats/Containers)告知浏览器。这可以防止浏览器提取其无法解码的媒体文件。

在 `type` 属性中，您可以添加 [`codecs`](https://developer.mozilla.org/docs/Web/Media/Formats/codecs_parameter) 参数，用于指定资源的确切编码方式。利用编解码器，您可以纳入目前并非所有浏览器都支持的媒体优化。编解码器与媒体类型之间用英文分号分隔。例如，可以使用直观的语法编写编解码器，例如 `<source src="videos/machines.webm" type="video/webm;codecs=vp8,vorbis">`，它表示 WebM 文件包含 VP8 视频和 vorbis 音频。编解码器可能也更难解码，例如 `<source src="videos/machines.mp4" type="video/mp4; codecs=avc1.4d002a">`，它表示 MP4 编码为 Advanced Video Coding Main Profile Level 4.2。解释此语法远远超出了本课程的讨论范围。如果您想了解详情，Jake Archibald 有一篇博文介绍了[如何确定 AV1 视频的编解码器参数](https://jakearchibald.com/2022/html-codecs-parameter-for-av1/)。

默认情况下，播放视频时，视频的第一帧会在静态画面可用时显示为静态画面。 这是可以控制的。借助 `poster` 属性，图片来源可以在视频下载期间以及视频播放之前显示。如果视频在播放后又暂停，海报将不会重新显示。

请务必定义视频的宽高比，因为在视频加载时，海报图片与视频之间的尺寸差异会导致重排和重绘。

始终包含[boolean](/web/html/attributes#boolean_attributes) `controls` 属性。这会向用户显示控件，使用户能够控制音量、完全将音频静音以及将视频展开至全屏。省略 `controls` 会导致糟糕的用户体验，特别是在包含布尔值 `autoplay` 属性的情况下。请注意，如果省略布尔值 `muted` 属性，某些浏览器将不会留意 `autoplay` 属性指令，因为自动播放媒体文件通常会导致糟糕的用户体验，即使在静音且具有可见控件的情况下也是如此。

## 曲目

在音频和视频的起始标记和必需的结束标记之间，添加一个或多个 [`<track>`](https://developer.mozilla.org/docs/Web/HTML/Element/track) 元素以指定定时文本轨道。以下示例包含两个 `<track>` 文件，分别提供英语和法语的定时文本字幕。

```html
<track label="English" kind="subtitles" srclang="en" src="vtt/subtitles-en.vtt" default />
<track label="Français" kind="subtitles" srclang="fr" lang="fr-fr" src="vtt/subtitles-fr.vtt" />
```

`src` 属性中指定的轨道文件应采用 [WebVTT 格式](https://developer.mozilla.org/docs/Web/API/WebVTT_API) (.vtt)。 除非包含 [`crossorigin`](https://developer.mozilla.org/docs/Web/HTML/Attributes/crossorigin) 属性，否则这些文件应与 HTML 文档位于同一网域。

轨道 `kind` 属性有五个枚举值：`subtitles`、`captions`、`descriptions`、`chapters` 以及其他 `metadata`。

为对话转录和翻译添加 `subtitles` 以及 `srclang` 属性。每个 `label` 属性的值都会作为一个选项向用户显示。所选 VTT 选项的内容会显示在视频上。您可以通过定位 [::cue/ ::cue()](https://developer.mozilla.org/docs/Web/CSS/::cue) 来设置字幕的外观。

值 `kind="caption"` 应预留用于包含音效和其他相关音频信息的转录和翻译。 这不仅仅适用于失聪观看者。可能用户找不到耳机，因此开启了字幕。或者，他们可能没有听清楚最喜欢的播客的最后几个谈话要点，因此他们想要阅读转录内容以确认自己的理解。通过其他方式访问音频和视频内容既重要又方便。

`kind="description"` 适用于视频中视觉内容的文字说明，供无法观看视频的用户使用，无论他们使用的是没有屏幕的系统（例如 Google Home 或 Alexa），还是失明的用户。

**注意 ** ：[了解无障碍](/web/accessibility)的[音频和视频](/web/accessibility/video-audio)部分详细介绍了[字幕](/web/accessibility/video-audio#captions)、[transcripts](/web/accessibility/video-audio#transcripts)和[语音描述](/web/accessibility/video-audio#audio_descriptions)。使用 [WebVTT 格式](https://developer.mozilla.org/docs/Web/API/WebVTT_API)[提供字幕](https://developer.mozilla.org/docs/Web/Guide/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video)，以便听障人士也能看懂视频。请记住，残障不是一个人与其当前环境之间的差异。听力受损可能是由于用户周围环境嘈杂、扬声器故障或耳机损坏，或者用户听力受损或失聪。确保内容易于访问对很多人来说，这对每个人都是有益的。

## 后台视频注意事项

您的营销或设计团队可能希望您的网站包含背景视频。一般来说，这意味着他们希望视频会静音、自动播放且不含任何控件的循环播放。HTML 代码可能如下所示：

```html
<video autoplay loop muted poster="images/machine.jpg" role="none">
  <source src="videos/machines.webm" type="video/webm">
  <source src="videos/machines.mp4" type="video/mp4">
  <source src="videos/machines.ogv" type="video/ogg">
</video>
```

无法访问背景视频。在未向用户提供完全控制播放和对所有字幕访问权限的情况下，不应通过后台视频来传达内容。由于此视频纯粹只是装饰性视频，因此包含 [`none`](https://developer.mozilla.org/docs/Web/Accessibility/ARIA/Roles/none_role) 的 [ARIA 角色](https://developer.mozilla.org/docs/Web/Accessibility/ARIA/Roles)并省略了任何后备内容。如需提升始终静音的视频的性能，请从媒体来源中[移除相应音轨](https://gist.github.com/liangfu/97f877e311210fa0ae18a31fdd92982e)。

如果您的视频播放时长不超过 5 秒，无障碍指南不需要暂停机制，但默认情况下，具有布尔值 `loop` 属性的任何内容都将永久循环，时长超过此五秒或任何其他时长限制。为了提供良好的用户体验，请务必提供暂停视频的方法。添加 `controls` 是最简单的方法。

## 自定义媒体控件

如需显示自定义视频或音频控件（而不是浏览器内置控件），请添加 `controls` 属性。然后，使用 JavaScript 添加自定义媒体控件并移除控件属性。例如，您可以添加一个 `<button>` 来切换音频文件的播放状态。

```html
<button id="playPause" aria-controls="idOfAudio"
  data-pause-text="Pause audio"
  data-play-text="Play audio">Pause audio</button>
```

此示例包含一个具有 `dataset` 属性的按钮，其中包含当访问者在播放和暂停状态之间切换时更新的文本。`aria-controls` 属性包含在由按钮控制的元素（在本例中为音频）的 `id` 中。每个控制音频的按钮都有一个事件处理脚本。

如需创建自定义控件，请使用 [`HTMLMediaElement.play()`](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/play) 和 [`HTMLMediaElement.pause()`](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/pause)。切换播放状态时，还要切换按钮的文本：

```javascript
const pauseButton = document.getElementById('playPause');

pauseButton.addEventListener("click", pauseAndPlay, false);

function pauseAndPlay() {
  console.log(this);
  const media = document.getElementById(this.getAttribute('aria-controls'));

  if (media.paused) {
    media.play();
    this.innerText = this.dataset.pauseText;
  } else {
    media.pause();
    this.innerText = this.dataset.playText;
  }
}
```

通过添加 `controls` 属性，即使 JavaScript 失败，用户也可以控制音频（或视频）。 仅在替换按钮实例化后，移除控件属性。

```javascript
document.querySelector('[aria-controls]').removeAttribute('controls');
```

当用户无法访问外部控件时（例如，其控件隐藏在网站内容之后的后台视频）应始终包含这些控件。
<style>
:root {
    --vp-c-brand: #646cff;
    --vp-c-brand-light: #747bff;
    --vp-c-brand-lighter: #9499ff;
    --vp-c-brand-lightest: #bcc0ff;
    --vp-c-brand-dark: #535bf2;
    --vp-c-brand-darker: #454ce1;
    --vp-c-brand-dimm: rgba(100, 108, 255, .08);
    --docsearch-primary-color: #5468ff;
    --docsearch-text-color: #1c1e21;
    --docsearch-spacing: 12px;
    --docsearch-icon-stroke-width: 1.4;
    --docsearch-highlight-color: var(--docsearch-primary-color);
    --docsearch-muted-color: #969faf;
    --docsearch-container-background: rgba(101,108,133,.8);
    --docsearch-logo-color: #5468ff;
    --docsearch-modal-width: 560px;
    --docsearch-modal-height: 600px;
    --docsearch-modal-background: #f5f6f7;
    --docsearch-modal-shadow: inset 1px 1px 0 0 hsla(0,0%,100%,.5),0 3px 8px 0 #555a64;
    --docsearch-searchbox-height: 56px;
    --docsearch-searchbox-background: #ebedf0;
    --docsearch-searchbox-focus-background: #fff;
    --docsearch-searchbox-shadow: inset 0 0 0 2px var(--docsearch-primary-color);
    --docsearch-hit-height: 56px;
    --docsearch-hit-color: #444950;
    --docsearch-hit-active-color: #fff;
    --docsearch-hit-background: #fff;
    --docsearch-hit-shadow: 0 1px 3px 0 #d4d9e1;
    --docsearch-key-gradient: linear-gradient(-225deg,#d5dbe4,#f8f8f8);
    --docsearch-key-shadow: inset 0 -2px 0 0 #cdcde6,inset 0 0 1px 1px #fff,0 1px 2px 1px rgba(30,35,90,.4);
    --docsearch-footer-height: 44px;
    --docsearch-footer-background: #fff;
    --docsearch-footer-shadow: 0 -1px 0 0 #e0e3e8,0 -3px 6px 0 rgba(69,98,155,.12);
    --vp-home-hero-name-color: transparent;
    --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe, #41d1ff);
    --vp-home-hero-image-background-image: linear-gradient( -45deg, #bd34fe 50%, #47caff 50% );
    --vp-home-hero-image-filter: blur(80px);
}
</style>
# 外部依赖说明

::: tip 提示
以下列出的是外部依赖，相关的使用文档还需要前往对应的官方文档进行查看
:::

### package.json
直接看`package.json`来个更加直观    
[https://github.com/pumelotea/happyboot-tiger/blob/master/package.json](https://github.com/pumelotea/happyboot-tiger/blob/master/package.json)

### 框架引擎
- happykit:2.2.0

<p style="display: flex">
<img style="margin-right: 10px" src="https://img.shields.io/npm/v/happykit?style=flat-square"/>
<img src="https://img.shields.io/github/last-commit/pumelotea/happykit-next?style=flat-square"/>
</p>


框架引擎作为独立项目单独维护，有利于更换框架UI库


### 框架UI库
- naive-ui:2.32.2

### Markdown编辑器
- bytemd:1.17.2

集成字节跳动开源的markdown编辑器

- github-markdown-css:5.1.0

编辑器内容渲染样式

### 富文本编辑器
- tiptap:2.0.0-beta.182

基于tiptap2.0无头编辑器进行开发，深度结合UI库组件，视觉效果和体验深度融合UI库。


### 图标库
- ionicons5:0.12.0
- remixicon:2.5.0

纯粹个人喜好，这2个库的图标比较丰富

### 工具类
- vueuse:8.0.1

### CSS动画库
- animate.css:4.1.1

### HTTP请求库
- axios:0.26.1

### 图片裁剪
- cropperjs:1.5.12

### 数据图表
- echarts:5.3.1

### 代码高亮
- highlight.js:11.6.0
- lowlight:2.7.0

这2个库存在冲突，lowlight会覆盖highlight的token解析器，会导致highlight失效。


### 在线文件压缩
- jszip:3.10.0

### 数学公式
- katex:0.16.0

主要给编辑器提供数学公式支持

### 打印
- print-js:1.6.0

### 二维码
- qrcode:1.5.0

### 视频播放器
- xgplayer:2.31.6

集成西瓜视频播放器，功能更加强大
---
layout: doc
---
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
# 项目介绍
此章节简要介绍happyboot的主要功能和用的技术。

## 演示地址
[https://tiger.happykit.org/](https://tiger.happykit.org/)

### 项目地址
<p style="display: flex">
<img style="margin-right: 10px" src="https://img.shields.io/github/last-commit/pumelotea/happyboot-tiger?style=flat-square"/>
<img style="margin-right: 10px" src="https://img.shields.io/github/stars/pumelotea/happyboot-tiger?style=flat-square"/>
<img style="margin-right: 10px" src="https://img.shields.io/github/forks/pumelotea/happyboot-tiger?style=flat-square"/>
<img style="margin-right: 10px" src="https://img.shields.io/github/issues/pumelotea/happyboot-tiger?style=flat-square"/>
<img src="https://img.shields.io/github/license/pumelotea/happyboot-tiger?style=flat-square"/>
</p>

[https://github.com/pumelotea/happyboot-tiger](https://github.com/pumelotea/happyboot-tiger)

## 运行效果
![lib](/images/lib.png)
![light](/images/light.png)
![dark](/images/dark.png)
![editor](/images/editor.png)

## 功能描述
`happyboot-tiger`是happyboot系列中最新的中后端框架，采用时下最流行的`Vue3`和`NaiveUI`。
拥有完整的菜单、导航栏、菜单路由按钮权限控制；内置开发并集成了一些常用的组件，比如富文本编辑器、markdown编辑器、头像裁剪、二维码生成等。

## 核心技术
### vue3
渐进式 JavaScript 框架,易学易用，性能出色，适用场景丰富的 Web 前端框架。
### vite2
下一代前端开发与构建工具，启动速度快。

### happykit
happykit是happyboot的驱动引擎，封装实现了菜单、导航、路由、缓存、用户登录登出、token存储等数据。

### javascript
对于大部分人来说`typescript`用着用着就变成了`anyscript`，因此本项目我就懒得用`typescript`了，这对喜欢使用`typescript`的同学不友好。
### navie-ui
Naive UI 是一个 Vue3 的组件库。
它比较完整，主题可调，用 TypeScript 写的，快。
有超过 80 个组件，希望能帮你少写点代码。主题可调。
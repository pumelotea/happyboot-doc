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
# 工程结构
通过`tree -I "node_modules|dist`命令可以输出完整的工程结构树，在每一项尾部会说明作用。
```shell
.
├── LICENSE   #开源协议
├── README.md #说明文档
├── assets # 静态资源，用于github上readme中存储图片
│   ├── dark.png 
│   ├── editor.png
│   ├── lib.png
│   ├── light.png
│   └── logo.png
├── index.html #入口模板文件
├── package.json #项目package.json
├── plugin #vite插件
│   └── demo.js #demo插件，用于方便渲染组件的demo
├── public #静态资源，不会被编译
│   ├── images
│   │   └── no-img.png
│   └── logo.png
├── src #项目源代码
│   ├── App.vue # 项目入口组件
│   ├── HappyBoot.vue # happyboot入口组件
│   ├── assets  #静态资源，会被编译
│   │   ├── bg.png
│   │   ├── logo.png
│   │   ├── qr-demo.png
│   │   └── remixicon.json
│   ├── components # 全局组件库，组件的内容具体查看演示地址https://tiger.happykit.org/
│   │   ├── HbAdminAdjustableContainer.vue
│   │   ├── HbAdminAudio.vue
│   │   ├── HbAdminAvatarCropper.vue
│   │   ├── HbAdminCopyright.vue
│   │   ├── HbAdminDemoCard.vue
│   │   ├── HbAdminHead.vue
│   │   ├── HbAdminIconSelect.vue
│   │   ├── HbAdminImage.vue
│   │   ├── HbAdminImageFactory
│   │   │   ├── components
│   │   │   │   ├── HbCropper.vue
│   │   │   │   └── HbWaterMark.vue
│   │   │   └── index.vue
│   │   ├── HbAdminImagePreview.vue
│   │   ├── HbAdminLoading.vue
│   │   ├── HbAdminLogo.vue
│   │   ├── HbAdminMarkdown.vue
│   │   ├── HbAdminMenu.vue
│   │   ├── HbAdminMessage.vue
│   │   ├── HbAdminNav.vue
│   │   ├── HbAdminOnlineUserList.vue
│   │   ├── HbAdminPageLayout.vue
│   │   ├── HbAdminPrint.vue
│   │   ├── HbAdminQrCode.vue
│   │   ├── HbAdminRollArea.vue
│   │   ├── HbAdminScaleCard.vue
│   │   ├── HbAdminScreenLocker.vue
│   │   ├── HbAdminScrollList.vue
│   │   ├── HbAdminSimpleChart.vue
│   │   ├── HbAdminSimpleUpload.vue
│   │   ├── HbAdminUserCard.vue
│   │   ├── HbAdminVirtualList.vue
│   │   ├── HbAdminWeather.vue
│   │   ├── charts
│   │   │   ├── HbAdminChartBar.vue
│   │   │   ├── HbAdminChartLine.vue
│   │   │   └── HbAdminChartPie.vue
│   │   ├── dev
│   │   │   └── HbAdminDevTool.vue
│   │   └── tiptap
│   │       ├── HbAdminTipTap.vue
│   │       ├── TODO.md
│   │       ├── components
│   │       │   ├── HbTiptapBubbleMenu.vue
│   │       │   ├── HbTiptapCodeBlockComponent.vue
│   │       │   ├── HbTiptapColorPicker.vue
│   │       │   ├── HbTiptapImage.vue
│   │       │   ├── HbTiptapImageComponent.vue
│   │       │   ├── HbTiptapLink.vue
│   │       │   ├── HbTiptapMath.vue
│   │       │   ├── HbTiptapMathComponent.vue
│   │       │   ├── HbTiptapMathContent.vue
│   │       │   ├── HbTiptapMenuBar.vue
│   │       │   ├── HbTiptapMenuItem.vue
│   │       │   ├── HbTiptapResizer.vue
│   │       │   ├── HbTiptapTableCreator.vue
│   │       │   ├── HbTiptapVideo.vue
│   │       │   └── HbTiptapVideoComponent.vue
│   │       ├── editor.css
│   │       └── extension
│   │           ├── hb-image.js
│   │           ├── hb-math.js
│   │           ├── hb-video.js
│   │           └── start-kit.js
│   ├── global #全局配置
│   │   ├── api #http接口定义
│   │   │   └── index.js
│   │   ├── config.js #全局配置参数
│   │   ├── framework.js #引擎引入
│   │   ├── http #http请求封装库
│   │   │   ├── cancelRepeatRquest.js
│   │   │   ├── commonFuns.js
│   │   │   ├── index.js
│   │   │   ├── requestAgainSend.js
│   │   │   └── requestCache.js
│   │   ├── router #路由配置
│   │   │   ├── config.js
│   │   │   └── index.js
│   │   └── security.js #用户状态库
│   ├── main.js #框架js入口
│   ├── mock #假数据
│   │   └── routerData.js #菜单假数据
│   ├── utils #工具库
│   │   └── imageFactory.js
│   └── views #页面，页面的具体效果，查看演示地址https://tiger.happykit.org/
│       ├── adjustable-container-demo
│       │   ├── base.demo.vue
│       │   └── index.vue
│       ├── audio-demo
│       │   ├── base.demo.vue
│       │   ├── index.vue
│       │   ├── simple.demo.vue
│       │   └── voice.demo.vue
│       ├── avatar-demo
│       │   ├── card.demo.vue
│       │   ├── index.vue
│       │   └── modal.demo.vue
│       ├── baidu-map-demo
│       │   ├── base.demo.vue
│       │   └── index.vue
│       ├── base-list
│       │   ├── dialog
│       │   │   └── Create.vue
│       │   └── index.vue
│       ├── card-list
│       │   └── index.vue
│       ├── charts-demo
│       │   ├── bar.demo.vue
│       │   ├── index.vue
│       │   ├── line.demo.vue
│       │   ├── pie.demo.vue
│       │   └── scale.pie.demo.vue
│       ├── component-list
│       │   └── index.vue
│       ├── copy-demo
│       │   ├── base.demo.vue
│       │   └── index.vue
│       ├── custom-tab-title-demo
│       │   └── index.vue
│       ├── dashboard
│       │   └── index.vue
│       ├── editor-demo
│       │   ├── base.demo.vue
│       │   └── index.vue
│       ├── error
│       │   └── index.vue
│       ├── error403
│       │   └── index.vue
│       ├── error404
│       │   └── index.vue
│       ├── error500
│       │   └── index.vue
│       ├── hide
│       │   └── index.vue
│       ├── home
│       │   ├── index.vue
│       │   └── load-placeholder.vue
│       ├── icon-select-demo
│       │   ├── base.demo.vue
│       │   ├── index.vue
│       │   └── modal.demo.vue
│       ├── iframe
│       │   └── index.vue
│       ├── image-demo
│       │   ├── base.demo.vue
│       │   ├── h.demo.vue
│       │   ├── index.vue
│       │   └── w.demo.vue
│       ├── image-factory-demo
│       │   ├── cropper.demo.vue
│       │   ├── index.vue
│       │   └── watermark.demo.vue
│       ├── image-preview-demo
│       │   ├── base.demo.vue
│       │   └── index.vue
│       ├── login
│       │   └── index.vue
│       ├── markdown-demo
│       │   ├── base.demo.vue
│       │   └── index.vue
│       ├── permission
│       │   └── index.vue
│       ├── point-demo
│       │   └── index.vue
│       ├── print-demo
│       │   ├── image.demo.vue
│       │   ├── index.vue
│       │   ├── table.demo.vue
│       │   └── text.demo.vue
│       ├── qrcode-demo
│       │   ├── base.demo.vue
│       │   └── index.vue
│       ├── quick-login
│       │   └── index.vue
│       ├── recover
│       │   └── index.vue
│       ├── role
│       │   └── index.vue
│       ├── roll-area-demo
│       │   ├── base.demo.vue
│       │   └── index.vue
│       ├── scale-card-demo
│       │   ├── contain.demo.vue
│       │   ├── cover.demo.vue
│       │   ├── fill.demo.vue
│       │   └── index.vue
│       ├── screen-locker-demo
│       │   ├── base.demo.vue
│       │   └── index.vue
│       ├── scroll-list-demo
│       │   ├── base.demo.vue
│       │   └── index.vue
│       ├── signup
│       │   └── index.vue
│       ├── uploader-demo
│       │   └── index.vue
│       ├── user
│       │   └── index.vue
│       ├── video-demo
│       │   ├── base.demo.vue
│       │   └── index.vue
│       ├── virtual-list-demo
│       │   ├── auto.demo.vue
│       │   ├── base.demo.vue
│       │   └── index.vue
│       ├── weather-demo
│       │   ├── base.demo.vue
│       │   └── index.vue
│       ├── work-desk
│       │   └── index.vue
│       └── zip-demo
│           ├── base.demo.vue
│           └── index.vue
├── .env.dev #多环境配置文件，开发环境
├── .env.prod #多环境配置文件，生产环境
├── .env.test #多环境配置文件，测试环境
├── .gitignore #git提交忽略文件
├── .eslintrc.js #eslint配置
├── .nojekyll #github pages忽略模板
├── vite.config.js
├── webpack.config.js
└── yarn.lock #包管理器依赖锁定文件

```
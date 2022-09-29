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
#  多环境

框架基于`vite2`环境文件`.evn.xxxx`实现多环境的实现。

## 基础
在项目结构根目录下，默认提供了3个环境文件
 
- `.env.dev` 开发环境
- `.env.prod` 生产环境
- `.env.test` 测试环境

默认的环境文件的内容：
```
# 运行模式
NODE_ENV = 'development' #production
# oss地址
VITE_APP_OSS = 'https://oss.xxx.cn'
# 接口地址
VITE_APP_API = 'https://api.xxx.cn'
```
更多的环境变量可以自行扩展。

:::tip 提示
环境变量的具体文档需要查阅[vite2的官方文档](https://vitejs.cn/guide/env-and-mode.html)
:::

## 环境变量使用

- [axios配置](https://github.com/pumelotea/happyboot-tiger/blob/master/src/global/http/index.js#L26) 
```js
const axios = Axios.create({
  baseURL: import.meta.env.VITE_APP_API || '',
  timeout: 60000
})
```

- 其他
```js
const foo = import.meta.env['foo']
```

## 编译配置

修改构建脚本

```json
{
  "name": "happyboot-tiger",
  "private": true,
  "version": "1.0.0",
  "scripts": {
    "dev": "vite --mode dev",
+   "build-test": "vite build --mode test",
+   "build-prod": "vite build --mode prod",
    "preview": "vite preview",
    "lint": "eslint src/**/*.{js,vue,demo.vue} --fix"
  },
  ...
}
```
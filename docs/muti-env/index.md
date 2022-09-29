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
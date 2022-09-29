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

# 快速上手

## 项目地址


<p style="display: flex">
<img style="margin-right: 10px" src="https://img.shields.io/github/last-commit/pumelotea/happyboot-tiger?style=flat-square"/>
<img style="margin-right: 10px" src="https://img.shields.io/github/stars/pumelotea/happyboot-tiger?style=flat-square"/>
<img style="margin-right: 10px" src="https://img.shields.io/github/forks/pumelotea/happyboot-tiger?style=flat-square"/>
<img style="margin-right: 10px" src="https://img.shields.io/github/issues/pumelotea/happyboot-tiger?style=flat-square"/>
<img src="https://img.shields.io/github/license/pumelotea/happyboot-tiger?style=flat-square"/>
</p>

[https://github.com/pumelotea/happyboot-tiger](https://github.com/pumelotea/happyboot-tiger)

## 下载并运行
```shell
git clone -b master https://github.com/pumelotea/happyboot-tiger.git
cd happyboot-tiger
yarn
yarn dev 
```

## 后端接口地址配置
修改工程根目录下的`.env.dev`文件，更换`VITE_APP_API`的值，替换为后端服务的地址。
```
NODE_ENV = 'development'
VITE_APP_OSS = 'https://oss.xxx.cn'
VITE_APP_API = 'https://api.xxx.cn'
```

对于接口的定义，默认可以编写在这里`src/global/api/index.js`
```js
import request from '../http'

// demo 代码
// export default {
//   middleViewData: data => request.get('/jscApi/middleViewData', { data }), // 正常请求
//   cancelReq: data => request.get('http://localhost:3003/jscApi/middleViewData', { data, cancelRequest: true }), // 测试取消请求
//   reqAgainSend: data => request.get('/equ/equTypeList11', { data, retry: 3, retryDelay: 1000 }), // 测试请求重发，除了原请求外还会重发3次
//   cacheEquList: data => request.get('/equ/equList', { data, cache: true, setExpireTime: 30000 }), // 测试缓存请求带参数：setExpireTime 为缓存有效时间ms
//   cacheEquListParams: data => request.get('/equ/equList', { data, cache: true }) // 测试缓存请求参数值不一样
// };

export default {
  getCaptcha: () => request.get('/captcha')
}

```

## 菜单数据对接
对于菜单的数据结构设计基本上是树形结构的，但是每一位设计者设计出来的结构字段肯定都是不同的，因此需要开发者编写一个适配器，适配器的类型定义也会给出。
下面会给出菜单结构、转换器的定义和参考数据。

### 菜单数据结构定义
```js
/**
 * 菜单类型
 */
declare type MenuType = 'menu' | 'point';
/**
 * 链接跳转类型
 */
declare type LinkTarget = 'self' | 'tab' | 'blank';
declare interface MenuItem {
    /**
     * 必须要有的数据
     */
    menuId: string;
    name: string;
    icon: string;
    path: string;
    view: string;
    isRouter: boolean;
    isKeepalive: boolean;
    type: MenuType;
    externalLink: boolean;
    linkTarget: LinkTarget;
    externalLinkAddress: string;
    hide: boolean;
    isHome: boolean;
    permissionKey: string;
    children: MenuItem[];
    /**
     * 预处理后的数据
     * 使用上面的数据经过预处理后的数据
     */
    routerPath: string;
    menuPath: MenuItem[];
    breadcrumb: MenuItem[];
    pointList: MenuItem[];
    pointsMap: Map<string, MenuItem>;
    [propName: string]: any;
}

/**
 * 菜单数据适配器
 */
declare interface MenuAdapter<T> {
  convert(rawData: any): {
    routeMappingList: T[];
    menuTreeConverted: T[];
    menuIdMappingMap: Map<string, T>;
  };
}
```
### 开发菜单数据适配器

```js
/**
 * UUID生成
 * @returns {string}
 */
export function uuid () {
  const s = []
  const hexDigits = '0123456789abcdef'
  for (let i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
  }
  s[14] = '4' // bits 12-15 of the time_hi_and_version field to 0010
  // tslint:disable-next-line:no-bitwise
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1) // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = '-'
  return s.join('')
}

/**
 * 深度拷贝
 * @param source
 */
function deepClone (source) {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments shallowClone')
  }
  const targetObj = source.constructor === Array ? [] : {}
  for (const keys in source) {
    // eslint-disable-next-line no-prototype-builtins
    if (source.hasOwnProperty(keys)) {
      if (source[keys] && typeof source[keys] === 'object') {
        targetObj[keys] = source[keys].constructor === Array ? [] : {}
        targetObj[keys] = deepClone(source[keys])
      } else {
        targetObj[keys] = source[keys]
      }
    }
  }
  return targetObj
}

/**
 * 自定义菜单适配器
 * @returns {{menuTreeConverted: (*|*[]), routeMappingList: *[], menuIdMappingMap: Map<any, any>}|{convert(*): {menuTreeConverted, routeMappingList: [], menuIdMappingMap: *}}}
 */
function createMenuAdapter () {
  return {
    convert (menuTree) {
      const routeMappingList = []
      const menuIdMappingMap = new Map()
      const menuTreeConverted = []

      const menuTypeMap = {
        menu : 'menu',
        point: 'point'
      }

      const linkTargetMap = {
        _tab  : 'tab',
        _self : 'self',
        _blank: 'blank'
      }

      const forEachTree = (tree, pNode) => {
        for (let i = 0; i < tree.length; i++) {
          // 创建新的节点
          const treeNode = createEmptyMenuItem()
          treeNode.menuId = uuid()
          treeNode.name = tree[i].name || ''
          treeNode.path = tree[i].path || ''
          treeNode.icon = tree[i].icon || ''
          treeNode.view = tree[i].view || ''
          treeNode.isRouter = tree[i].isRouter || false
          treeNode.isKeepalive = tree[i].isKeepalive || false
          treeNode.type = tree[i].type || 'menu'
          treeNode.externalLink = tree[i].externalLink || false
          treeNode.linkTarget = linkTargetMap[tree[i].linkTarget] || 'tab'
          treeNode.externalLinkAddress = tree[i].externalLinkAddress || ''
          treeNode.hide = tree[i].hide || false
          treeNode.isHome = tree[i].isHome || false
          treeNode.permissionKey = tree[i].permissionKey || ''
          treeNode.budge = tree[i].budge || null

          if (!pNode) {
            pNode = createEmptyMenuItem()
            menuTreeConverted.push(pNode)
          }
          pNode.children.push(treeNode)
          // 拼接路由
          treeNode.routerPath = pNode.routerPath + treeNode.path
          // 预先生成菜单节点路径
          const tmpNode = deepClone(treeNode)
          tmpNode.children = []
          tmpNode.menuPath = []
          tmpNode.breadcrumb = []
          treeNode.menuPath = [ ...pNode.menuPath, tmpNode ]
          // breadcrumb
          treeNode.breadcrumb = [ ...pNode.breadcrumb, tmpNode ]

          // 记录id映射表
          menuIdMappingMap.set(treeNode.menuId, treeNode)

          if (treeNode.type === 'menu') {
            if (!treeNode.isRouter) {
              forEachTree(tree[i].children, treeNode)
            } else {
              // 收集权限点
              tree[i].children.forEach((e) => {
                const pointNode = createEmptyMenuItem()
                pointNode.menuId = uuid()
                pointNode.name = e.name || ''
                pointNode.path = e.path || ''
                pointNode.view = e.view || ''
                pointNode.isRouter = e.isRouter || false
                pointNode.isKeepalive = e.isKeepalive || false
                pointNode.type = menuTypeMap[e.type] || 'point'
                pointNode.externalLink = e.externalLink || false
                pointNode.linkTarget = linkTargetMap[e.externalLink] || 'tab'
                pointNode.externalLinkAddress = e.externalLinkAddress || ''
                pointNode.hide = e.hide || false
                pointNode.isHome = e.isHome || false
                pointNode.permissionKey = e.permissionKey || ''
                treeNode.pointList.push(pointNode)
                treeNode.pointsMap.set(pointNode.permissionKey, pointNode)
              })
              if (!treeNode.externalLink || (treeNode.externalLink && treeNode.linkTarget === 'tab')) {
                routeMappingList.push(treeNode)
              }
            }
          }
        }
      }
      forEachTree(menuTree)
      return {
        routeMappingList,
        menuTreeConverted: menuTreeConverted[0]?.children || [],
        menuIdMappingMap
      }
    }
  }
}
```

### 菜单适配器参考
[https://github.com/pumelotea/happyboot-tiger/blob/master/src/global/framework.js](https://github.com/pumelotea/happyboot-tiger/blob/master/src/global/framework.js)


### 菜单数据参考
[https://github.com/pumelotea/happyboot-tiger/blob/master/src/mock/routerData.js](https://github.com/pumelotea/happyboot-tiger/blob/master/src/mock/routerData.js)    
如果使用上述链接中的数据结构，那么适配器就可以使用默认实现的。

### 使用菜单适配器
在引擎创建时候作为参数传入即可
```js
const happyFramework = createHappyFramework({
  menuAdapter: createMenuAdapter()
})
```

### 修改数据加载方法
框架中默认是用`Promise`模拟的异步数据获取，实际使用是要调用接口的。那么以下代码换成常规的HTTP请求即可。


编辑路由配置文件`src/global/router/config.js`，
修改`createDefaultRouterInterceptor`调用中的option参数，其中
```js
...
interceptorType: 'before',
  framework      : happyFramework,
  async dataLoader (to, from, next) {
    const result = { rawData: null, message: '' }
    try {
      // 实际开发环境应该从服务端拉取数据
+     const data = await new Promise((resolve, reject) => {
+       setTimeout(() => {
+         resolve({
+           code   : 0,
+           data   : routerData,
+           message: 'success'
+         })
+       }, 1000)
+     })
      result.rawData = data.data
      result.message = data.message
    } catch (e) {
      result.rawData = null
      result.message = e.message
    }
    return result
  },
...
```
:::warning 注意
请求返回的数据最终会调用**菜单适配器**进行数据格式转换，并且自动完成路由的注入。
:::

### 接口请求token拦截处理
对于http请求token失效的处理定义在该文件中`src/global/http/index.js`
:::tip 提示
http请求的返回结构默认约定为：
```js
{code: xxx, data: xxx, msg:'err message'}
```
:::
```js
// 返回结果处理
// 自定义约定接口返回{code: xxx, data: xxx, msg:'err message'}
const responseHandle = {
  0: response => {
    return response.data
  },
  401: response => {
    window.$message.error('登录状态已过期，请重新登录！')
    security.signOut()
    router.push('/login')
  },
  default: response => {
    window.$message.error(response.data.message)
    return Promise.reject(response)
  }
}
```

## 用户数据对接

### 登录
用户数据对接指的是用户的登录，常规调用接口登录完成后，调用以下方法进行框架登录。
```js
happySecurity.signIn("tokensring",{id:"123",name:"xiaoming"})
```
**方法签名**
```js
declare type User = any;

signIn(token: string, user: User): void;
```
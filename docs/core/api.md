# 接口说明

## 工厂方法

## createHappyFramework
```ts
export declare function createHappyFramework(options?: HappyKitFrameworkOption): HappyKitFramework;
```
> 创建核心框架实例
- 参数
    - {HappyKitFrameworkOption} options   
      扩展选项，参考`HappyKitFrameworkOption`章节
- 返回
    - {HappyKitFramework} 框架实例
- 用法   
  直接调用后，返回的实例利用vue的插件安装方法`app.use(框架实例)`装载即可

## createHappySecurity
```ts
export declare function createHappySecurity(options?: HappyKitSecurityOption): HappyKitSecurity;
```
> 创建核心安全框架实例，可以独立于`HappyFramework`使用
- 参数
    - {HappyKitSecurityOption} options   
      扩展选项，参考`HappyKitSecurityOption`章节
- 返回
    - {HappyKitSecurity} 框架实例
- 用法   
  直接调用后，返回的实例利用vue的插件安装方法`app.use(框架实例)`装载即可

## createEmptyMenuItem

```ts
export declare function createEmptyMenuItem(): MenuItem;
```
> 创建一个空的菜单数据结构，用于自定义数据填充。

- 参数
    - 无
- 返回
    - {MenuItem} 菜单数据项实例
- 用法   
  直接调用即可


## createDefaultMenuAdapter

```ts
export declare function createDefaultMenuAdapter(): MenuAdapter<MenuItem>;
```
> 创建默认的菜单数据适配器对象

- 参数
    - 无
- 返回
    - {MenuAdapter&lt;MenuItem&gt; } 菜单数据适配器，泛型为`MenuItem`
- 用法   
  直接调用即可

## createDefaultPageIdFactory

```ts
export declare function createDefaultPageIdFactory(framework: HappyKitFramework): PageIdFactory;
```

> 创建默认的页面id生成工厂对象，默认是通过`md5(url)`实现

- 参数
    - {HappyKitFramework} framework   
      框架实例作为上下文对象

- 返回
    - {PageIdFactory} 页面id工厂实例

- 用法    
  调用后可以得到默认的页面id生成工厂

## createDefaultTrackerIdFactory

```ts
export declare function createDefaultTrackerIdFactory(framework: HappyKitFramework): TrackerIdFactory;
```

> 创建默认的追踪Id生成工厂，默认是通过uuid实现

- 参数
    - {HappyKitFramework} framework   
      框架实例作为上下文对象

- 返回
    - {TrackerIdFactory} 追踪id工厂实例

- 用法    
  调用后可以得到默认的追踪id生成工厂

## createDefaultRouterInterceptor
```ts
export declare function createDefaultRouterInterceptor(options: RouterInterceptorOption): RouterInterceptor;
```
> 创建默认的路由拦截器对象
- 参数
    - {RouterInterceptorOption} options     
      路由拦截器选项，详细参见`RouterInterceptorOption`章节

- 返回
    - {RouterInterceptor} 路由拦截器对象

- 用法     
  在路由对象创建后，在路由`router.beforeEach`或者`router.afterEach`回调中调用即可

## injectRoutes

```ts
export declare function injectRoutes(options: RouterInjectOption):void;
```
> 路由注入函数
- 参数
    - {RouterInjectOption} options     
      路由注入选项，详细参见`RouterInjectOption`章节

- 返回
    - {PageIdFactory} 页面id工厂实例

- 用法     
  在路由对象和框架创建后调用即可

## upgradeRouter

```ts
export declare function upgradeRouter(framework: HappyKitFramework, router: Router): HappyKitRouter;
```
> 路由升级函数，用于扩展`vue-router`
- 参数
    - {HappyKitFramework} framework     
      框架作为上下文
    - {Router} router    
      vue-router实例

- 返回
    - {HappyKitRouter} 升级后的路由实例

- 用法     
  在路由对象和框架创建后调用即可，在需要调用扩展方法的情况下需要做类型断言，   
  比如`(router as HappyKitRouter).push()`

## useRouteAlive
```ts
function useRouteAlive(options: HappyKitRouteCacheOption):{
    RouteAlive,
    removeComponentCache,
    getCached,
    getIncludes
}
```
> 调用该方法可以注册并且获取路由缓存组件`RouteAlive`，该组件可以内嵌到`RouterView`中替代`KeepAlive`，同时提供了API方法操作缓存。

本质上`RouteAlive`是对`KeepAlive`的二次封装。
- 参数
    - {HappyKitRouteCacheOption} options     
      选项参数
- 返回
    - {
      RouteAlive,
      removeComponentCache,
      getCached,
      getIncludes
    } RouteAlive组件和3个API方法

- 返回的方法签名
   - `removeComponentCache(pageId: string)`
   - `getCached():HappyKitRouteCache`
   - `getIncludes():string[]`

- 用法     
  路由配置的时候进行调用即可。

## 接口定义

## MenuType
```ts
/**
 * 菜单类型
 */
export declare enum MenuType {
    MENU = 0,           //菜单
    POINT = 1           //权限点
}
```
## LinkTarget
```ts
/**
 * 链接跳转类型
 */
export declare enum LinkTarget {
    SELF = 0,           //刷新掉当前页面打开
    TAB = 1,            //在内部的标签页打开
    BLANK = 2           //在新的浏览器标签页打开
}
```
## NavCloseType
```ts
/**
 * 导航项关闭类型
 */
export declare enum NavCloseType {
    SELF = 0,           //关闭点击
    LEFT = 1,           //关闭激活项的左侧所有标签
    RIGHT = 2,          //关闭激活项的右侧所有标签
    OTHER = 3,          //关闭除了激活项标签的所有标签
    ALL = 4             //关闭全部标签
}
```
## RouterInterceptorType
```ts
/**
 * 路由拦截类型
 */
export declare enum RouterInterceptorType {
    BEFORE = 0,         //前置拦截
    AFTER = 1           //后置拦截
}
```
## HTTPInterceptorType
```ts
/**
 * HTTP请求拦截类型
 */
export declare enum HTTPInterceptorType {
    BEFORE = 0,         //前置拦截
    AFTER = 1           //后置拦截
}
```

## StorageEngine
```ts
/**
 * 存储引擎类型
 */
export enum StorageEngine {
  LOCAL_STORAGE = 0,    //localStorage
  SESSION_STORAGE = 1,  //sessionStorage
}
```
## MenuItem
```ts
/**
 * 菜单数据结构
 */
export declare interface MenuItem {
    /**
     * 菜单id
     * 框架自动生成
     */
    menuId: string;
    /**
     * 菜单名称
     */
    name: string;
    /**
     * 图标
     */
    icon: string;
    /**
     * 相对路径
     * 生成路由路径拼接时使用
     */
    path: string;
    /**
     * 视图组件的相对路径
     */
    view: string;
    /**
     * 是否为路由节点
     */
    isRouter: boolean;
    /**
     * 是否需要开启缓存
     */
    isKeepalive: boolean;
    /**
     * 菜单类型
     */
    type: MenuType;
    /**
     * 是否为外部链接
     */
    externalLink: boolean;
    /**
     * 外部链接跳转类型
     */
    linkTarget: LinkTarget;
    /**
     * 外部链接地址
     */
    externalLinkAddress: string;
    /**
     * 是否为隐藏路由
     */
    hide: boolean;
    /**
     * 是否为首页
     */
    isHome: boolean;
    /**
     * 按钮权限控制key
     */
    permissionKey: string;
    /**
     * 子菜单数组
     */
    children: MenuItem[];
    
    /**
     * 预处理后的数据
     * 使用上面的数据经过预处理后的数据
     */

    /**
     * 路由路径
     */
    routerPath: string;
    /**
     * 菜单路径
     */
    menuPath: MenuItem[];
    /**
     * 面包屑路径
     */
    breadcrumb: MenuItem[];
    /**
     * 按钮权限列表
     */
    buttonList: MenuItem[];
    /**
     * 按钮权限map
     */
    buttonsMap: Map<string, MenuItem>;
    /**
     * 可扩展属性
     */
    [propName: string]: any;
}
```
## Tracker
```ts
/**
 * 追踪器数据结构
 */
export declare interface Tracker {
    /**
     * 客户端id
     */
    clientId: string;
}
```
## NavItem
```ts
/**
 * 导航项数据结构
 */
export declare interface NavItem {
    /**
     * 页面id
     * 由页面id工厂生成
     */
    pageId: string;
    /**
     * 导航项的标题
     */
    title: string;
    /**
     * 路由前往的目标
     * 可以是字符串路由路径，也可以是路由对象
     */
    to: any;
    /**
     * 所关联的菜单项
     */
    menuItem: MenuItem;
}
```
## Adapter&lt;T&gt;
```ts
/**
 * 通用适配器
 */
export declare interface Adapter<T> {
    /**
     * 转换方法
     * @param rawData 原始数据
     */
    convert(rawData: any): T[];
}
```
## MenuAdapter&lt;T&gt;
```ts
/**
 * 菜单数据适配器
 */
export declare interface MenuAdapter<T> {
    /**
     * 转换方法
     * @param rawData 原始数据
     */
    convert(rawData: any): {
        /**
         * 路由数组
         */
        routeMappingList: T[]; 
        /**
         * 经过适配器转换后的数组
         */
        menuTreeConverted: T[];
        /**
         * 菜单id和菜单项的map
         */
        menuIdMappingMap: Map<string, T>;
    };
}
```
## HappyKitNavEvent
```ts
/**
 * 导航项相关事件
 */
export declare interface HappyKitNavEvent {
    /**
     * 回调方法类型
     * @param removedNavs 移除的导航项
     * @param needNavs    需要前往的导航项
     */
    (removedNavs: NavItem[], needNavs: NavItem[]): void;
}
```
## HappyKitMenuEvent
```ts
/**
 * 菜单项相关事件
 */
export declare interface HappyKitMenuEvent {
    /**
     * 回调方法类型
     * @param menuItems   返回的菜单项
     */
    (menuItems: MenuItem[]): void;
}
```
## CurrentMenuRoute
```ts
/**
 * 当前菜单路由
 * 响应式结构
 */
export declare type CurrentMenuRoute = Ref<NavItem | null>
```
## PageIdFactory
```ts
/**
 * 页面id工厂结构
 */
export declare interface PageIdFactory {
    /**
     * 框架上下文
     */
    framework: HappyKitFramework;
    /**
     * id生成方法
     * @param uniqueString 唯一字符串
     */
    generate(uniqueString: string): string;
    /**
     * 获取将要前往的id
     * @param uniqueString to 前往的目的
     */
    getNextPageId(to: any): string;
}
```

## TrackerIdFactory
```ts
/**
 * 追踪id工厂结构
 */
export declare interface TrackerIdFactory {
  /**
   * 框架上下文
   */
  framework: HappyKitFramework
  /**
   * id获取方法
   * 如果需要从服务端获取的话，请使用同步请求async/await
   */
  getId(): string
}
```

## HappyKitFrameworkOption
```ts
/**
 * 核心框架选项数据结构
 */
export declare interface HappyKitFrameworkOption {
    /**
     * vue3的实例
     */
    app?: App;
    /**
     * 可选的菜单数据适配器实例
     */
    menuAdapter?: MenuAdapter<MenuItem>;
    /**
     * 可选的菜单id工厂实例
     */
    pageIdFactory?: PageIdFactory;

  /**
   * 可选的追踪id工厂实例
   */
    trackerIdFactory?: TrackerIdFactory
    /**
     * 可扩展属性
     */
    [propName: string]: any;
}
```
## HappyKitFramework
```ts
/**
 * 框架
 */
export declare interface HappyKitFramework {
  /**
   * 初始化属性
   */
  options: HappyKitFrameworkOption
  /**
   * 菜单树
   */
  menuTree: Ref<MenuItem[]>
  /**
   * 导航列表
   */
  navigatorList: Ref<NavItem[]>
  /**
   * 路由列表
   */
  routeMappingList: Ref<MenuItem[]>
  /**
   * 菜单id映射表
   * 提高查找速度
   */
  menuIdMappingMap: Ref<Map<string, MenuItem>>
  /**
   * 当前路由
   */
  currentMenuRoute: CurrentMenuRoute
  /**
   * 路由初始化完成标记
   */
  routerInitiated: boolean
  /**
   * 客户端追踪器
   */
  tracker: Tracker

  /**
   * 初始化器
   * @param options
   */
  init(options?: HappyKitFrameworkOption): void

  /**
   * 设置菜单树
   * @param rawData 原始数据
   * @param dataAdapter 数据适配器，提供默认的数据适配器
   */
  setMenuTree(rawData: any, dataAdapter?: MenuAdapter<MenuItem>): void

  /**
   * 设置当前的菜单路由
   * @param currentMenuRoute
   */
  setCurrentMenuRoute(currentMenuRoute: NavItem | null): void

  /**
   * 获取菜单树
   */
  getMenuTree(): Ref<MenuItem[]>

  /**
   * 获取路由列表
   */
  getRouteMappingList(): Ref<MenuItem[]>

  /**
   * 获取当前菜单路由
   */
  getCurrentMenuRoute(): CurrentMenuRoute

  /**
   * 获取面包屑
   * @param pageId 如果不传，默认获取当前激活的
   */
  getBreadcrumb(pageId?: string): MenuItem[]

  /**
   * 获取追踪器实例
   */
  getTracker(): Tracker

  /**
   * 初始化追踪器
   */
  initTracker(): void

  /**
   * 刷新客户端id
   */
  refreshClientId(): string

  /**
   * 获取导航列表
   */
  getNavList(): Ref<NavItem[]>

  getNav(pageId: string): NavItem | null

  /**
   * 是否存在该导航项
   * @param pageId
   */
  isExistNav(pageId: string): boolean

  /**
   * 打开新的导航项
   *
   * #case1:
   * 同一个路由，只能打开一个页面
   * #case2:
   * 同一个路由，打开多个页面，不同参数
   *
   * @param to 前往目标
   * @param menuItem
   * @param title 可选的标题
   */
  openNav(to: any, menuItem: MenuItem, title?: string): NavItem | null

  /**
   * 关闭导航项
   * @param type
   * @param pageId
   * @param event
   */
  closeNav(
    type: NavCloseType,
    pageId?: string,
    event?: HappyKitNavEvent,
  ): void

  /**
   * 点击导航项
   * @param pageId
   * @param event
   */
  clickNavItem(pageId: string, event?: HappyKitNavEvent): void

  /**
   * 点击菜单项
   * @param menuId
   * @param event
   */
  clickMenuItem(menuId: string, event?: HappyKitMenuEvent): void

  /**
   * vue插件方法
   * @param app
   */
  install(app: App): void

}
```
## RouterInjectOption
```ts
/**
 * 路由注入选项
 */
export declare interface RouterInjectOption {
    /**
     * 父级路由
     * 子路由全部注入在该路由下
     */
    parentRoute: RouteRecordRaw;
    /**
     * 待注入的路由实例
     */
    router?: Router;
    /**
     * 待注入的路由数组
     */
    routes: MenuItem[];
    /**
     * 视图组件加载器
     * @param view 视图组件路径
     */
    viewLoader(view: string): any;
}
```
## RouterInterceptorOption
```ts
/**
 * 路由拦截器选项
 */
export declare interface RouterInterceptorOption {
    /**
     * 框架实例
     * 作为上下文
     */
    framework: HappyKitFramework;
    /**
     * 路由拦截类型
     */
    interceptorType: RouterInterceptorType;
    /**
     * 数据加载器
     */
    dataLoader?(): any;
    /**
     * 数据加载失败回调
     */
    dataLoadFailureHandler?(): void;
    /**
     * 路由注入参数
     * 用于拦截时需要注入的情况
     */
    routerInjectOption?: RouterInjectOption;
}
```
## RouterInterceptor

```ts
/**
 * 路由拦截器
 */
export declare interface RouterInterceptor {
    /**
     * 路由拦截参数
     */
    options: RouterInterceptorOption;
    /**
     * 拦截方法
     * @param to
     * @param from
     * @param next
     */
    filter(to: RouteLocationNormalized, from: RouteLocationNormalized, next?: NavigationGuardNext): void;
}
```
## HappyKitRouter
```ts
/**
 * vue-router路由子类
 * HappyKitRouter继承Router
 */
export declare interface HappyKitRouter extends Router {
    framework: HappyKitFramework;

  /**
   * 重载Router中的push
   * @param to 
   * @param title 导航项中自定义的标题
   */
    push(to: RouteLocationRaw, title?: string): Promise<NavigationFailure | void | undefined>;
}
```

## User
```ts
/**
 * 用户对象
 */
export declare type User = any
```

## HappyKitSecurityOption
```ts
/**
 * 安全框架选项
 */
export declare interface HappyKitSecurityOption {
  /**
   * 存储引擎
   */
  storageEngine?: StorageEngine
}
```

## HappyKitRouteCacheOption
```ts
/**
 * 路由缓存选项
 */
export declare interface HappyKitRouteCacheOption {
    framework: HappyKitFramework
    router: Router
    placeHolderComponent?: Component | DefineComponent | null
}
```

## HappyKitRouteCache
```ts
/**
 * 路由缓存容器
 */
export declare interface HappyKitRouteCache {
  [prop: string]: HappyKitRouteCacheItem
}
```


## HappyKitRouteCacheItem
```ts
/**
 * 路由缓存item
 */
export declare interface HappyKitRouteCacheItem {
  pageId: string
  isKeepalive: boolean
  component?: Component | DefineComponent | null
}
```

## HappyKitSecurity
```ts
/**
 * 框架安全接口
 */
export declare interface HappyKitSecurity {
  /**
   * 配置参数
   */
  options: HappyKitSecurityOption
  /**
   * 用户对象
   */
  user: Ref<User | null>
  /**
   * token
   */
  token: string

  /**
   * 初始化方法
   * @param options
   */
  init(options?: HappyKitSecurityOption): void

  /**
   * 获取存储器
   */
  getStorage(): Storage

  /**
   * 刷新用户数据
   * @param user
   */
  refreshUser(user: User): void

  /**
   * 刷新用户token
   * @param token
   */
  refreshToken(token: string): void

  /**
   * 获取用户对象
   */
  getUser(): Ref<User | null>

  /**
   * 获取用户token
   */
  getToken(): string

  /**
   * 登录
   * @param token
   * @param user
   */
  signIn(token: string, user: User): void

  /**
   * 登出
   */
  signOut(): void

  /**
   * 冷数据加载
   */
  loadFromStorage(): void
  /**
   * 热数据写入
   */
  saveIntoStorage(): void

  /**
   * 清除存储
   */
  flushStorage(): void
  /**
   * vue插件
   * @param app
   */
  install(app: App): void
}
```
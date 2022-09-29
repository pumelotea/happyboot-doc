# 核心引擎
happykit不依赖任何第三方的UI库，开发者可以使用自己喜欢的UI库进行开发。happykit主要关注数据状态的维护，以及核心逻辑的实现；
通过数据适配器的思想进行数据的交互，通过提供类似工厂的方法进行实例创建。

## playground
[https://playground.happykit.org](https://playground.happykit.org)

## HappyKitFramework
### 创建实例

调用`createHappyFramework`进行创建实例，默认可以不传任何参数。在创建时可以自定义传入对象

```
{
    app: App, // vue实例
    menuAdapter: MenuAdapter<MenuItem>, // 菜单数据适配器
    pageIdFactory: PageIdFactory, // 页面id工厂
    trackerIdFactory: TrackerIdFactory, // 追踪器id工厂
    permissionDirectiveName: string, // 权限点指令名称
    autoRegisterDirective: boolean // 是否自动注册权限点指令
}
```

::: tip 提示
每个参数都是可以选的，只要传需要自定义的参数。
:::

### vue安装方法

简单通过`app.use`方法安装即可。框架会把自己挂载到vue全局变量中：
`app.config.globalProperties.$happykit`。

### 权限指令v-point

`v-point`权限指令是用于控制dom节点的显示隐藏。

#### 指令注册

该指令在`app.use`挂载的时候默认同步进行自动注册。如果需要取消自动注册指令， 或者需要对指令更名，也是很简单的。在框架初始化的时候，可以通过参数设定。

```
{
    permissionDirectiveName: 'point', // 权限点指令名称
    autoRegisterDirective: true // 是否自动注册权限点指令
}
```

#### 指令用法

只需要在dom节点上使用即可，例如：

```html
<button v-point="'submit'">保存</button>
```

`v-point`会根据当前路由所对应的菜单节点进行查找，如果找不到就删除dom节点。
::: warning 注意
`v-point`不是响应式的，只会在组件`mounted`中执行一次。
:::

### 客户端追踪器

框架初始化的时候会**强制**自动初始化追踪器，设计追踪器的目的是为了更好的标识客户端的唯一性。 目前追踪器只维护了一个客户端id，
该id由框架默认的`trackerIdFactory`生成，该id会持久化到`localStroage`
中，以key为`clientId`存储。

#### 用处

调用`getTracker`得到追踪器实例，然后您可以把该id携带在`http`请求上， 还可以用在`websocket`上作为客户端连接的唯一id。

### 刷新客户端Id

有时候可能需要强制刷新本地的追踪器id，可以调用`refreshClientId`，它会完成刷新并且持久化。

### 获取菜单树数据

调用`getMenuTree`返回响应式数组`ref([])`，它的类型签名为`Ref<MenuItem[]>`。 得到该变量后，您可以直接利用递归组件进行渲染树。

### 刷新菜单树数据

调用`setMenuTree(rawData: any, dataAdapter?: MenuAdapter<MenuItem>)`可以主动初始化菜单树， 并且同步会刷新框架内部维护的路由列表`routeMappingList`
和菜单id映射表`menuIdMappingMap`， 但是这不会刷新`vue-router`中的路由表。

### 获取导航列表数据

调用`getNavList`返回响应式数组`ref([])`，它的类型签名为`Ref<NavItem[]>`。 得到该变量后，您可以直接利用`v-for`进行渲染。

### 获取动态路由列表

调用`getRouteMappingList`返回响应式数组`ref([])`，它的类型签名为`Ref<NavItem[]>`。该数组是一个展平的以为数组。 您可以使用`injectRoutes`进行路由注入。

### 获取当前激活的导航项

调用`getCurrentMenuRoute`返回响应式对象`Ref<NavItem | null>`。

### 获取面包屑

调用`getBreadcrumb`默认返回当前路由的面包屑，如果需要指定`pageId`的面包屑，需要主动传入该参数。
::: warning 注意
`getBreadcrumb`返回的数组不是响应式的。
:::

### 获取单个导航项

调用`getNav`，传入`pageId`可以获取单个导航项。
::: warning 注意
`getNav`返回的对象不是响应式的。
:::

### 检查某个导航项是否存在

调用`isExistNav`，传入`pageId`可以获取`boolen`值。
::: warning 注意
`isExistNav`返回的值不是响应式的。
:::

### 打开导航项

调用`openNav(to: any, menuItem: MenuItem, title?: string)`,`to`参数可以是拼接好的路由地址，也可以是以对象形式传入，该参数等同于`router.push`方法中的`to`参数；
`menuItem`是目标路由所对应的菜单项；`title`是可选的，默认会使用`menuItem.name`属性，如果自定义传入则使用自定义传入的值，该值会影响导航项中的`title`属性。

### 关闭导航项

调用`closeNav(type: NavCloseType, pageId?: string, event?: HappyKitNavEvent)`，可以通过不同方式关闭导航项。    
通过`NavCloseType`枚举进行确定关闭的方式，当传入`NavCloseType.ALL`的时候，可以不传入`pageId`。

- SELF 关闭指定的导航项
- LEFT 关闭当前导航项左侧的所有导航项（不包含当前）
- RIGHT 关闭当前导航项右侧侧的所有导航项（不包含当前）
- OTHER 关闭当前导航项除外的所有导航项
- ALL 关闭全部导航项

一般在关闭导航项后需要做路由的跳转，因此框架提供一个回调事件来处理。该事件会返回需要跳转的导航项列表，和已经关闭的导航项列表。

### 切换导航项
调用`setCurrentMenuRoute(currentMenuRoute: NavItem | null)`，传入导航项即可。
该调用不会触发路由的切换，需要手动调用`router.push`进行同步。

### 菜单项点击事件代理方法
调用`clickMenuItem(menuId: string, event?: HappyKitMenuEvent)`，可以减少对框架数据状态的关注。
在`event`中实现自定义逻辑。事件详见[HappyKitMenuEvent](/core/api.html#happykitmenuevent)。

### 导航项点击事件代理方法
调用`clickNavItem(pageId: string, event?: HappyKitNavEvent)`，可以减少对框架数据状态的关注。
在`event`中实现自定义逻辑。事件详见[HappyKitNavEvent](/core/api.html#happykitnavevent)。

## HappyKitRouter
`HappyKitRouter`集成了vue的`Router`，目前扩展了`push`的重载方法和集成了框架实例。
### 创建实例
`HappyKitRouter`没有主动实例化方法，需要使用`upgradeRouter`,把`Router`升级为`HappyKitRouter`，保留了全部原始特性。
这个路由升级不是必须的。

### 页面跳转
升级路由后，现在支持2种路由跳转方法。
```ts
push(to: RouteLocationRaw): Promise<NavigationFailure | void | undefined>
// 扩展的可选的title参数是作为导航项的标题
push(to: RouteLocationRaw, title?: string): Promise<NavigationFailure | void | undefined>
```
重载方法的调用需要做类型断言：
```ts
// 像这样
(router as HappyKitRouter).push('/path');
(router as HappyKitRouter).push({path:'/path'});
(router as HappyKitRouter).push({path:'/path',query:{},params:{}},'title');
```

## RouteAlive
调用该方法可以注册并且获取路由缓存组件`RouteAlive`，该组件可以内嵌到`RouterView`中替代`KeepAlive`，同时提供了API方法操作缓存。
```js
function useRouteAlive(options: HappyKitRouteCacheOption):{
    RouteAlive,
    removeComponentCache,
    getCached,
    getIncludes
}
```
本质上`RouteAlive`是对`KeepAlive`的二次封装。

## HappyKitSecurity
安全框架，独立于核心框架，可以单独使用。

### 实例化
调用`createHappySecurity`进行创建实例，默认可以不传任何参数。在创建时可以自定义传入对象
```
{
  /**
   * 存储引擎
   */
  storageEngine: StorageEngine
}
```
默认使用`localStorage`。

::: tip 提示
每个参数都是可以选的，只要传需要自定义的参数。
:::

### vue安装方法
简单通过`app.use`方法安装即可。框架会把自己挂载到vue全局变量中：
`app.config.globalProperties.$security`。

### 登录
调用`signIn(token: string, user: User): void`，把数据写入框架中。

### 注销
调用`signOut(): void`，把数据从框架中清除。

### Token刷新
调用`refreshToken(token: string): void`，把token刷新进框架，并且根据引擎类型持久化。

### Token获取
调用`getToken(): string`，返回token。
::: warning 警告
token不是响应式数据。
:::

### 用户信息刷新
调用`refreshUser(user: User): void`，把用户信息对象刷新进框架，并且根据引擎类型持久化。

### 用户信息获取
调用`getUser(): Ref<User | null>`，返回响应式用户信息对象。可以用来直接渲染。

### 数据加载
调用`loadFromStorage(): void`，从存储中读取全部数据到内存中。

### 数据持久化
调用`saveIntoStorage(): void`，把内存中的数据全部持久化到存储中。

### 数据清除
调用`flushStorage(): void`，清空存储中框架的全部数据。

## 高阶用法
高阶用法可以更加灵活的更改一些配置和策略。

### 自定义菜单适配器
由于服务端返回的菜单数据结构和框架中的数据结构不一样，因此我们需要自定义适配器。    
实现`MenuAdapter<MenuItem>`这个接口即可。然后在框架实例化的时候作为参数传入，覆盖掉默认的参数数据适配器即可。

### 自定义追踪器id
实现`TrackerIdFactory`这个接口即可。然后在框架实例化的时候作为参数传入，覆盖掉默认的参数数据适配器即可。

### 自定义页面id
实现`PageIdFactory`这个接口即可。然后在框架实例化的时候作为参数传入，覆盖掉默认的参数数据适配器即可。

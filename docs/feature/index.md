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
# 特性
> 本章节会介绍现在框架已经支持的特性

## 基础
### 动态装载菜单路由
支持通过接口获取菜单数据后，初始化框架的菜单数据，以及菜单对应的路由数据。
### RouteAlive
提供了一个`RouteAlive`组件，用于内嵌在`RouterView`组件中，替代`keepalive`。
支持条件性的控制路由的缓存，并且支持通过方法删除缓存。  
:::warning 提醒
直接使用vue提供的`keepalive`组件是无法做到一些复杂场景的。

**下面罗列使用keepalive出现问题的情况：**
- 相同路由，不同参数，那么会共用缓存。
- 相同路由，不同参数，组件上加key，缓存独立，但是无法独立清楚缓存。
:::

### 按钮级别权限控制
提供了`v-point`指令控制按钮级别权限，并且可以联动动态装载的菜单路由数据。一般按钮的权限会和菜单进行挂钩。

### 多环境预设
应用系统的开发测试和部署往往环境会不同，因此我们预设好了最简单的多环境构建配置。比如最常见的就是接口地址是需要根据环境进行切换的。

### 用户状态统一管理
支持统一管理用户状态，用户状态是指用户的登录状态、token信息、用户信息。

## 组件库
![lib](/images/lib.png)
- 富文本编辑器
- markdown编辑器
- 头像裁剪组件
- 图片组件
- 多图预览组件
- 自动滚动列表
- 锁屏组件
- 图标选择器
- 图片工厂方法
- 打印组件
- 剪贴板复制
- 二维码生成
- 压缩包生成
- 缩放卡片
- 基础EChart组件
- 视频播放器集成
- 音频播放器组件
- 滚动区域组件
- 虚拟列表
- 天气UI组件

> 前往演示地址查看
[https://tiger.happykit.org/#/components](https://tiger.happykit.org/#/components)

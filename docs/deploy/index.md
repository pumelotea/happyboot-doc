# 编译发布
> happyboot支持多环境的编辑打包


## 本地预览
有时候需要在本地运行正式编译后的产物，那么可以借助于vite的预览能力实现。

```shell
pnpm build-test #取决于package.json中scripts字段中的配置
pnpm preview
```


## 测试环境发布
```shell
pnpm build-test
```

## 生产环境发布
```shell
pnpm build-prod
```

## 自定义环境发布
有时候一套代码可能需要编译部署到不止一个生产环境中，不同的环境，配置参数又不同，这时候就需要增加自定义构建环境了。

:::tip 提示
请参考[多环境](/muti-env/)这一节
:::

自定义环境配置完成后，构建方式和上述测试环境和生产环境的发布一致。

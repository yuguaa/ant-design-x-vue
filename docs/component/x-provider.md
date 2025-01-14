# XProvider 全局化配置

为组件提供统一的全局化配置。

## 使用说明

`XProvider` 继承了 `antdv` 的 `ConfigProvider`，且为 `ant-design-x-vue` 中的组件提供全局化配置。

如果您已经使用 `antdv` 的 `ConfigProvider`，请对您的代码做如下变更：

```diff
- import { ConfigProvider } from 'ant-design-vue';
+ import { XProvider } from 'ant-design-x-vue';

  const App = () => (
-   <ConfigProvider>
+   <XProvider>
      <YourApp />
-   </ConfigProvider>
+   </XProvider>
  );
```

## 代码演示

### 使用

:::demo 如何使用

x-provider/use

:::


# ThoughtChain 思维链

思维链组件用于可视化和追踪 Agent 对 Actions 和 Tools 的调用链。

## 何时使用

* 调试和跟踪复杂 Agent System 中的调用链
* 类似的链式场景中使用

## 代码演示

### 基本

:::demo 基础用法。

thought-chain/basic

:::

### 尺寸

:::demo ThoughtChain 有大、中、小三种尺寸。默认尺寸为中 - `middle`。

thought-chain/size

:::

### 节点状态

:::demo 思维链节点支持配置 `status` 属性来明显的表明当前节点的执行状态

thought-chain/status

:::

### 可折叠的

:::demo 配置 `collapsible` 可开启对思维链节点内容区域的折叠功能

thought-chain/collapsible

:::

### 客制化

:::demo `items` 属性支持灵活的客制化配置，详情参考 `ThoughtChainItem` 定义

thought-chain/customization

:::

### 嵌套使用

:::demo ThoughtChain 组件支持嵌套使用

thought-chain/nested

:::

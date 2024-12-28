<script setup>
import BubbleBasic from '../src/bubble/demo/basic.vue'
import BubbleAvatarAndPlacement from '../src/bubble/demo/avatar-and-placement.vue'
import BubbleHeaderAndFooter from '../src/bubble/demo/header-and-footer.vue'
import BubbleLoading from '../src/bubble/demo/loading.vue'
import BubbleTyping from '../src/bubble/demo/typing.vue'
import BubbleMarkdown from '../src/bubble/demo/markdown.vue'
import BubbleVariant from '../src/bubble/demo/variant.vue'
import BubbleShape from '../src/bubble/demo/shape.vue'
</script>

# Bubble 对话气泡

用于聊天的气泡组件。

## 何时使用

常用于聊天的时候。

## 代码演示

### 基本

基础用法。

<BubbleBasic />

### 支持位置和头像

通过 `avatar` 设置自定义头像，通过 `placement` 设置位置，提供了 `start`、`end` 两个选项。

<BubbleAvatarAndPlacement />

### 头和尾

通过 `header` 和 `footer` 属性设置气泡的头部和底部。

<BubbleHeaderAndFooter />

### 加载中

通过 `loading` 属性控制加载状态。

<BubbleLoading />

### 打字效果

通过设置 `typing` 属性，开启打字效果。更新 `content` 如果是之前的子集，则会继续输出，否则会重新输出。

<BubbleTyping />

### 自定义渲染

配合 `markdown-it` 实现自定义渲染内容。

<BubbleMarkdown />

### 变体

通过 `variant` 属性设置气泡的样式变体。

<BubbleVariant />

### 形状

通过 `shape` 属性设置气泡的形状。

<BubbleShape />

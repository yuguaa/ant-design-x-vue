<script setup>
import BubbleBasic from '../src/bubble/demo/basic.vue'
import BubbleAvatarAndPlacement from '../src/bubble/demo/avatar-and-placement.vue'
import BubbleHeaderAndFooter from '../src/bubble/demo/header-and-footer.vue'
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

<script setup lang="ts">
import { theme } from 'ant-design-vue';
import { Conversations, type ConversationsProps } from 'ant-design-x-vue';
import { computed } from 'vue';

defineOptions({ name: 'AXConversationsGroupSetup' });

const items: ConversationsProps['items'] = Array.from({ length: 4 }).map((_, index) => ({
  key: `item${index + 1}`,
  label: `Conversation Item ${index + 1}`,
  disabled: index === 3,
  group: index === 3 ? 'Group2' : 'Group1',
}));

const { token } = theme.useToken();

// Customize the style of the container
const style = computed(() => ({
  width: '256px',
  background: token.value.colorBgContainer,
  borderRadius: token.value.borderRadius,
}));
</script>
<template>
  <Conversations
    :items="items"
    default-active-key="item1"
    :style="style"
    groupable
  />
</template>

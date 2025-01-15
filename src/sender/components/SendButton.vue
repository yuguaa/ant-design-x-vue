<script setup lang="tsx">
import type { ButtonProps } from 'ant-design-vue';
import ActionButton from './ActionButton/index.vue';
import { ArrowUpOutlined } from '@ant-design/icons-vue';

defineOptions({ name: 'AXSenderLoadingButton' });

const props = defineProps<ButtonProps>();

defineRender(() => {
  return <ActionButton
    type="primary"
    shape="circle"
    {...props}
    action="onSend"
  >
    <ArrowUpOutlined />
  </ActionButton>;
})
</script>

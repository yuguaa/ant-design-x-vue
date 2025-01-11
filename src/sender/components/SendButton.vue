<script setup lang="tsx" generic="T = any">
import type { ButtonProps } from 'ant-design-vue';
import ActionButton from './ActionButton/index.vue';
import { ArrowUpOutlined } from '@ant-design/icons-vue';

defineOptions({ name: 'AXSenderLoadingButton' });

const props = defineProps<ButtonProps>();

defineRender(() => {
  return <ActionButton
    icon={<ArrowUpOutlined />}
    type="primary"
    shape="circle"
    {...props}
    action="onSend"
  />;
})
</script>

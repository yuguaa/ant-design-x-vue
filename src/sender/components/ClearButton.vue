<script setup lang="tsx" generic="T = any">
import type { ButtonProps } from 'ant-design-vue';
import { ClearOutlined } from '@ant-design/icons-vue';
import ActionButton from './ActionButton/index.vue';

defineOptions({ name: 'AXSenderClearButton' });

const props = defineProps<ButtonProps>();

defineRender(() => {
  return <ActionButton {...props} action="onClear">
    <ClearOutlined />
  </ActionButton>;
})
</script>

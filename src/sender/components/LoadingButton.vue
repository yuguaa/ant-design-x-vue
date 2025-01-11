<script setup lang="tsx" generic="T = any">
import type { ButtonProps } from 'ant-design-vue';
import classNames from 'classnames';
import ActionButton from './ActionButton/index.vue';
import StopLoadingIcon from '../StopLoading.vue'
import { useActionButtonContextInject } from './ActionButton/context';

defineOptions({ name: 'AXSenderLoadingButton' });

const props = defineProps<ButtonProps>();
const context = useActionButtonContextInject()

defineRender(() => {
  return <ActionButton
    icon={null}
    type='primary'
    // color="primary"
    // variant="text"
    shape="circle"
    {...props}
    class={classNames(`${context.value.prefixCls}-loading-button`)}
    action="onCancel"
  >
    <StopLoadingIcon className={`${context.value.prefixCls}-loading-icon`} />
  </ActionButton>;
})
</script>

<script setup lang="tsx" generic="T = any">
import { Button } from 'ant-design-vue';
import { useActionButtonContextInject } from './context'
import classNames from 'classnames';
import type { ActionButtonProps } from '../../interface';
import { computed } from 'vue';

defineOptions({ name: 'AXSenderActionButton' });

const {
  action,
  onClick: outClick,
  ...restProps
} = defineProps<ActionButtonProps>();

const slots = defineSlots<{
  default(): any
}>();

const context = useActionButtonContextInject()

const mergedDisabled = computed(() => {
  const rootDisabled = context.value.disabled
  return rootDisabled ?? restProps.disabled ?? context.value?.[`${action}Disabled`];
})
const prefixCls = computed(() => {
  return context.value.prefixCls
})

const onClick = computed(() => {
  return context.value?.[action]
});

defineRender(() => {
  return (
    <Button
      type="text"
      {...restProps}
      onClick={(e) => {
        if (!mergedDisabled.value) {
          if (onClick.value) {
            onClick.value();
          }
          if (outClick && !Array.isArray(outClick)) {
            outClick(e);
          }
        }
      }}
      class={classNames(prefixCls.value, {
        [`${prefixCls.value}-disabled`]: mergedDisabled.value,
      })}
    >
      {{ icon: () => slots.default() }}
    </Button>
  );
})
</script>

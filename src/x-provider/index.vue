<script setup lang="tsx">
import { computed } from 'vue';
import XProviderContextProvider from './context';
import type { XProviderProps } from './context';
import useXProviderContext from './hooks/use-x-provider-context';
import { ConfigProvider as AntdConfigProvider } from 'ant-design-vue';
import type { ConfigProviderProps as AntdConfigProviderProps } from 'ant-design-vue/es/config-provider';

defineOptions({ name: 'AXConfigProvider', inheritAttrs: false });

const {
  // attachments,
  bubble,
  // conversations,
  // prompts,
  // sender,
  // suggestion,
  // thoughtChain,
  // welcome,
  theme,
  ...antdConfProps
} = defineProps<XProviderProps & AntdConfigProviderProps>();

const slots = defineSlots<{
  default(props?: any): any
}>();

const xProviderProps = computed(() => ({
  // attachments,
  bubble,
  // conversations,
  // prompts,
  // sender,
  // suggestion,
  // thoughtChain,
  // welcome,
}));

const { theme: parentTheme } = useXProviderContext();

const mergedTheme = computed(() => ({
  ...parentTheme,
  ...theme,
}));

const childNode = slots.default?.();

defineRender(() => {
  return (
    <XProviderContextProvider value={xProviderProps.value}>
      <AntdConfigProvider
        {...antdConfProps}
        // Note:  we can not set `cssVar` by default.
        //        Since when developer not wrap with XProvider,
        //        the generate css is still using css var but no css var injected.
        // Origin comment: antdx enable cssVar by default, and antd v6 will enable cssVar by default
        // theme={{ cssVar: true, ...antdConfProps?.theme }}
        theme={mergedTheme.value}
      >
        {childNode}
      </AntdConfigProvider>
    </XProviderContextProvider>
  )
});
</script>

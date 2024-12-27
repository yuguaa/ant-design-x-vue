import { objectType, type AnyObject } from '../_util/type';
// import { AttachmentsProps } from '../attachments';
import type { BubbleProps } from '../bubble';
import { computed, ComputedRef, CSSProperties, defineComponent, inject, InjectionKey, provide, shallowRef, triggerRef, unref, watch } from 'vue';
// import type { ConversationsProps } from '../conversations';
// import type { PromptsProps } from '../prompts';
// import type { SenderProps } from '../sender';
// import type { SuggestionProps } from '../suggestion';
// import type { ThoughtChainProps } from '../thought-chain';
// import type { WelcomeProps } from '../welcome';

export interface XComponentStyleConfig {
  classNames: Record<string, string>;
  styles: Record<string, CSSProperties>;
  className: string;
  style: CSSProperties;
}

type DefaultPickType = keyof XComponentStyleConfig;

type ComponentStyleConfig<
  CompProps extends AnyObject,
  PickType extends keyof CompProps = DefaultPickType,
> = Pick<CompProps, PickType | DefaultPickType>;

export interface XComponentsConfig {
  bubble?: ComponentStyleConfig<BubbleProps>;
  // conversations?: ComponentStyleConfig<ConversationsProps>;
  // prompts?: ComponentStyleConfig<PromptsProps>;
  // sender?: ComponentStyleConfig<SenderProps>;
  // suggestion?: ComponentStyleConfig<SuggestionProps>;
  // thoughtChain?: ComponentStyleConfig<ThoughtChainProps>;
  // attachments?: ComponentStyleConfig<AttachmentsProps>;
  // welcome?: ComponentStyleConfig<WelcomeProps>;
}

export interface XProviderProps extends XComponentsConfig {
  // Non-component config props
}

const XProviderContextKey: InjectionKey<ComputedRef<XProviderProps>> =
  Symbol('XProviderContext');

export const globalXProviderApi = shallowRef<XProviderProps>();

export const useXProviderContextProvider = (value: ComputedRef<XProviderProps>) => {
  provide(XProviderContextKey, value);
  watch(
    value,
    () => {
      globalXProviderApi.value = unref(value);
      triggerRef(globalXProviderApi);
    },
    { immediate: true, deep: true },
  );
};

export const useXProviderContextInject = () => {
  return inject(
    XProviderContextKey,
    computed(() => globalXProviderApi.value || {}),
  );
};
export const XProviderContextProvider = defineComponent({
  props: {
    value: objectType<XProviderProps>(),
  },
  setup(props, { slots }) {
    useXProviderContextProvider(computed(() => props.value));
    return () => {
      return slots.default?.();
    };
  },
});

export default XProviderContextProvider;

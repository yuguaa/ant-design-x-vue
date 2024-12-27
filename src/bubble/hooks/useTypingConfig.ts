import { computed, ref } from 'vue';
import type { BubbleProps, TypingOption } from '../interface';

function useTypingConfig(typing: BubbleProps['typing']) {
  const typingEnabled = ref(true);
  const baseConfig: Required<TypingOption> = {
    step: 1,
    interval: 50,
    // set default suffix is empty
    suffix: null,
  };
  const config = computed(() => ({
    ...baseConfig,
    ...(typeof typing === 'object' ? typing : {})
  }));

  return [
    typingEnabled,
    computed(() => config.value.step),
    computed(() => config.value.interval),
    computed(() => config.value.suffix)
  ] as const;
}

export default useTypingConfig;

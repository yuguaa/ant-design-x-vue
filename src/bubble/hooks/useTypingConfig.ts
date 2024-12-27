import { computed,  } from 'vue';
import type { Ref, VNode } from 'vue'
import type { BubbleProps, TypingOption } from '../interface';

function useTypingConfig(typing: BubbleProps['typing']): Ref<[boolean, number, number, VNode]> {
  return computed(() => {
    if (!typing) {
      return [false, 0, 0, null];
    }

    let baseConfig: Required<TypingOption> = {
      step: 1,
      interval: 50,
      // set default suffix is empty
      suffix: null,
    };

    if (typeof typing === 'object') {
      baseConfig = { ...baseConfig, ...typing };
    }

    return [true, baseConfig.step, baseConfig.interval, baseConfig.suffix];
  });
}

export default useTypingConfig;

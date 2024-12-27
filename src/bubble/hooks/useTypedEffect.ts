import useState from '../../_util/hooks/use-state';
import { onWatcherCleanup, unref, watch } from 'vue';
import type { VNode } from 'vue'

function isString(str: any): str is string {
  return typeof str === 'string';
}

/**
 * Return typed content and typing status when typing is enabled.
 * Or return content directly.
 */
const useTypedEffect = (
  content: VNode | object | string,
  typingEnabled: boolean,
  typingStep: number,
  typingInterval: number,
): [typedContent: VNode | object | string, isTyping: boolean] => {
  const [prevContent, setPrevContent] = useState<VNode | object | string>('');
  const [typingIndex, setTypingIndex] = useState<number>(1);

  const mergedTypingEnabled = typingEnabled && isString(content);

  // Reset typing index when content changed
  watch(() => content, () => {
    const prevContentValue = unref(prevContent);
    setPrevContent(content);
    if (!mergedTypingEnabled && isString(content)) {
      setTypingIndex(content.length);
    } else if (isString(content) && isString(prevContentValue) && content.indexOf(prevContentValue) !== 0) {
      setTypingIndex(1);
    }
  });

  // Start typing
  watch([typingIndex, () => typingEnabled, () => content], () => {
    if (mergedTypingEnabled && unref(typingIndex) < content.length) {
      const id = setTimeout(() => {
        setTypingIndex(unref(typingIndex) + typingStep);
      }, typingInterval);

      onWatcherCleanup(() => {
        clearTimeout(id);
      });
    }
  });

  const mergedTypingContent = mergedTypingEnabled ? content.slice(0, unref(typingIndex)) : content;

  return [mergedTypingContent, mergedTypingEnabled && unref(typingIndex) < content.length];
};

export default useTypedEffect;

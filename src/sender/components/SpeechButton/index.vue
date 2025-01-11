<script setup lang="tsx" generic="T = any">
import { AudioMutedOutlined, AudioOutlined } from '@ant-design/icons-vue';
import type { ButtonProps } from 'ant-design-vue';
import ActionButton from '../ActionButton/index.vue';
import { useActionButtonContextInject } from '../ActionButton/context';

import RecordingIcon from './RecordingIcon.vue';
import { computed } from 'vue';

defineOptions({ name: 'AXSenderSpeechButton' });
const context = useActionButtonContextInject()

const props = defineProps<ButtonProps>();
const icon = computed(() => {
  const speechRecording = context.value.speechRecording
  const onSpeechDisabled = context.value.onSpeechDisabled
  const prefixCls = context.value.prefixCls

  let myIcon;
  if (speechRecording) {
    myIcon = <RecordingIcon className={`${prefixCls}-recording-icon`} />;
  } else if (onSpeechDisabled) {
    myIcon = <AudioMutedOutlined />;
  } else {
    myIcon = <AudioOutlined />;
  }
  return myIcon
})

defineRender(() => {
  return <ActionButton
    icon={icon.value}
    type='primary'
    // color="primary"
    // variant="text"
    {...props}
    action="onSpeech"
  />
})
</script>

<script setup lang="tsx">
import { Input } from 'ant-design-vue';
import { Suggestion, type SuggestionProps } from 'ant-design-x-vue';
import { ref } from 'vue';

defineOptions({ name: 'AXSuggestionBlock' });

type SuggestionItems = Exclude<SuggestionProps['items'], () => void>;

const suggestions: SuggestionItems = [
  { label: 'Write a report', value: 'report' },
  { label: 'Draw a picture', value: 'draw' },
  {
    label: 'Check some knowledge',
    value: 'knowledge',
    extra: 'Extra Info',
  },
];

const value = ref('');

defineRender(() => {
  return (
    <Suggestion
      items={suggestions}
      onSelect={(itemVal) => {
        value.value = `[${itemVal}]:`;
      }}
      block
      children={({ onTrigger, onKeyDown }) => {
        return (
          <Input
            value={value.value}
            onChange={(e) => {
              const nextVal = e.target.value
              if (nextVal === '/') {
                onTrigger();
              } else if (!nextVal) {
                onTrigger(false);
              }
              value.value = nextVal;
            }}
            onKeydown={onKeyDown}
            placeholder="输入 / 获取建议"
          />
        );
      }}
    />
  )
});
</script>

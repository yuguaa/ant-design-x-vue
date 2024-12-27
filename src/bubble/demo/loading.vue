<script setup lang="tsx">
import { UserOutlined } from '@ant-design/icons-vue';
import { Flex, Switch } from 'ant-design-vue';
import { Bubble } from '../../index';
import { ref, watch } from 'vue';

defineOptions({ name: 'BubbleLoading' });

const loading = ref(true);

watch([loading], () => {
  console.log('watch', loading.value)
})

defineRender(() => {
  return (
    <Flex gap="large" vertical>
      <Bubble loading={loading.value} content="hello world !" avatar={{ icon: <UserOutlined /> }} />
      <Flex gap="large" wrap="wrap">
        Loading state:
        <Switch v-model:checked={loading.value} />
      </Flex>
    </Flex>
  )
});
</script>

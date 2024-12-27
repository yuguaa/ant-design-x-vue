<script setup lang="tsx">
import { ref } from 'vue';
import { BubbleList } from '../../../src/bubble/index'
import { UserOutlined } from '@ant-design/icons-vue'

defineOptions({ name: 'BubbleListDemo' })
const roles = {
  ai: {
    placement: 'start',
    avatar: { icon: <UserOutlined />, style: { background: '#fde3cf' } },
    typing: { step: 5, interval: 20 },
    style: {
      maxWidth: 600,
    },
  },
  user: {
    placement: 'end',
    avatar: { icon: <UserOutlined />, style: { background: '#87d068' } },
  },
};

const count = ref(3)

defineRender(() => {
  return (
    <BubbleList
      style={{ maxHeight: 300 }}
      roles={roles}
      items={Array.from({ length: count.value }).map((_, i) => {
        const isAI = !!(i % 2);
        const content = isAI ? 'Mock AI content. '.repeat(20) : 'Mock user content.';

        return {
          key: i,
          role: isAI ? 'ai' : 'user',
          content,
        };
      })}
    />
  )
})
</script>

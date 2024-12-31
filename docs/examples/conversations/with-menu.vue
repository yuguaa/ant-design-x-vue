<script setup lang="tsx">
import { DeleteOutlined, EditOutlined, StopOutlined } from '@ant-design/icons-vue';
import { App, theme } from 'ant-design-vue';
import { Conversations, type ConversationsProps } from 'ant-design-x-vue';

defineOptions({ name: 'AXConversationsWithMenu' })

const items: ConversationsProps['items'] = Array.from({ length: 4 }).map((_, index) => ({
  key: `item${index + 1}`,
  label: `Conversation Item ${index + 1}`,
  disabled: index === 3,
}));

const Demo = () => {
  const { message } = App.useApp();
  const { token } = theme.useToken();

  const style = {
    width: '256px',
    background: token.value.colorBgContainer,
    borderRadius: token.value.borderRadius,
  };

  const menuConfig: ConversationsProps['menu'] = (conversation) => ({
    items: [
      {
        label: 'Operation 1',
        key: 'operation1',
        icon: <EditOutlined />,
      },
      {
        label: 'Operation 2',
        key: 'operation2',
        icon: <StopOutlined />,
        disabled: true,
      },
      {
        label: 'Operation 3',
        key: 'operation3',
        icon: <DeleteOutlined />,
        danger: true,
      },
    ],
    onClick: (menuInfo) => {
      message.info(`Click ${conversation.key} - ${menuInfo.key}`);
    },
  });

  return <Conversations defaultActiveKey="item1" menu={menuConfig} items={items} style={style} />
}


defineRender(() => {
  return (
    <App>
      <Demo />
    </App>
  )
})
</script>

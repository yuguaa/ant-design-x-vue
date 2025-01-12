<script setup lang="tsx">
import { App, Space, Spin, Typography } from 'ant-design-vue';
import { Sender } from 'ant-design-x-vue';
import { onWatcherCleanup, ref, watch } from 'vue';

defineOptions({ name: 'AXSenderActions' });

const Demo = () => {
  const loading = ref(false);
  const value = ref<string>('');

  const { message } = App.useApp();

  watch(loading, () => {
    if (loading.value) {
      const timer = setTimeout(() => {
        loading.value = false;
        value.value = '';
        message.success('Send message successfully!');
      }, 2000);
      onWatcherCleanup(() => {
        clearTimeout(timer);
      })
    }
  }, { immediate: true });

  return (
    <Sender
      submitType="shiftEnter"
      value={value.value}
      loading={loading.value}
      onChange={v => value.value = v}
      onSubmit={() => {
        loading.value = true;
      }}
      onCancel={() => {
        loading.value = false;
      }}
      actions={((_, info) => {
        const { SendButton, LoadingButton, ClearButton } = info.components;

        return (
          <Space size="small">
            <Typography.Text type="secondary">
              <small>`Shift + Enter` to submit</small>
            </Typography.Text>
            <ClearButton />
            {loading.value ? (
              <LoadingButton type="default" icon={<Spin size="small" />} disabled />
            ) : (
              <SendButton type="primary" disabled={false} />
            )}
          </Space>
        );
      })}
    />
  );
};

defineRender(() => {
  return (
    <App>
      <Demo />
    </App>
  )
});
</script>

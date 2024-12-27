<script setup lang="tsx">
import { Bubble } from '../../index';

defineOptions({ name: 'AXBubbleBasic' });

defineRender(() => {
  return (
    <Bubble content="hello world !" />
  )
})
</script>

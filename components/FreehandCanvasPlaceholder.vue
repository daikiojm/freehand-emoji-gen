<template>
  <p class="canvas-placeholder text-center black--text">
    <span class="d-inline-block">{{ $t('canvasPlaceholderL1') }}</span
    ><span class="d-inline-block">{{ $t('canvasPlaceholderL2') }}🐭</span>
  </p>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({})
</script>

<style scoped lang="scss">
.canvas-placeholder {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  opacity: 0.3;
  pointer-events: none;
}
</style>

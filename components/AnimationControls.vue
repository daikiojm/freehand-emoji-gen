<template>
  <v-card
    class="mx-auto controls-container pa-4"
    :style="controlsContainerStyle"
    elevation="2"
    outlined
  >
    <p class="subtitle-2">TODO</p>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import { useStaticConfig } from '~/composables/useStaticConfig'

export default defineComponent({
  setup() {
    const { freehandCanvasWidth, freehandCanvasHeight } = useStaticConfig()

    const controlsContainerStyle = {
      minWidth: `${freehandCanvasWidth}px`,
      minHeight: `${freehandCanvasHeight}px`,
      width: `${freehandCanvasWidth}px`,
      height: `${freehandCanvasHeight}px`,
    }

    return {
      controlsContainerStyle,
    }
  },
})
</script>

<style scoped lang="scss">
.controls-container {
  position: relative;

  .setting-reset-button {
    position: absolute;
    bottom: 24px;
    right: 24px;
  }
}
</style>

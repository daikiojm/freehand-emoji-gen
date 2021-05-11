<template>
  <v-card
    class="mx-auto controls-container pa-4"
    :style="controlsContainerStyle"
    elevation="2"
    outlined
  >
    <div class="d-flex justify-center my-auto" style="height: 100%">
      <v-btn
        class="my-auto"
        outlined
        :disabled="!dataHasChanged"
        @click.prevent="handleClear"
        >{{ $t('clear') }}</v-btn
      >
      <v-btn
        class="ml-4 my-auto"
        :disabled="!dataHasChanged"
        outlined
        @click.prevent="handlePngDownload"
        >{{ $t('save') }}</v-btn
      >
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import { useStore } from '~/store'
import { useStaticConfig } from '~/composables/useStaticConfig'
import { useImageDownload } from '~/composables/useImageDownload'
import { useSvgRef } from '~/composables/useSvgRef'

export default defineComponent({
  setup() {
    const { freehandCanvasWidth, freehandCanvasHeight } = useStaticConfig()
    const { dataHasChanged, resetData } = useStore()
    const { svgElement } = useSvgRef()
    const { downloadPngFromSvg } = useImageDownload()

    const controlsContainerStyle = {
      width: `${freehandCanvasWidth}px`,
      height: `${freehandCanvasHeight / 4}px`,
    }

    const handlePngDownload = async () =>
      await downloadPngFromSvg(svgElement.value!)

    const handleClear = () => resetData()

    return {
      controlsContainerStyle,
      dataHasChanged,
      handlePngDownload,
      handleClear,
    }
  },
})
</script>

<style scoped lang="scss">
.controls-container {
  position: relative;
}
</style>

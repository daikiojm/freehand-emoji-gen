<template>
  <v-card class="mx-auto svg-container" outlined :style="svgContainerStyle">
    <FreehandCanvasPlaceholder v-if="!dataHasChanged" />
    <svg
      ref="svgElement"
      :style="svgStyle"
      :width="svgContainerStyle.width"
      :height="svgContainerStyle.height"
      @pointerdown="handlePointerDown"
      @pointerup="handlePointerUp"
      @pointermove="handlePointerMove"
    >
      <g stroke-width="0" :style="svgGroupStyle">
        <path
          v-for="(stroke, index) of strokes"
          :key="index"
          :d="stroke"
        ></path>
      </g>
    </svg>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api'
import { get } from '@vueuse/core'

import FreehandCanvasPlaceholder from './FreehandCanvasPlaceholder.vue'

import { useEvents } from '~/composables/useEvents'
import { useSvgStroke } from '~/composables/useSvgStroke'
import { useSvgRef } from '~/composables/useSvgRef'
import { useStaticConfig } from '~/composables/useStaticConfig'

import { useStore } from '~/store'

const checkerboard = `url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGElEQVQYlWNgYGCQwoKxgqGgcJA5h3yFAAs8BRWVSwooAAAAAElFTkSuQmCC) repeat`
const transparentColor = '#00000000'

export default defineComponent({
  components: {
    FreehandCanvasPlaceholder,
  },
  setup() {
    const { freehandCanvasWidth, freehandCanvasHeight } = useStaticConfig()
    const { dataHasChanged, settings } = useStore()

    const svgContainerStyle = {
      minWidth: `${freehandCanvasWidth}px`,
      minHeight: `${freehandCanvasHeight}px`,
      width: `${freehandCanvasWidth}px`,
      height: `${freehandCanvasHeight}px`,
    }

    const strokeColor = computed(() => get(settings).strokeColor)

    const svgStyle = computed(() => {
      return {
        background:
          get(settings).backgroundColor !== transparentColor
            ? get(settings).backgroundColor
            : checkerboard,
      }
    })

    const svgGroupStyle = computed(() => {
      return {
        stroke: get(settings).strokeColor,
        fill: get(settings).strokeColor,
      }
    })

    return {
      ...useEvents(),
      ...useSvgStroke(),
      ...useSvgRef(),
      svgContainerStyle,
      svgStyle,
      strokeColor,
      svgGroupStyle,
      dataHasChanged,
    }
  },
})
</script>

<style scoped lang="scss">
svg {
  width: 100%;
  height: 100%;
  touch-action: none;
}

.svg-container {
  position: relative;
}

.canvas-placeholder {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  opacity: 0.3;
  pointer-events: none;
}
</style>

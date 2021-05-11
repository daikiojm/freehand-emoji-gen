<template>
  <v-card class="mx-auto svg-container" outlined :style="svgContainerStyle">
    <svg
      ref="svgElement"
      :style="svgStyle"
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

import { useEvents } from '~/composables/useEvents'
import { useSvgStroke } from '~/composables/useSvgStroke'
import { useSvgRef } from '~/composables/useSvgRef'
import { useStaticConfig } from '~/composables/useStaticConfig'
import { useStore } from '~/store'

export default defineComponent({
  setup() {
    const { freehandCanvasWidth, freehandCanvasHeight } = useStaticConfig()
    const { state } = useStore()

    const svgContainerStyle = {
      width: `${freehandCanvasWidth}px`,
      height: `${freehandCanvasHeight}px`,
    }

    const strokeColor = computed(() => state.value.settings.strokeColor)

    const svgStyle = computed(() => {
      return {
        backgroundColor: state.value.settings.backgroundColor,
      }
    })

    const svgGroupStyle = computed(() => {
      return {
        stroke: state.value.settings.strokeColor,
        fill: state.value.settings.strokeColor,
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
</style>

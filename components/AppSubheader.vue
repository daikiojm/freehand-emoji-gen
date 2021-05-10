<template>
  <v-subheader
    class="mx-auto font-weight-bold"
    :style="{ width: width + 'px' }"
  >
    <slot />
    <span class="text-caption ml-1">
      <slot name="caption" />
    </span>
  </v-subheader>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import { useStaticConfig } from '~/composables/useStaticConfig'

export default defineComponent({
  setup() {
    const { freehandCanvasWidth } = useStaticConfig()

    return {
      width: freehandCanvasWidth,
    }
  },
})
</script>

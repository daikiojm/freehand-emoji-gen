<template>
  <v-subheader
    class="mx-auto font-weight-bold"
    :style="{ width: !fullWidth ? width + 'px' : '100%' }"
  >
    <slot />
    <span class="text-caption ml-1">
      <slot name="caption" />
    </span>
  </v-subheader>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'

import { useStaticConfig } from '~/composables/useStaticConfig'

export default defineComponent({
  props: {
    fullWidth: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  setup() {
    const { freehandCanvasWidth } = useStaticConfig()

    return {
      width: freehandCanvasWidth,
    }
  },
})
</script>

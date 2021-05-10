<template>
  <v-color-picker
    v-model="color"
    class="mx-0 my-4"
    v-bind="vuetifyProps"
  ></v-color-picker>
</template>

<script lang="ts">
import { PropType, computed, defineComponent } from '@nuxtjs/composition-api'

import { useStaticConfig } from '~/composables/useStaticConfig'

export default defineComponent({
  props: {
    value: {
      type: String as PropType<string>,
      default: '#000000FF',
    },
  },
  setup(props, { emit }) {
    const { swatches } = useStaticConfig()

    const color = computed({
      get: () => props.value,
      set: (c: string) => emit('input', c),
    })

    const vuetifyProps = {
      canvasHeight: 100,
      width: 280,
      dotSize: 10,
      hideInputs: true,
      mode: 'hexa',
      showSwatches: true,
      swatches,
    }

    return {
      color,
      vuetifyProps,
    }
  },
})
</script>

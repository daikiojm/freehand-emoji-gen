<template>
  <v-btn-toggle v-model="toggle" dense>
    <v-btn class="text-capitalize">{{ $t('line') }}</v-btn>
    <v-btn class="text-capitalize">{{ $t('background') }}</v-btn>
  </v-btn-toggle>
</template>

<script lang="ts">
import { PropType, computed, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    value: {
      type: String as PropType<'stroke' | 'background'>,
      default: 'stroke',
    },
  },
  setup(props, { emit }) {
    const toggle = computed({
      get: () => (props.value === 'stroke' ? 0 : 1),
      set: (index: number) =>
        emit('input', index === 0 ? 'stroke' : 'background'),
    })

    return {
      toggle,
    }
  },
})
</script>

<template>
  <v-btn icon @click="toggle">
    <v-icon>{{ btnIcon }}</v-icon>
  </v-btn>
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api'

import { useDarkMode } from '~/composables/useDarkMode'

export default defineComponent({
  setup() {
    const { vuetify, toggleDarkMode } = useDarkMode()

    const btnIcon = computed(() =>
      // fixme: isDarkMode not working
      vuetify.value.theme.dark
        ? 'mdi-white-balance-sunny'
        : 'mdi-moon-waning-crescent'
    )

    const toggle = () => toggleDarkMode()

    return {
      btnIcon,
      toggle,
    }
  },
})
</script>

<style scoped lang="scss">
.app-subheader {
  max-width: 400px;
}
</style>

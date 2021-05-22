<template>
  <v-tooltip bottom>
    <template #activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" class="ml-2" @click="toggle" v-on="on">
        <v-icon>{{ btnIcon }}</v-icon>
      </v-btn>
    </template>
    <span>{{ $t('darkMode') }}</span>
  </v-tooltip>
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

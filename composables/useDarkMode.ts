import { computed } from '@nuxtjs/composition-api'

import { useVuetify } from './useVuetify'

export const useDarkMode = () => {
  const vuetify = useVuetify()

  const isDarkMode = computed<boolean>(() => vuetify.value.theme.dark)

  const toggleDarkMode = () => {
    if (!vuetify.value.theme.dark) {
      vuetify.value.theme.dark = true
    } else {
      vuetify.value.theme.dark = false
    }
  }

  return {
    vuetify,
    isDarkMode,
    toggleDarkMode,
  }
}

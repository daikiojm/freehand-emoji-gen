import { wrapProperty, computed } from '@nuxtjs/composition-api'

const useVuetify = wrapProperty('$vuetify', true)

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

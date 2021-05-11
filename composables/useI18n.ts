import { wrapProperty } from '@nuxtjs/composition-api'

export const useI18n = wrapProperty('$i18n', false)

export const useI18nLocales = () => {
  const i18n = useI18n()
  const locales = i18n.locales
  const locale = i18n.locale

  return {
    locales,
    locale,
  }
}

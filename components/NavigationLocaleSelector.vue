<template>
  <v-menu left offset-y bottom>
    <template #activator="{ on, attrs }">
      <v-btn v-bind="attrs" icon v-on="on">
        <v-icon>mdi-translate</v-icon>
        <v-icon class="hidden-sm-and-down" size="14">mdi-chevron-down</v-icon>
      </v-btn>
    </template>

    <v-list>
      <v-list-item
        v-for="locale in locales"
        :key="locale.code"
        dense
        nuxt
        :to="switchLocalePath(locale.code)"
      >
        <v-list-item-title> {{ locale.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import { useI18nLocales } from '~/composables/useI18n'

export default defineComponent({
  setup() {
    const { locales, locale } = useI18nLocales()

    return {
      locales,
      currentLocale: locale,
    }
  },
})
</script>

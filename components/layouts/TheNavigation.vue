<template>
  <v-app-bar flat app>
    <v-toolbar-title class="subtitle"
      ><span class="font-weight-bold">Freehand Emoji Gen</span> |
      <span class="caption"
        >{{ $t('subtitle') }}<span class="subtitle-2">📝</span></span
      ></v-toolbar-title
    >
    <v-spacer></v-spacer>
    <v-btn
      class="mx-2"
      icon
      rel="noopener"
      target="_blank"
      aria-label="github"
      href="https://github.com/daikiojm/freehand-emoji-gen"
    >
      <v-icon>mdi-github</v-icon>
    </v-btn>
    <LocaleSelector class="mx-2" />
    <ToggleDarkModeIconButton class="ml-2" />
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import ToggleDarkModeIconButton from '@/components/ToggleDarkModeIconButton.vue'
import LocaleSelector from '../LocaleSelector.vue'

export default defineComponent({
  components: {
    ToggleDarkModeIconButton,
    LocaleSelector,
  },
})
</script>

<template>
  <v-app-bar flat app>
    <v-toolbar-title class="text-h5 mb-n4" style="height: 48px"
      ><span class="font-weight-bold" style="font-family: 'Pacifico', cursive"
        >Freehand Emoji Gen</span
      >
      |
      <span class="text-caption font-weight-bold"
        >{{ $t('subtitle') }}<span class="subtitle-1">📝</span></span
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

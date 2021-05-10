<template>
  <v-app-bar flat app>
    <v-toolbar-title class="subtitle"
      ><span class="font-weight-bold">Freehand Emoji Gen</span> |
      <span class="caption"
        >フリーハンド絵文字ジェネレーター<span class="subtitle-2"
          >📝</span
        ></span
      ></v-toolbar-title
    >
    <v-spacer></v-spacer>
    <v-btn
      icon
      rel="noopener"
      target="_blank"
      aria-label="github"
      href="https://github.com/daikiojm/freehand-emoji-gen"
    >
      <v-icon>mdi-github</v-icon>
    </v-btn>
    <ToggleDarkModeIconButton />
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import ToggleDarkModeIconButton from '@/components/ToggleDarkModeIconButton.vue'

export default defineComponent({
  components: {
    ToggleDarkModeIconButton,
  },
})
</script>

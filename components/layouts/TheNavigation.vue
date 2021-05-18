<template>
  <v-app-bar app elevate-on-scroll height="80" class="px-4">
    <v-toolbar-title
      class="text-h5 mb-n2"
      style="height: 48px; cursor: pointer"
      @click="handleTitleClick"
    >
      <span class="font-weight-bold" style="font-family: 'Pacifico', cursive"
        >Freehand Emoji Gen</span
      >
      |
      <span class="text-caption font-weight-bold d-inline-block"
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
    <NavigationLocaleSelector class="mx-2" />
    <NavigationToggleDarkModeIconButton class="ml-2" />
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent, useRouter } from '@nuxtjs/composition-api'

import NavigationLocaleSelector from '~/components/NavigationLocaleSelector.vue'
import NavigationToggleDarkModeIconButton from '~/components/NavigationToggleDarkModeIconButton.vue'

export default defineComponent({
  components: {
    NavigationToggleDarkModeIconButton,
    NavigationLocaleSelector,
  },
  setup() {
    const router = useRouter()

    const handleTitleClick = () => {
      router.push('/')
    }

    return {
      handleTitleClick,
    }
  },
})
</script>

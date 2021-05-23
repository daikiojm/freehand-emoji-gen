<template>
  <v-app-bar app color="secondary" elevate-on-scroll height="80" class="px-4">
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

    <NavigationGithubLinkButton />
    <NavigationLocaleSelector />
    <NavigationToggleDarkModeIconButton />
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent, useRouter } from '@nuxtjs/composition-api'

import NavigationLocaleSelector from '~/components/NavigationLocaleSelector.vue'
import NavigationGithubLinkButton from '~/components/NavigationGithubLinkButton.vue'
import NavigationToggleDarkModeIconButton from '~/components/NavigationToggleDarkModeIconButton.vue'

export default defineComponent({
  components: {
    NavigationToggleDarkModeIconButton,
    NavigationGithubLinkButton,
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

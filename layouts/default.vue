<template>
  <v-app>
    <TheNavigation />
    <v-main>
      <v-container fill-height fluid>
        <Nuxt />
      </v-container>
    </v-main>
    <TheFooter />
    <AppSnackbar />
  </v-app>
</template>
<script lang="ts">
import { defineComponent, provide } from '@nuxtjs/composition-api'

import TheNavigation from '~/components/layouts/TheNavigation.vue'
import TheFooter from '~/components/layouts/TheFooter.vue'
import AppSnackbar from '~/components/AppSnackbar.vue'

import { SvgRefKey, svgRef } from '~/composables/useSvgRef'
import { StoreKey, store } from '~/store'

export default defineComponent({
  components: {
    TheNavigation,
    TheFooter,
    AppSnackbar,
  },
  setup() {
    provide(SvgRefKey, svgRef())
    provide(StoreKey, store())
  },
})
</script>

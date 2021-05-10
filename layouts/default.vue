<template>
  <v-app>
    <TheNavigation />
    <v-main>
      <v-container fill-height fluid>
        <Nuxt />
      </v-container>
    </v-main>
    <TheFooter />
  </v-app>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import TheNavigation from '~/components/layouts/TheNavigation.vue'
import TheFooter from '~/components/layouts/TheFooter.vue'

export default defineComponent({
  components: {
    TheNavigation,
    TheFooter,
  },
})
</script>

<template>
  <v-app>
    <Navigation />

    <v-main>
      <v-container fill-height fluid>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import Navigation from '~/components/Navigation.vue'

export default defineComponent({
  components: {
    Navigation,
  },
})
</script>

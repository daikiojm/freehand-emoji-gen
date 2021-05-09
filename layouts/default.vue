<template>
  <v-app>
    <Navigation />
    <v-main>
      <v-container fill-height fluid>
        <Nuxt />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import Navigation from '~/components/Navigation.vue'
import Footer from '~/components/Footer.vue'

export default defineComponent({
  components: {
    Navigation,
    Footer,
  },
})
</script>

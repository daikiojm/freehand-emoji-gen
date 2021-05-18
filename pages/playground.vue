<template>
  <v-container :fluid="$vuetify.breakpoint.mdAndDown">
    <Playground />
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import Playground from '~/components/Playground.vue'

export default defineComponent({
  components: {
    Playground,
  },
})
</script>

<template>
  <v-subheader class="mx-auto font-weight-bold app-subheader">
    <slot />
  </v-subheader>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({})
</script>

<style scoped lang="scss">
.app-subheader {
  max-width: 400px;
}
</style>

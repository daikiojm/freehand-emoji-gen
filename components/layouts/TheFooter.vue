<template>
  <v-footer class="d-flex flex-column px-2">
    <p
      class="
        text-caption
        font-weight-bold
        blue-grey--text
        text-center text-justify
        mt-2
        mb-0
      "
    >
      Freehand Emoji Gen | {{ $t('subtitle') }}📝
    </p>
    <p
      class="
        text-caption
        font-weight-bold
        blue-grey--text
        text-center text-truncate
      "
    >
      © 2021 <a href="https://github.com/daikiojm" target="_blank">daikiojm</a>
    </p>
  </v-footer>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({})
</script>

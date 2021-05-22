<template>
  <v-tooltip bottom>
    <template #activator="{ on, attrs }">
      <v-btn
        class="mx-2"
        icon
        rel="noopener"
        target="_blank"
        aria-label="github"
        href="https://github.com/daikiojm/freehand-emoji-gen"
        v-bind="attrs"
        v-on="on"
      >
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </template>
    <span>{{ $t('github') }}</span>
  </v-tooltip>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({})
</script>

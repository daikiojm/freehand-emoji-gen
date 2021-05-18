<template>
  <v-snackbar
    :value="snackbar.show"
    timeout="-1"
    bottom
    left
    text
    :color="snackbar.type"
  >
    {{ snackbar.message }}

    <template #action="{ attrs }">
      <v-btn class="text-capitalize" text v-bind="attrs" @click="handleDismiss">
        {{ $t('dismiss') }}</v-btn
      >
    </template>
  </v-snackbar>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import { useSnackbar } from '~/composables/useSnackbar'

export default defineComponent({
  setup() {
    const { snackbar, dismiss } = useSnackbar()

    const handleDismiss = () => dismiss()

    return {
      snackbar,
      handleDismiss,
    }
  },
})
</script>

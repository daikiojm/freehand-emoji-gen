<template>
  <v-snackbar v-model="snackbar" bottom left text color="primary">
    {{ text }}

    <template #action="{ attrs }">
      <v-btn text v-bind="attrs" @click="snackbar = false"> Close </v-btn>
    </template>
  </v-snackbar>
</template>

<script lang="ts">
import { ref, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const snackbar = ref<boolean>(true)
    const text = ref<string>('テスト')

    return {
      snackbar,
      text,
    }
  },
})
</script>

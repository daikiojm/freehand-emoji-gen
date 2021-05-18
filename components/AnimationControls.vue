<template>
  <v-card
    class="mx-auto controls-container pa-4"
    :style="controlsContainerStyle"
    elevation="2"
    outlined
  >
    <AppLabel>{{ $t('animation') }}</AppLabel>
    <v-select
      v-model="settings.animation"
      class="mt-2 mx-auto"
      style="width: 300px"
      :items="animationTypes"
      dense
      outlined
    ></v-select>

    <AppLabel>{{ $t('effects') }}</AppLabel>
    <v-select
      v-model="settings.animation"
      class="mt-2 mx-auto"
      style="width: 300px"
      :items="animationTypes"
      dense
      outlined
    ></v-select>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import { useStore, AnimationTypes } from '~/store'

import { useStaticConfig } from '~/composables/useStaticConfig'
import { useI18n } from '~/composables/useI18n'

export default defineComponent({
  setup() {
    const { freehandCanvasWidth, freehandCanvasHeight } = useStaticConfig()
    const { settings } = useStore()
    const i18n = useI18n()

    const controlsContainerStyle = {
      minWidth: `${freehandCanvasWidth}px`,
      minHeight: `${freehandCanvasHeight}px`,
      width: `${freehandCanvasWidth}px`,
      height: `${freehandCanvasHeight}px`,
    }

    const animationTypes = AnimationTypes.map((type) => ({
      value: type,
      text: i18n.t(type).toString() || type,
    }))

    return {
      animationTypes,
      settings,
      controlsContainerStyle,
    }
  },
})
</script>

<style scoped lang="scss">
.controls-container {
  position: relative;

  .setting-reset-button {
    position: absolute;
    bottom: 24px;
    right: 24px;
  }
}
</style>

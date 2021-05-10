<template>
  <v-card
    color="grey lighten-4"
    class="mx-auto controls-container pa-4"
    :style="controlsContainerStyle"
    outlined
  >
    <label class="text-caption">線の太さ(size)</label>
    <v-slider
      v-model="settings.size"
      class="mt-n1"
      dense
      hide-details
      max="50"
      min="1"
    ></v-slider>

    <label class="text-caption">線の色/背景色</label>
    <div class="d-flex justify-space-between">
      <div>
        <v-btn-toggle class="ml-4 mt-4" v-model="toggle_exclusive">
          <v-btn>線</v-btn>
          <v-btn>背景</v-btn>
        </v-btn-toggle>
      </div>
      <v-color-picker
        v-model="settings.strokeColor"
        canvas-height="100"
        width="280"
        class="mx-0 my-4"
        dot-size="10"
        hide-inputs
        mode="hexa"
        show-swatches
        :swatches="swatches"
      ></v-color-picker>
    </div>

    <div class="d-flex justify-center">
      <v-btn
        class="mx-auto"
        small
        :disabled="!settingsHasChanged"
        @click="handleSettingReset"
        >設定をリセット</v-btn
      >
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import { useStore } from '~/store'
import { useStaticConfig } from '~/composables/useStaticConfig'

export default defineComponent({
  setup() {
    const {
      swatches,
      freehandCanvasWidth,
      freehandCanvasHeight,
    } = useStaticConfig()
    const { settings, settingsHasChanged, resetSettings } = useStore()

    const controlsContainerStyle = {
      width: `${freehandCanvasWidth}px`,
      height: `${freehandCanvasHeight}px`,
    }

    const handleSettingReset = () => resetSettings()

    return {
      controlsContainerStyle,
      swatches,
      settings,
      settingsHasChanged,
      handleSettingReset,
    }
  },
})
</script>

<style scoped lang="scss">
.controls-container {
  position: relative;
}
</style>

<template>
  <v-card
    class="mx-auto controls-container pa-4"
    :style="controlsContainerStyle"
    elevation="2"
    outlined
  >
    <div v-for="(option, index) of strokeOptions" :key="index">
      <label class="text-caption">{{ option.title }}</label>
      <v-slider
        v-model="settings[option.key]"
        class="mt-n1"
        dense
        hide-details
        v-bind="option"
      ></v-slider>
    </div>

    <label class="text-caption">線の色/背景色</label>
    <div class="d-flex justify-start">
      <AppColorPicker v-model="color" />
      <div>
        <AppActiveColorPickerToggle
          v-model="settings.activeColorPicker"
          class="ml-4 mt-4"
        />
      </div>
    </div>

    <v-btn
      class="mx-auto setting-reset-button"
      outlined
      :disabled="!settingsHasChanged"
      @click="handleSettingReset"
      >設定をリセット</v-btn
    >
  </v-card>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

import AppColorPicker from '@/components/AppColorPicker.vue'
import AppActiveColorPickerToggle from '@/components/AppActiveColorPickerToggle.vue'

import { useStore } from '~/store'
import { useStaticConfig } from '~/composables/useStaticConfig'

export default defineComponent({
  components: {
    AppColorPicker,
    AppActiveColorPickerToggle,
  },
  setup() {
    const {
      freehandCanvasWidth,
      freehandCanvasHeight,
      strokeOptions,
    } = useStaticConfig()
    const { settings, settingsHasChanged, resetSettings } = useStore()

    const controlsContainerStyle = {
      width: `${freehandCanvasWidth}px`,
      height: `${freehandCanvasHeight}px`,
    }

    const handleSettingReset = () => resetSettings()

    const color = computed({
      get: () =>
        settings.value.activeColorPicker === 'stroke'
          ? settings.value.strokeColor
          : settings.value.backgroundColor,
      set: (color: string) =>
        settings.value.activeColorPicker === 'stroke'
          ? (settings.value.strokeColor = color)
          : (settings.value.backgroundColor = color),
    })

    return {
      controlsContainerStyle,
      settings,
      settingsHasChanged,
      handleSettingReset,
      color,
      strokeOptions,
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

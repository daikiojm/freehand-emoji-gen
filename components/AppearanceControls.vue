<template>
  <v-card
    class="mx-auto controls-container pa-4"
    :style="controlsContainerStyle"
    elevation="2"
    outlined
  >
    <div v-for="(option, index) of strokeOptions" :key="index">
      <AppLabel>{{ $t(option.title) }}</AppLabel>
      <v-slider
        v-model="settings[option.key]"
        class="mt-n1"
        dense
        hide-details
        v-bind="pickBindOption(option)"
      ></v-slider>
    </div>

    <AppLabel>{{ $t('lineAndBackgroundColor') }}</AppLabel>
    <div class="d-flex justify-start">
      <AppearanceControlsColorPicker v-model="color" />
      <div>
        <AppearanceControlsActiveColorPickerToggle
          v-model="settings.activeColorPicker"
          class="ml-4 mt-4"
        />
      </div>
    </div>

    <v-btn
      class="mx-auto setting-reset-button"
      outlined
      color="indigo"
      :disabled="!settingsHasChanged"
      @click="handleSettingReset"
      >{{ $t('resetSetting') }}</v-btn
    >
  </v-card>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import { reactivePick, get, set, toRefs } from '@vueuse/core'

import AppearanceControlsActiveColorPickerToggle from '~/components/AppearanceControlsActiveColorPickerToggle.vue'
import AppearanceControlsColorPicker from '~/components/AppearanceControlsColorPicker.vue'

import { useStore } from '~/store'
import { useStaticConfig } from '~/composables/useStaticConfig'
import type { AppStrokeOption } from '~/composables/useStaticConfig'

export default defineComponent({
  components: {
    AppearanceControlsColorPicker,
    AppearanceControlsActiveColorPickerToggle,
  },
  setup() {
    const { freehandCanvasWidth, freehandCanvasHeight, strokeOptions } =
      useStaticConfig()
    const { settings, settingsHasChanged, resetSettings } = useStore()
    const { activeColorPicker, strokeColor, backgroundColor } = toRefs(settings)

    const controlsContainerStyle = {
      minWidth: `${freehandCanvasWidth}px`,
      minHeight: `${freehandCanvasHeight}px`,
      width: `${freehandCanvasWidth}px`,
      height: `${freehandCanvasHeight}px`,
    }

    const handleSettingReset = () => resetSettings()

    const pickBindOption = (option: AppStrokeOption) =>
      reactivePick(option, 'step', 'min', 'max')

    const color = computed({
      get: () =>
        get(activeColorPicker) === 'stroke'
          ? get(strokeColor)
          : get(backgroundColor),
      set: (color: string) =>
        get(activeColorPicker) === 'stroke'
          ? set(strokeColor, color)
          : set(backgroundColor, color),
    })

    return {
      controlsContainerStyle,
      settings,
      settingsHasChanged,
      handleSettingReset,
      pickBindOption,
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

<template>
  <v-card
    class="mx-auto controls-container pa-4"
    :style="controlsContainerStyle"
    elevation="2"
    outlined
  >
    <div v-for="(option, index) of strokeOptions" :key="index">
      <label class="text-caption">{{ $t(option.title) }}</label>
      <v-slider
        v-model="settings[option.key]"
        class="mt-n1"
        dense
        hide-details
        v-bind="pickBindOption(option)"
      ></v-slider>
    </div>

    <label class="text-caption">{{ $t('lineAndBackgroundColor') }}</label>
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
      >{{ $t('resetSetting') }}</v-btn
    >
  </v-card>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import { reactivePick, get, set, toRefs } from '@vueuse/core'

import AppColorPicker from '@/components/AppColorPicker.vue'
import AppActiveColorPickerToggle from '@/components/AppActiveColorPickerToggle.vue'

import { useStore } from '~/store'
import { useStaticConfig } from '~/composables/useStaticConfig'
import type { AppStrokeOption } from '~/composables/useStaticConfig'

export default defineComponent({
  components: {
    AppColorPicker,
    AppActiveColorPickerToggle,
  },
  setup() {
    const { freehandCanvasWidth, freehandCanvasHeight, strokeOptions } =
      useStaticConfig()
    const { settings, settingsHasChanged, resetSettings } = useStore()
    const { activeColorPicker, strokeColor, backgroundColor } = toRefs(settings)

    const controlsContainerStyle = {
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

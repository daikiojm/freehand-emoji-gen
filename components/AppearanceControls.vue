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
        v-model="state.settings[option.key]"
        class="mt-n1"
        dense
        hide-details
        v-bind="option"
      ></v-slider>
    </div>

    <label class="text-caption">{{ $t('lineAndBackgroundColor') }}</label>
    <div class="d-flex justify-start">
      <AppColorPicker v-model="color" />
      <div>
        <AppActiveColorPickerToggle
          v-model="state.settings.activeColorPicker"
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
    const { freehandCanvasWidth, freehandCanvasHeight, strokeOptions } =
      useStaticConfig()
    const { state, settingsHasChanged, resetSettings } = useStore()

    const controlsContainerStyle = {
      width: `${freehandCanvasWidth}px`,
      height: `${freehandCanvasHeight}px`,
    }

    const handleSettingReset = () => resetSettings()

    const color = computed({
      get: () =>
        state.value.settings.activeColorPicker === 'stroke'
          ? state.value.settings.strokeColor
          : state.value.settings.backgroundColor,
      set: (color: string) =>
        state.value.settings.activeColorPicker === 'stroke'
          ? (state.value.settings.strokeColor = color)
          : (state.value.settings.backgroundColor = color),
    })

    return {
      controlsContainerStyle,
      state,
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

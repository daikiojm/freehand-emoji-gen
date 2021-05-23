<template>
  <v-card
    class="
      mx-auto
      controls-container
      pa-4
      d-flex
      flex-column
      justify-space-around
    "
    :style="controlsContainerStyle"
    outlined
  >
    <section>
      <AppLabel>{{ $t('animation') }}</AppLabel>
      <v-select
        v-model="settings.animation"
        class="mt-2 mx-auto"
        style="width: 300px"
        :items="animationTypes"
        dense
        outlined
      ></v-select>
    </section>

    <section>
      <AppLabel>{{ $t('effects') }}</AppLabel>
      <v-select
        v-model="settings.effect"
        class="mt-2 mx-auto"
        style="width: 300px"
        :items="effectTypes"
        dense
        outlined
        multiple
      ></v-select>
    </section>

    <section>
      <AppLabel>{{ $t('speed') }}</AppLabel>
      <v-select
        v-model="settings.animationSpeed"
        class="mt-2 mx-auto"
        style="width: 300px"
        :items="animationSpeeds"
        dense
        outlined
      ></v-select>
    </section>
  </v-card>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import { ignorableWatch } from '@vueuse/core'

import {
  useStore,
  AnimationTypes,
  AnimationSpeeds,
  EffectTypes,
  EffectType,
} from '~/store'

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

    const effectTypes = EffectTypes.map((type) => ({
      value: type,
      text: i18n.t(type).toString() || type,
      disabled: false,
    }))

    const animationSpeeds = AnimationSpeeds.map((type) => ({
      value: type,
      text: i18n.t(type).toString() || type,
    }))

    const effect = computed(() => settings.value.effect)

    const { ignoreUpdates } = ignorableWatch(
      effect,
      (values: EffectType[], oldValues: EffectType[]) => {
        if (values.includes('none') && values.length > oldValues.length) {
          ignoreUpdates(() => {
            settings.value.effect = values.filter((e) => e !== 'none')
          })
        }

        if (!oldValues.includes('none') && values.includes('none')) {
          ignoreUpdates(() => {
            settings.value.effect = values.filter((e) => e === 'none')
          })
        }
      }
    )

    return {
      animationTypes,
      effectTypes,
      animationSpeeds,
      settings,
      controlsContainerStyle,
    }
  },
})
</script>

<style scoped lang="scss">
.controls-container {
  position: relative;
}
</style>

<template>
  <v-card
    class="mx-auto controls-container pa-4"
    :style="controlsContainerStyle"
    elevation="2"
    outlined
  >
    <label class="text-caption">{{ $t('preview') }}</label>
    <ImagePreview :image="download.resultImage" />

    <label class="text-caption">{{ $t('saveSettingLabel') }}</label>
    <v-text-field
      v-model="download.fileName"
      :disabled="!download.useCustomFileName"
      class="mx-auto my-4"
      :label="$t('fileName')"
      placeholder="avocado_freehand"
      style="width: 200px"
      outlined
      dense
      hide-details
    ></v-text-field>

    <div class="d-flex justify-center">
      <div class="d-flex flex-column my-auto mr-4">
        <label class="text-caption">{{ $t('useFileName') }}</label>
        <v-checkbox
          v-model="download.useCustomFileName"
          class="mt-0 mb-n4 mx-auto"
        ></v-checkbox>
      </div>

      <v-btn
        class="my-auto font-weight-bold"
        width="80"
        outlined
        :disabled="!dataHasChanged"
        @click.prevent="handleClear"
        >{{ $t('clear') }}</v-btn
      >
      <v-btn
        class="ml-4 my-auto font-weight-bold"
        width="80"
        color="primary"
        :disabled="!dataHasChanged"
        depressed
        @click.prevent="handlePngDownload"
        >{{ $t('save') }}</v-btn
      >
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import ImagePreview from './ImagePreview.vue'

import { useStore } from '~/store'

import { useStaticConfig } from '~/composables/useStaticConfig'
import { useImageDownload } from '~/composables/useImageDownload'
import { useSnackbar } from '~/composables/useSnackbar'
import { useI18n } from '~/composables/useI18n'

export default defineComponent({
  components: {
    ImagePreview,
  },
  setup() {
    const { freehandCanvasWidth, freehandCanvasHeight } = useStaticConfig()
    const { dataHasChanged, resetData, download } = useStore()
    const { downloadGifImage } = useImageDownload()
    const snackbar = useSnackbar()
    const i18n = useI18n()

    const controlsContainerStyle = {
      minWidth: `${freehandCanvasWidth}px`,
      minHeight: `${freehandCanvasHeight}px`,
      width: `${freehandCanvasWidth}px`,
      height: `${freehandCanvasHeight}px`,
    }

    const handlePngDownload = () => {
      try {
        // downloadPngImage()
        downloadGifImage()
        snackbar.success(i18n.t('saveSuccessMessage').toString())
      } catch {
        snackbar.error(i18n.t('saveErrorMessage').toString())
      }
    }

    const handleClear = () => {
      resetData()
      snackbar.success(i18n.t('clearSuccessMessage').toString())
    }

    return {
      controlsContainerStyle,
      dataHasChanged,
      download,
      handlePngDownload,
      handleClear,
    }
  },
})
</script>

<style scoped lang="scss">
.controls-container {
  position: relative;
}
</style>

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
    elevation="2"
    outlined
  >
    <section>
      <AppLabel>{{ $t('preview') }}</AppLabel>
      <DownloadControlsImagePreview :image="download.resultImage" />
    </section>

    <section>
      <AppLabel>{{ $t('history') }}</AppLabel>
      <div class="d-flex justify-center mt-4">
        <v-btn
          class="text-capitalize my-auto font-weight-bold"
          width="80"
          outlined
          color="indigo"
          :disabled="!canUndoMark"
          @click.prevent="handleUndo"
          >{{ $t('back') }}</v-btn
        >
        <v-btn
          class="text-capitalize ml-4 my-auto font-weight-bold"
          width="80"
          outlined
          color="indigo"
          :disabled="!canRedoMark"
          @click.prevent="handleRedo"
          >{{ $t('forward') }}</v-btn
        >
        <v-btn
          class="text-capitalize ml-4 my-auto font-weight-bold"
          width="80"
          outlined
          color="indigo"
          :disabled="!dataHasChanged"
          @click.prevent="handleClear"
          >{{ $t('clear') }}</v-btn
        >
      </div>
    </section>

    <section>
      <AppLabel>{{ $t('saveSettingLabel') }}</AppLabel>
      <div class="d-flex justify-center">
        <v-checkbox
          v-model="download.useCustomFileName"
          dense
          hide-details
          :label="$t('useFileName')"
          class="my-auto mx-auto mr-4"
        ></v-checkbox>
        <v-text-field
          v-model="download.fileName"
          :disabled="!download.useCustomFileName"
          class="text-capitalize mx-auto my-4"
          :label="$t('fileName')"
          placeholder="avocado_freehand"
          style="width: 200px"
          outlined
          dense
          hide-details
        ></v-text-field>
      </div>

      <div class="d-flex justify-center">
        <v-btn
          class="my-auto font-weight-bold"
          width="80"
          color="primary"
          :disabled="!dataHasChanged"
          depressed
          @click.prevent="handlePngDownload"
          >{{ $t('save') }}</v-btn
        >
      </div>
    </section>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import DownloadControlsImagePreview from '~/components/DownloadControlsImagePreview.vue'

import { useStore } from '~/store'

import { useStaticConfig } from '~/composables/useStaticConfig'
import { useImageDownload } from '~/composables/useImageDownload'
import { useSnackbar } from '~/composables/useSnackbar'
import { useI18n } from '~/composables/useI18n'

export default defineComponent({
  components: {
    DownloadControlsImagePreview,
  },
  setup() {
    const { freehandCanvasWidth, freehandCanvasHeight } = useStaticConfig()
    const {
      canUndoMark,
      canRedoMark,
      undoMark,
      redoMark,
      dataHasChanged,
      resetData,
      download,
    } = useStore()
    const { downloadImage } = useImageDownload()
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
        downloadImage()
        snackbar.success(i18n.t('saveSuccessMessage').toString())
      } catch {
        snackbar.error(i18n.t('saveErrorMessage').toString())
      }
    }

    const handleClear = () => {
      resetData()
      snackbar.success(i18n.t('clearSuccessMessage').toString())
    }

    const handleUndo = () => undoMark()

    const handleRedo = () => redoMark()

    return {
      controlsContainerStyle,
      dataHasChanged,
      download,
      handlePngDownload,
      handleClear,
      handleUndo,
      handleRedo,
      canUndoMark,
      canRedoMark,
    }
  },
})
</script>

<style scoped lang="scss">
.controls-container {
  position: relative;
}
</style>

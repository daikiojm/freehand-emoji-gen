<template>
  <v-container>
    <v-row>
      <v-col>
        <AppSubheader>手書き入力</AppSubheader>
        <FreehandCanvas />
      </v-col>
      <v-col>
        <AppSubheader>設定</AppSubheader>
        <AppearanceControls />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="d-flex justify-center mt-6">
          <v-btn
            outlined
            :disabled="!dataHasChanged"
            @click.prevent="handleClear"
            >クリア</v-btn
          >
          <v-btn
            class="ml-4"
            :disabled="!dataHasChanged"
            outlined
            @click.prevent="handlePngDownload"
            >保存</v-btn
          >
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, provide } from '@nuxtjs/composition-api'

import AppSubheader from '~/components/AppSubheader.vue'
import FreehandCanvas from '~/components/FreehandCanvas.vue'
import AppearanceControls from '~/components/AppearanceControls.vue'

import { useStore } from '~/store'
import { useImageDownload } from '~/composables/useImageDownload'
import { SvgRefKey, useSvgRef, svgRef } from '~/composables/useSvgRef'

export default defineComponent({
  components: {
    AppSubheader,
    FreehandCanvas,
    AppearanceControls,
  },
  setup() {
    provide(SvgRefKey, svgRef())

    const { dataHasChanged, resetData } = useStore()
    const { downloadPngFromSvg } = useImageDownload()

    const { svgElement } = useSvgRef()

    const handlePngDownload = async () =>
      await downloadPngFromSvg(svgElement.value!)

    const handleClear = () => resetData()

    return {
      dataHasChanged,
      handlePngDownload,
      handleClear,
    }
  },
})
</script>

<style scoped lang="scss">
.settings-container {
  position: relative;
  width: 400px;
  height: 400px;
}
</style>

<template>
  <v-container>
    <v-row no-gutters>
      <v-col>
        <AppSubheader>
          <template #default>🖋 {{ $t('editorTitle') }}</template>
          <template #caption> ({{ $t('editorSubtitle') }}) </template>
        </AppSubheader>
        <FreehandCanvas />
      </v-col>
      <v-col>
        <AppSubheader>
          <template #default>⚙️ {{ $t('appearanceTitle') }}</template>
          <template #caption> ({{ $t('appearanceSubtitle') }}) </template>
        </AppSubheader>
        <AppearanceControls />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <AppSubheader>
          <template #default>️ 💾 {{ $t('saveSettingTitle') }}</template>
        </AppSubheader>
        <DownloadControls />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, provide } from '@nuxtjs/composition-api'

import AppSubheader from '~/components/AppSubheader.vue'
import FreehandCanvas from '~/components/FreehandCanvas.vue'
import AppearanceControls from '~/components/AppearanceControls.vue'
import DownloadControls from '~/components/DownloadControls.vue'

import { SvgRefKey, svgRef } from '~/composables/useSvgRef'

export default defineComponent({
  components: {
    AppSubheader,
    FreehandCanvas,
    AppearanceControls,
    DownloadControls,
  },
  setup() {
    provide(SvgRefKey, svgRef())
  },
})
</script>

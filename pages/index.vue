<template>
  <v-container :fluid="$vuetify.breakpoint.mdAndDown">
    <v-row no-gutters>
      <v-col cols="12" xl="4" lg="6" md="6" sm="12">
        <div class="mb-4">
          <AppSubheader>
            <template #default>🖋 {{ $t('editorTitle') }}</template>
            <template #caption> ({{ $t('editorSubtitle') }}) </template>
          </AppSubheader>
          <FreehandCanvas />
        </div>
      </v-col>
      <v-col cols="12" xl="4" lg="6" md="6" sm="12">
        <div class="mb-4">
          <AppSubheader>
            <template #default>⚙️ {{ $t('appearanceTitle') }}</template>
            <template #caption> ({{ $t('appearanceSubtitle') }}) </template>
          </AppSubheader>
          <AppearanceControls />
        </div>
      </v-col>
      <v-col cols="12" xl="4" lg="12" md="12" sm="12">
        <div class="mb-4">
          <AppSubheader>
            <template #default>️ 💾 {{ $t('saveSettingTitle') }}</template>
          </AppSubheader>
          <DownloadControls />
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

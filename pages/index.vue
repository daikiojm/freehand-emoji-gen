<template>
  <v-container :fluid="$vuetify.breakpoint.mdAndDown">
    <v-row no-gutters>
      <v-col cols="12" xl="4" lg="6" md="6" sm="12">
        <div class="mb-4">
          <AppSubheader>
            <template #default
              ><span class="mr-2">🖋</span> {{ $t('editorTitle') }}</template
            >
            <template #caption> ({{ $t('editorSubtitle') }}) </template>
          </AppSubheader>
          <FreehandCanvas />
        </div>
      </v-col>
      <v-col cols="12" xl="4" lg="6" md="6" sm="12">
        <div class="mb-4">
          <AppSubheader>
            <template #default
              ><span class="mr-2">⚙️</span>️
              {{ $t('appearanceTitle') }}</template
            >
            <template #caption> ({{ $t('appearanceSubtitle') }}) </template>
          </AppSubheader>
          <AppearanceControls />
        </div>
      </v-col>
      <v-col cols="12" xl="4" lg="6" md="6" sm="12">
        <div class="mb-4">
          <AppSubheader>
            <template #default
              ><span class="mr-2">💩</span> {{ $t('animationTitle') }}</template
            >
            <template #caption> ({{ $t('animationSubtitle') }}) </template>
          </AppSubheader>
          <AnimationControls />
        </div>
      </v-col>
      <v-col cols="12" xl="4" lg="6" md="6" sm="12">
        <div class="mb-4">
          <AppSubheader>
            <template #default
              >️<span class="mr-2">💾</span>
              {{ $t('saveSettingTitle') }}</template
            >
          </AppSubheader>
          <DownloadControls />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import AppSubheader from '~/components/AppSubheader.vue'
import FreehandCanvas from '~/components/FreehandCanvas.vue'
import AppearanceControls from '~/components/AppearanceControls.vue'
import AnimationControls from '~/components/AnimationControls.vue'
import DownloadControls from '~/components/DownloadControls.vue'

export default defineComponent({
  components: {
    AppSubheader,
    FreehandCanvas,
    AppearanceControls,
    AnimationControls,
    DownloadControls,
  },
})
</script>

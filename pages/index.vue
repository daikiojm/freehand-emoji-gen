<template>
  <v-container>
    <v-row no-gutters>
      <v-col>
        <AppSubheader>
          <template #default>🖋 手書き入力</template>
          <template #caption>
            (クリックしたままカーソルを動かして線を描けます)
          </template>
        </AppSubheader>
        <FreehandCanvas />
      </v-col>
      <v-col>
        <AppSubheader>
          <template #default>⚙️ 絵文字設定</template>
          <template #caption>
            (お好みの見た目になるように先の太さや色を調整できます)
          </template>
        </AppSubheader>
        <AppearanceControls />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <AppSubheader>
          <template #default>️ 💾 保存設定</template>
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

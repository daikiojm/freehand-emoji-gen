<template>
  <v-container>
    <v-row>
      <v-col>
        <AppSubheader>手書き入力</AppSubheader>
        <v-card class="mx-auto svg-container" max-width="400" outlined>
          <svg
            ref="svgEl"
            @pointerdown="handlePointerDown"
            @pointerup="handlePointerUp"
            @pointermove="handlePointerMove"
          >
            <g stroke-width="0" stroke="#000" fill="#000">
              <path
                v-for="(stroke, index) of strokes"
                :key="index"
                :d="stroke"
              ></path>
            </g>
          </svg>
        </v-card>
      </v-col>
      <v-col>
        <AppSubheader>設定</AppSubheader>
        <v-card
          color="grey lighten-4"
          class="mx-auto svg-container pa-4"
          max-width="400"
          outlined
        >
          <p>TODO</p>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="d-flex justify-center mt-6">
          <v-btn outlined @click.prevent="handleClear">クリア</v-btn>
          <v-btn class="ml-4" outlined @click.prevent="handlePngDownload"
            >保存</v-btn
          >
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  reactive,
  ref,
} from '@nuxtjs/composition-api'
import getStroke from 'perfect-freehand'

import AppSubheader from '~/components/AppSubheader.vue'

import { getSvgPathFromStroke } from '~/utils/svg'

type Mark = {
  type: string
  points: number[][]
}

export default defineComponent({
  components: {
    AppSubheader,
  },
  setup() {
    const currentMark = reactive<Mark>({
      type: '',
      points: [],
    })
    const marks = ref<Mark[]>([])

    const svgEl = ref(null)

    const setCurrentMark = (mark: Mark) => {
      currentMark.type = mark.type
      currentMark.points = mark.points
    }

    const handlePointerDown = (e: PointerEvent) => {
      e.preventDefault()
      setCurrentMark({
        type: e.pointerType,
        points: [[e.offsetX, e.offsetY, e.pressure]],
      })
    }

    const handlePointerMove = (e: PointerEvent) => {
      e.preventDefault()
      if (e.buttons === 1) {
        setCurrentMark({
          ...currentMark,
          points: [...currentMark.points, [e.offsetX, e.offsetY, e.pressure]],
        })
      }
    }

    const handlePointerUp = (e: PointerEvent) => {
      e.preventDefault()
      marks.value = [...marks.value, { ...currentMark }]
    }

    const strokes = computed(() => {
      return [...marks.value, currentMark].map((mark) =>
        getSvgPathFromStroke(
          getStroke(mark.points, {
            size: 24,
            thinning: 0.75,
            smoothing: 0.5,
            streamline: 0.5,
            simulatePressure: mark.type !== 'pen',
          })
        )
      )
    })

    const loadImagePromise = (src: string): Promise<HTMLImageElement> =>
      new Promise((resolve, reject) => {
        const image = new Image()
        image.addEventListener('load', () => resolve(image))
        image.addEventListener('error', (err) => reject(err))
        image.src = src
      })

    const handlePngDownload = async () => {
      const svg = (svgEl.value as unknown) as SVGElement
      svg.style.background = 'white'
      const svgData = new XMLSerializer().serializeToString(svg)
      const canvas = document.createElement('canvas')
      canvas.width = 400
      canvas.height = 400

      const ctx = canvas.getContext('2d')
      const src =
        'data:image/svg+xml;charset=utf-8;base64,' +
        btoa(unescape(encodeURIComponent(svgData)))
      const image = await loadImagePromise(src)

      ctx?.drawImage(image, 0, 0, 400, 400, 0, 0, 100, 100)
      const imageStr = canvas.toDataURL('image/png')

      const croppedImage = await loadImagePromise(imageStr)
      const croppedCanvas = document.createElement('canvas')
      croppedCanvas.width = 100
      croppedCanvas.height = 100
      const croppedCtx = croppedCanvas.getContext('2d')
      croppedCtx?.drawImage(croppedImage, 0, 0, 100, 100, 0, 0, 100, 100)
      const a = document.createElement('a')
      const croppedImageStr = croppedCanvas.toDataURL('image/png')
      a.href = croppedImageStr
      a.setAttribute('download', 'image.png')
      a.dispatchEvent(new MouseEvent('click'))
    }

    const handleClear = () => {
      marks.value = []
      setCurrentMark({
        type: '',
        points: [],
      })
    }

    return {
      handlePointerDown,
      handlePointerMove,
      handlePointerUp,
      currentMark,
      strokes,
      svgEl,
      handlePngDownload,
      handleClear,
    }
  },
})
</script>

<style scoped lang="scss">
svg {
  width: 100%;
  height: 100%;
  background-color: #fff;
  touch-action: none;
}

.svg-container {
  position: relative;
  width: 400px;
  height: 400px;
}
</style>

<template>
  <div>
    <div class="svg-container border border-gray-200 mt-10 mx-auto">
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
    </div>

    <div class="flex my-4 mx-10 justify-center">
      <button
        href="https://github.com/nuxt/nuxt.js"
        target="_blank"
        rel="noopener noreferrer"
        class="w-1/3 h-10 flex items-center justify-center bg-gray-300 rounded-md border border-gray-300 ml-2"
        @click.prevent="handlePngDownload"
      >
        Download
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  reactive,
  ref,
} from '@nuxtjs/composition-api'
import getStroke from 'perfect-freehand'
import { getSvgPathFromStroke } from '../utils/svg'

type Mark = {
  type: string
  points: number[][]
}

export default defineComponent({
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
        // points: [[e.pageX, e.pageY, e.pressure]],
        points: [[e.offsetX, e.offsetY, e.pressure]],
      })
    }

    const handlePointerMove = (e: PointerEvent) => {
      e.preventDefault()
      if (e.buttons === 1) {
        setCurrentMark({
          ...currentMark,
          // points: [...currentMark.points, [e.pageX, e.pageY, e.pressure]],
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

    return {
      handlePointerDown,
      handlePointerMove,
      handlePointerUp,
      currentMark,
      // stroke,
      strokes,
      svgEl,
      handlePngDownload,
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

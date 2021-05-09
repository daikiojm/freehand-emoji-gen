<template>
  <div class="container">
    <div>
      <h1 class="title">freehand-emoji-gen</h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
          @click.prevent="handlePngDownload"
        >
          to PNG
        </a>
      </div>
      <div class="svg-container border border-gray-200 mt-4 mx-auto">
        <svg
          ref="svgEl"
          @pointerdown="handlePointerDown"
          @pointermove="handlePointerMove"
        >
          <path v-if="currentMark" :d="stroke"></path>
        </svg>
      </div>
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

    const svgEl = ref(null)

    const setCurrentMark = (mark: Mark) => {
      currentMark.type = mark.type
      currentMark.points = mark.points
    }

    const handlePointerDown = (e: PointerEvent) => {
      // eslint-disable-next-line no-console
      console.log(e.pageX, e.pageY)
      // eslint-disable-next-line no-console
      console.log(e.clientX, e.clientY)
      // eslint-disable-next-line no-console
      console.log(e.offsetX, e.offsetY)

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

    const stroke = computed(() =>
      getSvgPathFromStroke(
        getStroke(currentMark.points, {
          size: 24,
          thinning: 0.75,
          smoothing: 0.5,
          streamline: 0.5,
          simulatePressure: currentMark.type !== 'pen',
        })
      )
    )

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
      currentMark,
      stroke,
      svgEl,
      handlePngDownload,
    }
  },
})
</script>

<style scoped lang="scss">
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

svg {
  // position: fixed;
  // top: 0;
  // left: 0;
  // position: absolute;
  // top: 0;
  // left: 0;
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

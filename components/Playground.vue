<template>
  <div>
    <h2>playground</h2>
    <section>
      <p>canvas effects</p>
      <svg
        ref="svgRef"
        style="width: 100px; height: 100px"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"
        />
      </svg>
      <div ref="containerRef" class="pixi-container"></div>
      <img :src="src" style="width: 128px; height: 128px" />
    </section>
  </div>
</template>

<script lang="ts">
/* eslint-disable no-console */

import { defineComponent, ref, onMounted } from '@nuxtjs/composition-api'

import GIF from 'gif.js'
import type PIXIType from 'pixi.js'

import { useImageRender } from '~/composables/useImageRender'

export const readFilePromise = (blob: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => resolve(reader.result as string))
    reader.addEventListener('error', (err) => reject(err))
    reader.readAsDataURL(blob)
  })
}

const SIZE = 128

export default defineComponent({
  setup() {
    const containerRef = ref<HTMLDivElement>()
    const svgRef = ref<SVGElement>()
    const src = ref<string>()
    const { convertSvgToResizedCanvas } = useImageRender()

    onMounted(async () => {
      console.log('onMounted')
      if (!process.client) {
        return
      }

      const gif = new GIF({
        // forever
        repeat: 0,
        // lower is better
        quality: 6,
        workers: 4,
        width: SIZE,
        height: SIZE,
        debug: true,
        workerScript: `${
          // gh-pages workaround
          process.env.NODE_ENV === 'production' ? '/freehand-emoji-gen/' : '/'
        }js/gif.worker.js`,
      })

      const PIXI: typeof PIXIType = require('pixi.js')
      const app = new PIXI.Application({
        width: SIZE,
        height: SIZE,
        preserveDrawingBuffer: true,
      })
      containerRef.value?.appendChild(app.view)

      const imageCanvas = await convertSvgToResizedCanvas(
        svgRef.value!,
        SIZE,
        SIZE,
        SIZE,
        SIZE
      )

      const image = PIXI.Sprite.from(imageCanvas)
      image.anchor.set(0.5)
      image.x = app.screen.width / 2
      image.y = app.screen.height / 2
      app.stage.addChild(image)

      // filter
      const filter = new PIXI.filters.ColorMatrixFilter()
      // app.stage.filters = [filter]
      image.filters = [filter]

      app.ticker.maxFPS = 12

      let framecount = 0
      app.ticker.speed = 2
      app.ticker.add((delta) => {
        image.rotation += 0.1 * delta
        const { matrix } = filter
        const count = framecount

        matrix[1] = Math.sin(count) * 3
        matrix[2] = Math.cos(count)
        matrix[3] = Math.cos(count) * 1.5
        matrix[4] = Math.sin(count / 3) * 2
        matrix[5] = Math.sin(count / 2)
        matrix[6] = Math.sin(count / 4)

        if (framecount >= 12) {
          app.ticker.stop()
          gif.render()
        }
        const snapshot = app.view.toDataURL('imp/png')
        console.log(snapshot)

        if (framecount !== 0) {
          gif.addFrame(app.view, {
            copy: true,
            delay: 100,
          })
        }

        framecount++

        // const dataUrl = app.view.toDataURL('img/png')
        // console.log(dataUrl)
      })

      gif.addListener('finished', async (blob: Blob) => {
        const dataUrl = await readFilePromise(blob)
        src.value = dataUrl
      })
    })

    return {
      containerRef,
      svgRef,
      src,
    }
  },
})
</script>

<style scoped lang="scss">
canvas {
  border: thin solid rgba(0, 0, 0, 0.12);
  background-color: #fff;
}
</style>

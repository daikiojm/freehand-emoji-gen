<template>
  <div>
    <h2>playground</h2>
    <section>
      <p>canvas effects</p>
      <img ref="imgRef" src="~/assets/emoji-test.png" />
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
    const imgRef = ref<HTMLImageElement>()
    const src = ref<string>()

    onMounted(() => {
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
        // debug: true,
        debug: false,
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

      const images = Array(3)
        .fill(null)
        .map(() => PIXI.Sprite.from(imgRef.value!))

      for (let i = 0; i < images.length; i++) {
        const image = images[i]
        image.anchor.set(0.5)
        image.y = app.screen.height / 2

        if (i === 0) {
          image.x = -(image.width / 2)
        }
        if (i === 1) {
          image.x = image.width / 2
        }
        if (i === 2) {
          image.x = image.width * 2
        }
        app.stage.addChild(image)
      }

      app.ticker.minFPS = 12
      app.ticker.maxFPS = 12
      // app.ticker.speed = 1

      // const fps = 60
      const fps = 1
      const delay = (1 / fps) * 1000
      console.log('delay', delay)

      let framecount = 0
      app.ticker.add((_delta) => {
        // delta (12fps: 0~12)

        const move = 128 / 12
        for (const image of images) {
          image.x += move
        }

        if (framecount >= 12) {
          app.ticker.stop()
          gif.render()
        }

        if (framecount !== 0) {
          gif.addFrame(app.view, {
            copy: true,
            // delay: 120,
            delay,
          })
        }

        framecount++
      })

      gif.addListener('finished', async (blob: Blob) => {
        const dataUrl = await readFilePromise(blob)
        src.value = dataUrl
      })
    })

    return {
      containerRef,
      svgRef,
      imgRef,
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

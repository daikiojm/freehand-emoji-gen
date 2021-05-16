<template>
  <div>
    <p>playground</p>
    <svg
      ref="playgroundSvgElement"
      class="mt-10 mx-auto"
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="#4287f5"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path
        d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
      />
    </svg>
    <canvas
      ref="playgroundCanvasElement"
      class="ml-10"
      width="100px"
      height="100px"
    ></canvas>
    <img :src="resultImage" />
    <v-btn class="mt-10" small @click="handleClick">button</v-btn>
  </div>
</template>

<script lang="ts">
/* eslint-disable no-console */

import { defineComponent, onMounted, ref } from '@nuxtjs/composition-api'
import GIF from 'gif.js'
import gsap, { Linear } from 'gsap'

import { useImageRender } from '~/composables/useImageRender'

// const FRAME_RATE = 60
const SIZE = 128

export default defineComponent({
  setup() {
    const playgroundSvgElement = ref<SVGElement>()
    const playgroundCanvasElement = ref<HTMLCanvasElement>()
    const ctx = ref<CanvasRenderingContext2D>()
    const { convertSvgToResizedCanvas } = useImageRender()
    const resultImage = ref<string>('')

    onMounted(async (): Promise<void> => {
      if (process.client) {
        console.log('svg element', playgroundSvgElement)
        console.log('canvas element', playgroundCanvasElement)
        ctx.value = playgroundCanvasElement.value?.getContext('2d')!
        playgroundCanvasElement.value!.width = SIZE
        playgroundCanvasElement.value!.height = SIZE

        const image = await convertSvgToResizedCanvas(
          playgroundSvgElement.value!,
          SIZE,
          SIZE,
          SIZE,
          SIZE
        )

        const positions = { dx: 0, dy: 50 }

        const gif = new GIF({
          workers: 2,
          quality: 10,
          width: SIZE,
          height: SIZE,
          debug: true,
          transparent: '#ffffff00',
          workerScript: '/js/gif.worker.js',
        })

        const animateCanvas = () => {
          console.log('animateCanvas')
          ctx.value?.clearRect(0, 0, SIZE, SIZE)
          ctx.value?.drawImage(image, positions.dx, positions.dy)
          gif.addFrame(playgroundCanvasElement.value!, {
            copy: true,
            delay: 20,
          })
        }

        const complateAnimate = () => {
          gif.render()
        }

        gsap.to(positions, {
          delay: 0,
          duration: 1,
          dx: 100,
          dy: 50,
          ease: Linear.easeNone,
          onUpdate: animateCanvas,
          onComplete: complateAnimate,
        })

        // const tl = gsap.timeline({
        //   defaults: {
        //     duration: 0.2,
        //     ease: Linear.easeNone,
        //   },
        //   onUpdate: animateCanvas,
        //   onComplete: complateAnimate,
        // })

        // tl.from(positions, {
        //   dx: 0,
        //   dy: 50,
        // })
        //   .to(positions, {
        //     dx: 25,
        //     dy: 50,
        //   })
        //   .to(positions, {
        //     dx: 50,
        //     dy: 50,
        //   })
        //   .to(positions, {
        //     dx: 75,
        //     dy: 50,
        //   })
        //   .to(
        //     positions,
        //     {
        //       dx: 100,
        //       dy: 50,
        //     },
        //     '<'
        //   )

        gif.on('start', () => {
          console.log('start')
        })

        gif.on('abort', () => {
          console.log('abort')
        })

        gif.on('progress', (percent: number) => {
          console.log('progress', percent)
        })

        gif.on('finished', (blob) => {
          console.log('finished', blob)
          // const url = URL.createObjectURL(blob)
          // const a = document.createElement('a')
          // a.download = 'test.gif'
          // a.href = url
          // a.dispatchEvent(new MouseEvent('click'))
          const reader = new FileReader()
          reader.readAsDataURL(blob)
          reader.onload = () => {
            console.log(reader.result)
            resultImage.value = reader.result as string
          }
        })
      }
    })

    const handleClick = () => {
      console.log(playgroundSvgElement)
    }

    return {
      playgroundSvgElement,
      playgroundCanvasElement,
      handleClick,
      resultImage,
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

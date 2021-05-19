import GIF from 'gif.js'
import gsap from 'gsap'
import { firstValueFrom, fromEvent } from 'rxjs'

import { useStaticConfig } from './useStaticConfig'
import { useImageRender } from './useImageRender'
import { useEffects } from './useEffects'
import { Settings } from '~/store'

const readFilePromise = (blob: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => resolve(reader.result as string))
    reader.addEventListener('error', (err) => reject(err))
    reader.readAsDataURL(blob)
  })
}

const animatePosition = (
  gif: GIF,
  image: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  settings: Settings,
  outputImageWidth: number,
  outputImageHeight: number
) => {
  const positions = [
    { dx: 0, dy: 0 },
    { dx: 0, dy: 0 },
    { dx: 0, dy: 0 },
  ]

  const animateCanvas = () => {
    ctx.clearRect(0, 0, outputImageWidth, outputImageHeight)
    for (const position of positions) {
      ctx.drawImage(image, position.dx, position.dy)
    }

    gif.addFrame(canvas, {
      copy: true,
      // minimum delay limited by browser spec
      delay: 20,
    })
  }

  const complateAnimate = () => {
    gif.render()
  }

  const getGsapSetOptions = (): gsap.TweenVars => {
    let dx: (i: number) => number | undefined
    let dy: (i: number) => number | undefined

    if (settings.animation === 'horizontalScroll') {
      dx = (i: number) => i * outputImageWidth
    } else if (settings.animation === 'verticalScroll') {
      dy = (i: number) => i * outputImageHeight
    }

    return {
      dx: dx!,
      dy: dy!,
    }
  }

  gsap.set(positions, {
    ...getGsapSetOptions(),
  })

  const getGsapToOptions = (): gsap.TweenVars => {
    let dx: number | string = 0
    let dy: number | string = 0

    if (settings.animation === 'horizontalScroll') {
      dx = `-=${outputImageWidth}`
    } else if (settings.animation === 'verticalScroll') {
      dy = `-=${outputImageHeight}`
    }

    return {
      delay: 0,
      duration: 0.6,
      dx,
      dy,
      ease: 'none',
      onUpdate: animateCanvas,
      onComplete: complateAnimate,
    }
  }

  gsap.to(positions, {
    ...getGsapToOptions(),
  })
}

const animateRotation = (
  gif: GIF,
  image: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  _settings: Settings,
  outputImageWidth: number,
  outputImageHeight: number
) => {
  const rotations = {
    angle: 0,
  }

  const animateCanvas = () => {
    ctx.clearRect(0, 0, outputImageWidth, outputImageHeight)
    ctx.drawImage(image, 0, 0)

    ctx.translate(outputImageWidth / 2, outputImageHeight / 2)
    ctx.rotate((rotations.angle * Math.PI) / 180)
    ctx.translate(-outputImageWidth / 2, -outputImageHeight / 2)

    gif.addFrame(canvas, {
      copy: true,
      // minimum delay limited by browser spec
      delay: 20,
    })
  }

  const complateAnimate = () => {
    gif.render()
  }

  const getGsapToOptions = (): gsap.TweenVars => {
    return {
      delay: 0,
      duration: 0.6,
      angle: 30,
      ease: 'none',
      onUpdate: animateCanvas,
      onComplete: complateAnimate,
    }
  }

  gsap.to(rotations, {
    ...getGsapToOptions(),
  })
}

export const useAnimationRenderer = () => {
  const {
    freehandCanvasWidth,
    freehandCanvasHeight,
    outputImageWidth,
    outputImageHeight,
  } = useStaticConfig()
  const { convertSvgToResizedCanvas } = useImageRender()
  const { testEffect } = useEffects()

  const renderWithAnimation = async (svg: SVGElement, settings: Settings) => {
    const gif = new GIF({
      // forever
      repeat: 0,
      // lower is better
      quality: 6,
      workers: 4,
      width: outputImageWidth,
      height: outputImageHeight,
      debug: true,
      /*
       * see: https://github.com/jnordberg/gif.js/pull/77
       * このバグを背景色の調整で目立ちにくくする
       */
      transparent:
        settings.backgroundColor === '#FFFFFFFF' ? null : '#00000000',
      background: settings.strokeColor,
      workerScript: `${
        // gh-pages workaround
        process.env.NODE_ENV === 'production' ? '/freehand-emoji-gen/' : '/'
      }js/gif.worker.js`,
    })

    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')!

    const image = await convertSvgToResizedCanvas(
      svg,
      freehandCanvasWidth,
      freehandCanvasHeight,
      outputImageWidth,
      outputImageHeight
    )

    if (
      settings.animation === 'horizontalScroll' ||
      settings.animation === 'verticalScroll'
    ) {
      animatePosition(
        gif,
        image,
        ctx,
        canvas,
        settings,
        outputImageWidth,
        outputImageHeight
      )
    } else if (settings.animation === 'rotation') {
      animateRotation(
        gif,
        image,
        ctx,
        canvas,
        settings,
        outputImageWidth,
        outputImageHeight
      )
    } else if (settings.animation === 'effectTest') {
      testEffect(
        gif,
        image,
        ctx,
        canvas,
        settings,
        outputImageWidth,
        outputImageHeight
      )
    }

    const result = await firstValueFrom(fromEvent(gif, 'finished'))
    return readFilePromise((result as [Blob, any])[0] as Blob)
  }

  return {
    renderWithAnimation,
  }
}

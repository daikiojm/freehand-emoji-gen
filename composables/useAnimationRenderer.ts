import GIF from 'gif.js'
import { firstValueFrom, fromEvent } from 'rxjs'
import PIXIasType from 'pixi.js'
import type { Sprite } from 'pixi.js'
import type { ColorMatrixFilter } from '@pixi/filter-color-matrix'
import type { ZoomBlurFilter as ZoomBlurFilterType } from '@pixi/filter-zoom-blur'

import { useStaticConfig } from '~/composables/useStaticConfig'
import { useImageRender } from '~/composables/useImageRender'
import { AnimationSpeed, Settings, EffectType } from '~/store'

const readFilePromise = (blob: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => resolve(reader.result as string))
    reader.addEventListener('error', (err) => reject(err))
    reader.readAsDataURL(blob)
  })
}

export const convertMaybeHexaToHex = (maybeHexa: string) => {
  return maybeHexa.length >= 8 ? maybeHexa.slice(0, 7) : maybeHexa
}

export const getAnimationSpeedByType = (type: AnimationSpeed) => {
  switch (type) {
    case 'high': {
      return 60
    }
    case 'middle': {
      return 20
    }
    case 'low': {
      return 12
    }
  }
}

export const renaderAll = (
  gif: GIF,
  image: HTMLCanvasElement,
  settings: Settings,
  outputImageWidth: number,
  outputImageHeight: number
) => {
  const PIXI = require('pixi.js') as typeof PIXIasType
  const app = new PIXI.Application({
    width: outputImageWidth,
    height: outputImageHeight,
    backgroundColor: PIXI.utils.string2hex(
      convertMaybeHexaToHex(settings.backgroundColor)
    ),
    preserveDrawingBuffer: true,
  })

  let sprites: Sprite[] = []
  let sprite: Sprite
  if (
    settings.animation === 'horizontalScroll' ||
    settings.animation === 'verticalScroll'
  ) {
    sprites = Array(3)
      .fill(null)
      .map(() => PIXI.Sprite.from(image))

    for (let i = 0; i < sprites.length; i++) {
      const image = sprites[i]
      image.anchor.set(0.5)

      if (settings.animation === 'horizontalScroll') {
        image.y = app.screen.height / 2
      } else if (settings.animation === 'verticalScroll') {
        image.x = app.screen.width / 2
      }

      switch (i) {
        case 0: {
          if (settings.animation === 'horizontalScroll') {
            image.x = -(image.width / 2)
          } else if (settings.animation === 'verticalScroll') {
            image.y = -(image.height / 2)
          }
          break
        }
        case 1: {
          if (settings.animation === 'horizontalScroll') {
            image.x = image.width / 2
          } else if (settings.animation === 'verticalScroll') {
            image.y = image.height / 2
          }
          break
        }
        case 2: {
          if (settings.animation === 'horizontalScroll') {
            image.x = image.width * 2
          } else if (settings.animation === 'verticalScroll') {
            image.y = image.height * 2
          }
          break
        }
      }

      app.stage.addChild(image)
    }
  } else {
    sprite = PIXI.Sprite.from(image)
    sprite.anchor.set(0.5)
    sprite.x = app.screen.width / 2
    sprite.y = app.screen.height / 2
    app.stage.addChild(sprite)
  }

  const filters: { type: EffectType; filter: PIXIasType.Filter }[] = []

  for (const effect of settings.effect) {
    if (effect !== 'none') {
      if (effect === 'sanfrancisco') {
        const filter = new PIXI.filters.ColorMatrixFilter()
        filters.push({ type: 'sanfrancisco', filter })
      }
      if (effect === 'blur') {
        const filter = new PIXI.filters.BlurFilter()
        filter.blur = 3
        filters.push({ type: 'blur', filter })
      }
      if (effect === 'zoomBlur') {
        const { ZoomBlurFilter } = require('@pixi/filter-zoom-blur') as {
          ZoomBlurFilter: typeof ZoomBlurFilterType
        }
        const filter = new ZoomBlurFilter()
        filter.center = [outputImageWidth / 2, outputImageHeight / 2]
        filter.strength = 0.3
        filters.push({ type: 'blur', filter })
      }
    }

    for (const s of sprites) {
      s.filters = filters.map((f) => f.filter)
    }

    if (sprite! !== undefined) {
      sprite.filters = filters.map((f) => f.filter)
    }
  }

  const fps = getAnimationSpeedByType(settings.animationSpeed)
  const maxFrameCount = 12
  const delay = (1 / fps) * 1000
  let framecount = 0

  const animate = (time: number) => {
    app.ticker.update(time)
    app.renderer.render(app.stage)
    if (framecount < maxFrameCount) {
      requestAnimationFrame(animate)
    }
  }
  animate(performance.now())

  app.ticker.add((_delta) => {
    if (settings.animation === 'horizontalScroll') {
      const move = outputImageWidth / maxFrameCount
      for (const image of sprites) {
        image.x += move
      }
    } else if (settings.animation === 'verticalScroll') {
      const move = outputImageHeight / maxFrameCount
      for (const image of sprites) {
        image.y += move
      }
    } else if (settings.animation === 'rotation') {
      const angle = 360 / maxFrameCount
      sprite.rotation += angle
    }

    for (const f of filters) {
      if (f.type === 'sanfrancisco') {
        const filter = f.filter as ColorMatrixFilter
        filter.contrast(Math.random(), false)
        filter.hue(Math.random() * 360, false)
      }
      if (f.type === 'zoomBlur') {
        const filter = f.filter as ZoomBlurFilterType
        filter.strength = Math.random() / 2
      }
    }

    if (framecount >= maxFrameCount - 1) {
      gif.render()
      app.ticker.stop()
    }

    gif.addFrame(app.view, {
      copy: true,
      delay,
    })

    framecount++
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

  const renderWithAnimation = async (svg: SVGElement, settings: Settings) => {
    const gif = new GIF({
      // forever
      repeat: 0,
      // lower is better
      quality: 1,
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
      background: settings.backgroundColor,
      workerScript: `${
        // gh-pages workaround
        process.env.NODE_ENV === 'production' ? '/freehand-emoji-gen/' : '/'
      }js/gif.worker.js`,
    })

    const newSvg = svg.cloneNode(true) as SVGElement

    // reset background color
    newSvg.style.background = 'none'
    newSvg.style.backgroundColor = 'none'

    const image = await convertSvgToResizedCanvas(
      newSvg,
      freehandCanvasWidth,
      freehandCanvasHeight,
      outputImageWidth,
      outputImageHeight
    )

    renaderAll(gif, image, settings, outputImageWidth, outputImageHeight)

    const result = await firstValueFrom(fromEvent(gif, 'finished'))
    return readFilePromise((result as [Blob, any])[0] as Blob)
  }

  return {
    renderWithAnimation,
  }
}

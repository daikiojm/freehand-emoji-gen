import GIF from 'gif.js'
import { firstValueFrom, fromEvent } from 'rxjs'
import PIXIasType from 'pixi.js'
import tinycolor2 from 'tinycolor2'
import type { Sprite } from 'pixi.js'
import type { ColorMatrixFilter } from '@pixi/filter-color-matrix'
import type { ZoomBlurFilter as ZoomBlurFilterType } from '@pixi/filter-zoom-blur'
import type { GlitchFilter as GlitchFilterType } from '@pixi/filter-glitch'
import type { PixelateFilter as PixelateFilterType } from '@pixi/filter-pixelate'
import type { DropShadowFilter as DropShadowFilterType } from '@pixi/filter-drop-shadow'

import { useStaticConfig } from '~/composables/useStaticConfig'
import { useImageRender } from '~/composables/useImageRender'
import { AnimationSpeed, Settings, EffectType, Mark } from '~/store'

export function getRandomColor() {
  return Math.floor(Math.random() * 16777215).toString(16)
}

function readFilePromise(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => resolve(reader.result as string))
    reader.addEventListener('error', (err) => reject(err))
    reader.readAsDataURL(blob)
  })
}

export function convertMaybeHexaToHex(maybeHexa: string) {
  return maybeHexa.length >= 8 ? maybeHexa.slice(0, 7) : maybeHexa
}

export function getAnimationSpeedByType(type: AnimationSpeed) {
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

export function renaderAll(
  gif: GIF,
  image: HTMLCanvasElement,
  settings: Settings,
  outputImageWidth: number,
  outputImageHeight: number
) {
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
      if (effect === 'sanfrancisco') {
        const filter = new PIXI.filters.ColorMatrixFilter()
        filters.push({ type: 'sanfrancisco', filter })
      }
      if (effect === 'shadow') {
        const { DropShadowFilter } = require('@pixi/filter-drop-shadow') as {
          DropShadowFilter: typeof DropShadowFilterType
        }
        const filter = new DropShadowFilter()
        filter.distance = 0
        filter.blur = 4
        filters.push({ type: 'shadow', filter })
      }
      if (effect === 'glitch') {
        const { GlitchFilter } = require('@pixi/filter-glitch') as {
          GlitchFilter: typeof GlitchFilterType
        }
        const filter = new GlitchFilter()
        filter.slices = 20
        filters.push({ type: 'glitch', filter })
      }
      if (effect === 'mosaic') {
        const { PixelateFilter } = require('@pixi/filter-pixelate') as {
          PixelateFilter: typeof PixelateFilterType
        }
        const filter = new PixelateFilter()
        filters.push({ type: 'mosaic', filter })
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
      if (f.type === 'shadow') {
        const filter = f.filter as DropShadowFilterType
        const color = tinycolor2(`hsv(${Math.floor(360 * Math.random())} 1 1)`)
        filter.color = PIXI.utils.string2hex(color.toHex())
      }
      if (f.type === 'glitch') {
        const filter = f.filter as GlitchFilterType
        filter.seed = Math.random()
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

/*
 * see: https://github.com/jnordberg/gif.js/pull/77
 * このバグを背景色の調整で目立ちにくくする
 */
function getGifEncorderTransparent(settings: Settings) {
  let strokeColor: string | null = settings.strokeColor
  let transparent: string | null = null

  if (settings.backgroundColor === '#00000000') {
    transparent = '00000000'

    if (settings.strokeColor === '#000000') {
      strokeColor = '#030303'
    }
  }

  return { strokeColor, transparent }
}

export const useAnimationRenderer = () => {
  const {
    freehandCanvasWidth,
    freehandCanvasHeight,
    outputImageWidth,
    outputImageHeight,
  } = useStaticConfig()
  const { convertPathToResizedCanvas } = useImageRender()

  const renderWithAnimation = async (paths: Mark[], settings: Settings) => {
    const { strokeColor, transparent } = getGifEncorderTransparent(settings)
    const gif = new GIF({
      // forever
      repeat: 0,
      // lower is better
      quality: 1,
      workers: 4,
      width: outputImageWidth,
      height: outputImageHeight,
      debug: true,
      transparent,
      background: settings.backgroundColor,
      workerScript: `${
        // gh-pages workaround
        process.env.NODE_ENV === 'production' ? '/freehand-emoji-gen/' : '/'
      }js/gif.worker.js`,
    })

    const image = await convertPathToResizedCanvas(
      paths,
      freehandCanvasWidth,
      freehandCanvasHeight,
      outputImageWidth,
      outputImageHeight,
      { ...settings, strokeColor }
    )

    renaderAll(gif, image, settings, outputImageWidth, outputImageHeight)

    const result = await firstValueFrom(fromEvent(gif, 'finished'))
    return readFilePromise((result as [Blob, any])[0] as Blob)
  }

  return {
    renderWithAnimation,
  }
}

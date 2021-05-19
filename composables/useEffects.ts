import GIF from 'gif.js'
import type PIXIasType from 'pixi.js'

import { Settings } from '~/store'

// for pixi.js animation and effects
const testEffect = (
  gif: GIF,
  image: HTMLCanvasElement,
  _ctx: CanvasRenderingContext2D,
  _canvas: HTMLCanvasElement,
  _settings: Settings,
  outputImageWidth: number,
  outputImageHeight: number
) => {
  const PIXI = require('pixi.js') as typeof PIXIasType
  const app = new PIXI.Application({
    width: outputImageWidth,
    height: outputImageHeight,
    backgroundColor: +_settings.backgroundColor.slice(1),
    preserveDrawingBuffer: true,
  })
  const imageAsSprite = PIXI.Sprite.from(image)
  imageAsSprite.anchor.set(0.5)
  imageAsSprite.x = app.screen.width / 2
  imageAsSprite.y = app.screen.width / 2
  app.stage.addChild(imageAsSprite)

  const filter = new PIXI.filters.ColorMatrixFilter()
  imageAsSprite.filters = [filter]
  app.ticker.maxFPS = 12
  let framecount = 0
  app.ticker.speed = 2

  app.ticker.add((delta) => {
    imageAsSprite.rotation += 0.1 * delta
    const { matrix } = filter
    const count = framecount

    matrix[1] = Math.sin(count) * 3
    matrix[2] = Math.cos(count)
    matrix[3] = Math.cos(count) * 1.5
    matrix[4] = Math.sin(count / 3) * 2
    matrix[5] = Math.sin(count / 2)
    matrix[6] = Math.sin(count / 4)

    const data = app.view.toDataURL('image/png')
    console.log(data)

    if (framecount >= 12) {
      app.ticker.stop()
      gif.render()
    }

    // if (framecount !== 0) {
    gif.addFrame(app.view, {
      copy: true,
      delay: 100,
    })
    // }

    framecount++
  })
}

const testEffect2 = (
  gif: GIF,
  image: HTMLCanvasElement,
  _ctx: CanvasRenderingContext2D,
  _canvas: HTMLCanvasElement,
  _settings: Settings,
  outputImageWidth: number,
  outputImageHeight: number
) => {
  const PIXI = require('pixi.js') as typeof PIXIasType
  const app = new PIXI.Application({
    width: outputImageWidth,
    height: outputImageHeight,
    backgroundColor: +_settings.backgroundColor.slice(1),
    preserveDrawingBuffer: true,
  })
  const imageAsSprite = PIXI.Sprite.from(image)
  imageAsSprite.anchor.set(0.5)
  imageAsSprite.x = app.screen.width / 2
  imageAsSprite.y = app.screen.width / 2
  app.stage.addChild(imageAsSprite)

  const imageAsSprite2 = PIXI.Sprite.from(image)
  imageAsSprite2.anchor.set(0.5)
  imageAsSprite2.x = 0
  imageAsSprite2.y = app.screen.width / 2
  app.stage.addChild(imageAsSprite2)

  const imageAsSprite3 = PIXI.Sprite.from(image)
  imageAsSprite3.anchor.set(0.5)
  imageAsSprite3.x = app.screen.width
  imageAsSprite3.y = app.screen.width / 2
  app.stage.addChild(imageAsSprite3)

  app.ticker.maxFPS = 12
  let framecount = 0
  app.ticker.speed = 2

  app.ticker.autoStart = false
  app.ticker.stop()

  const animate = (time: number) => {
    app.ticker.update(time)
    app.renderer.render(app.stage)
    requestAnimationFrame(animate)
  }
  animate(performance.now())

  app.ticker.add((_delta) => {
    // imageAsSprite.rotation += 0.1 * delta
    imageAsSprite.visible = false
    imageAsSprite2.visible = false
    imageAsSprite3.visible = false

    imageAsSprite.x -= outputImageWidth / 12
    imageAsSprite2.x -= outputImageWidth / 12
    imageAsSprite3.x -= outputImageWidth / 12

    if (framecount >= 12) {
      app.ticker.stop()
      gif.render()
    }

    gif.addFrame(app.view, {
      copy: true,
      delay: 100,
    })

    framecount++
  })
}

export const useEffects = () => {
  return {
    testEffect,
    testEffect2,
  }
}

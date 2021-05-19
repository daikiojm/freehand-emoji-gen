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

export const useEffects = () => {
  return {
    testEffect,
  }
}

import getStroke, { StrokeOptions } from 'perfect-freehand'
import { get } from '@vueuse/core'

import { useStaticConfig } from './useStaticConfig'
import { getSvgPathFromStroke } from './useSvgStroke'

import { Settings, Mark } from '~/store'

function loadImagePromise(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.addEventListener('load', () => resolve(image))
    image.addEventListener('error', (err) => reject(err))
    image.src = src
  })
}

function getPath2dFromMark(mark: Mark, strokeOptions: StrokeOptions) {
  return new Path2D(
    getSvgPathFromStroke(
      getStroke(mark.points, {
        size: strokeOptions.size,
        thinning: strokeOptions.thinning,
        smoothing: strokeOptions.smoothing,
        streamline: strokeOptions.streamline,
        simulatePressure: mark.type !== 'pen',
      })
    )
  )
}

async function convertPathToResizedCanvas(
  paths: Mark[],
  canvasWidth: number,
  canvasHeight: number,
  outputWidth: number,
  outputHeight: number,
  settings: Settings,
  fillBackground = false
) {
  const canvas = document.createElement('canvas')
  canvas.width = canvasWidth
  canvas.height = canvasHeight

  const ctx = canvas.getContext('2d')

  ctx?.translate(
    -(canvasWidth * (settings.zoom - 1)) / 2,
    -(canvasWidth * (settings.zoom - 1)) / 2
  )
  ctx?.scale(settings.zoom, settings.zoom)

  for (const p of paths) {
    const path2d = getPath2dFromMark(p, get(settings))
    ctx!.fillStyle = settings.strokeColor
    ctx?.fill(path2d)
  }

  const imageStr = canvas.toDataURL('image/png')

  const croppedImage = await loadImagePromise(imageStr)
  const croppedCanvas = document.createElement('canvas')
  croppedCanvas.width = outputHeight
  croppedCanvas.height = outputWidth

  const croppedCtx = croppedCanvas.getContext('2d')

  if (fillBackground) {
    croppedCtx!.fillStyle = settings.backgroundColor
    croppedCtx?.fillRect(0, 0, outputWidth, outputHeight)
  }

  croppedCtx?.drawImage(
    croppedImage,
    0,
    0,
    canvasWidth,
    canvasHeight,
    0,
    0,
    outputWidth,
    outputHeight
  )

  return croppedCanvas
}

export const useImageRender = () => {
  const {
    freehandCanvasWidth,
    freehandCanvasHeight,
    outputImageWidth,
    outputImageHeight,
  } = useStaticConfig()

  const renderImage = async (path: Mark[], settings: Settings) => {
    const canvas = await convertPathToResizedCanvas(
      path,
      freehandCanvasWidth,
      freehandCanvasHeight,
      outputImageWidth,
      outputImageHeight,
      settings,
      true
    )

    return canvas.toDataURL(`image/png`)
  }

  return {
    convertPathToResizedCanvas,
    renderImage,
  }
}

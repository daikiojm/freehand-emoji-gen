import { useStaticConfig } from './useStaticConfig'

import { Settings } from '~/store'

const loadImagePromise = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.addEventListener('load', () => resolve(image))
    image.addEventListener('error', (err) => reject(err))
    image.src = src
  })
}

const convertSvgToResizedCanvas = async (
  svg: SVGElement,
  canvasWidth: number,
  canvasHeight: number,
  outputWidth: number,
  outputHeight: number,
  zoom = 1
) => {
  const svgData = new XMLSerializer().serializeToString(svg)
  const canvas = document.createElement('canvas')
  canvas.width = canvasWidth
  canvas.height = canvasHeight

  const ctx = canvas.getContext('2d')
  const src =
    'data:image/svg+xml;charset=utf-8;base64,' +
    btoa(unescape(encodeURIComponent(svgData)))
  const image = await loadImagePromise(src)

  ctx?.drawImage(
    image,
    0,
    0,
    canvasWidth,
    canvasHeight,
    0,
    0,
    outputWidth,
    outputHeight
  )

  const imageStr = canvas.toDataURL('image/png')

  const croppedImage = await loadImagePromise(imageStr)
  const croppedCanvas = document.createElement('canvas')
  croppedCanvas.width = outputHeight
  croppedCanvas.height = outputWidth

  const croppedCtx = croppedCanvas.getContext('2d')
  croppedCtx?.drawImage(
    croppedImage,
    0,
    0,
    outputWidth,
    outputHeight,
    (-outputWidth * (zoom - 1)) / 2,
    (-outputHeight * (zoom - 1)) / 2,
    outputWidth * zoom,
    outputHeight * zoom
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

  const renderPngFromSvg = async (svg: SVGElement, settings: Settings) => {
    const newSvg = svg.cloneNode(true) as SVGElement

    if (settings.backgroundColor === '#00000000') {
      newSvg.style.background = 'none'
      newSvg.style.backgroundColor = 'none'
    }

    const canvas = await convertSvgToResizedCanvas(
      newSvg,
      freehandCanvasWidth,
      freehandCanvasHeight,
      outputImageWidth,
      outputImageHeight,
      settings.zoom
    )

    const croppedImageStr = canvas.toDataURL(`image/png`)

    return croppedImageStr
  }

  return {
    convertSvgToResizedCanvas,
    renderPngFromSvg,
  }
}

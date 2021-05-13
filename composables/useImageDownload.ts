import { useStaticConfig } from './useStaticConfig'
import { useStore } from '~/store/index'

const loadImagePromise = (src: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const image = new Image()
    image.addEventListener('load', () => resolve(image))
    image.addEventListener('error', (err) => reject(err))
    image.src = src
  })

export const useImageDownload = () => {
  const {
    freehandCanvasWidth,
    freehandCanvasHeight,
    outputImageWidth,
    outputImageHeight,
    outputImageExtension,
    outputImageDefaultName,
  } = useStaticConfig()
  const { downloadFileName } = useStore()

  const downloadPngFromSvg = async (svg: SVGElement) => {
    const svgData = new XMLSerializer().serializeToString(svg)
    const canvas = document.createElement('canvas')
    canvas.width = freehandCanvasWidth
    canvas.height = freehandCanvasHeight

    const ctx = canvas.getContext('2d')
    const src =
      'data:image/svg+xml;charset=utf-8;base64,' +
      btoa(unescape(encodeURIComponent(svgData)))
    const image = await loadImagePromise(src)

    ctx?.drawImage(
      image,
      0,
      0,
      freehandCanvasWidth,
      freehandCanvasHeight,
      0,
      0,
      freehandCanvasHeight,
      freehandCanvasHeight
    )
    const imageStr = canvas.toDataURL('image/png')

    const croppedImage = await loadImagePromise(imageStr)
    const croppedCanvas = document.createElement('canvas')
    croppedCanvas.width = outputImageWidth
    croppedCanvas.height = outputImageHeight

    const croppedCtx = croppedCanvas.getContext('2d')
    croppedCtx?.drawImage(
      croppedImage,
      0,
      0,
      outputImageWidth,
      outputImageHeight,
      0,
      0,
      outputImageWidth,
      outputImageHeight
    )
    const a = document.createElement('a')
    const croppedImageStr = croppedCanvas.toDataURL(
      `image/${outputImageExtension}`
    )
    a.href = croppedImageStr
    a.setAttribute(
      'download',
      `${
        downloadFileName.value || outputImageDefaultName
      }.${outputImageExtension}`
    )
    a.dispatchEvent(new MouseEvent('click'))
  }

  return {
    downloadPngFromSvg,
  }
}

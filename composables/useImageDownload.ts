import { useStaticConfig } from './useStaticConfig'
import { useStore } from '~/store'

export const useImageDownload = () => {
  const { outputImageDefaultName } = useStaticConfig()
  const { downloadFileName, download } = useStore()

  const downloadPngImage = () => {
    if (!download.value.resultImage) {
      throw new Error('result image not exist')
    }

    const linkElement = document.createElement('a')

    linkElement.href = download.value.resultImage
    linkElement.setAttribute(
      'download',
      `${downloadFileName.value || outputImageDefaultName}.png`
    )

    linkElement.dispatchEvent(new MouseEvent('click'))
  }

  const downloadGifImage = () => {
    if (!download.value.resultImage) {
      throw new Error('result image not exist')
    }

    const linkElement = document.createElement('a')

    linkElement.href = download.value.resultImage
    linkElement.setAttribute(
      'download',
      `${downloadFileName.value || outputImageDefaultName}.gif`
    )

    linkElement.dispatchEvent(new MouseEvent('click'))
  }

  return {
    downloadPngImage,
    downloadGifImage,
  }
}

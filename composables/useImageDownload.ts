import { useStaticConfig } from './useStaticConfig'
import { useStore } from '~/store'

export const useImageDownload = () => {
  const { outputImageExtension, outputImageDefaultName } = useStaticConfig()
  const { downloadFileName, download } = useStore()

  const downloadPngImage = () => {
    if (!download.value.resultImage) {
      throw new Error('result image not exist')
    }

    const linkElement = document.createElement('a')

    linkElement.href = download.value.resultImage
    linkElement.setAttribute(
      'download',
      `${
        downloadFileName.value || outputImageDefaultName
      }.${outputImageExtension}`
    )

    linkElement.dispatchEvent(new MouseEvent('click'))
  }

  return {
    downloadPngImage,
  }
}

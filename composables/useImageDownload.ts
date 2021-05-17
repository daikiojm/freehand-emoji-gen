import { useStaticConfig } from './useStaticConfig'
import { useStore } from '~/store'

export const useImageDownload = () => {
  const { outputImageDefaultName } = useStaticConfig()
  const { downloadFileName, download, settings } = useStore()

  const downloadImage = () => {
    if (!download.value.resultImage) {
      throw new Error('result image not exist')
    }

    const linkElement = document.createElement('a')

    const extention = settings.value.animation ? 'gif' : 'png'

    linkElement.href = download.value.resultImage
    linkElement.setAttribute(
      'download',
      `${downloadFileName.value || outputImageDefaultName}.${extention}`
    )

    linkElement.dispatchEvent(new MouseEvent('click'))
  }

  return {
    downloadImage,
  }
}

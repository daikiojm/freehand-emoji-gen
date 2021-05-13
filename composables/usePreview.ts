import { ref } from '@nuxtjs/composition-api'

export const usePreview = () => {
  const previewImage = ref<string>('')
  const animationImage = ref<string>('')

  return {
    previewImage,
    animationImage,
  }
}

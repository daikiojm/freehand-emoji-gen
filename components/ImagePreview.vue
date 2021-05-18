<template>
  <div class="d-flex justify-center">
    <picture class="preview-image mr-2">
      <img
        v-if="showImgElement"
        :height="outputImageHeight"
        :width="outputImageWidth"
        :src="image"
      />
    </picture>
    <picture class="preview-image ml-2 --dark">
      <img
        v-if="showImgElement"
        :height="outputImageHeight"
        :width="outputImageWidth"
        :src="image"
      />
    </picture>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  ref,
  onMounted,
  nextTick,
} from '@nuxtjs/composition-api'

import { useStaticConfig } from '~/composables/useStaticConfig'

export default defineComponent({
  props: {
    image: {
      type: String as PropType<string>,
      default: '',
    },
  },
  setup() {
    const { outputImageWidth, outputImageHeight } = useStaticConfig()

    const showImgElement = ref<boolean>(false)

    onMounted(async () => {
      await nextTick()
      showImgElement.value = true
    })

    return {
      outputImageWidth,
      outputImageHeight,
      showImgElement,
    }
  },
})
</script>

<style scoped lang="scss">
.preview-image {
  img {
    border: thin solid rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    background-color: #fff;
  }

  &.--dark {
    img {
      background-color: #121212;
    }
  }
}
</style>

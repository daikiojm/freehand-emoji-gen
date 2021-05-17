import { InjectionKey, inject, computed } from '@nuxtjs/composition-api'
import {
  debouncedWatch,
  useLocalStorage,
  toRefs,
  Fn,
  get,
  set,
} from '@vueuse/core'
import { StrokeOptions } from 'perfect-freehand'

import { useStaticConfig } from '~/composables/useStaticConfig'
import { useImageRender } from '~/composables/useImageRender'
import { useSvgRef } from '~/composables/useSvgRef'
import { useAnimationRenderer } from '~/composables/useAnimationRenderer'

export type Mark = {
  type: string
  points: number[][]
}

export type Snackbar = {
  show: boolean
  message: string
  type: 'info' | 'success' | 'warning' | 'error'
  dismissTimerRef?: Fn | null
}

export const AnimationTypes = ['none', 'horizontalScroll', 'verticalScroll', 'rotation'] as const
export type AnimationType = typeof AnimationTypes[number]

export type State = {
  ui: {
    darkMode: boolean
    snackbar: Snackbar
  }
  settings: StrokeOptions & {
    // hex(a)
    strokeColor: string
    // hex(a)
    backgroundColor: string
    activeColorPicker: 'stroke' | 'background'
    animation: AnimationType
  }
  data: {
    currentMark: Mark
    marks: Mark[]
  }
  download: {
    resultImage: string
    useCustomFileName: boolean
    fileName: string | null
  }
}

export type Settings = State['settings']
export type Data = State['data']

const defaultSettings: Settings = {
  // prefect-freehand StrokeOptions
  size: 24,
  thinning: 0.75,
  smoothing: 0.5,
  streamline: 0.5,
  // application options
  strokeColor: '#000000FF',
  backgroundColor: '#FFFFFFFF',
  activeColorPicker: 'stroke',
  animation: 'none',
}

const defaultData: Data = {
  currentMark: {
    type: '',
    points: [],
  },
  marks: [],
}

export const store = () => {
  const { localStorageKey } = useStaticConfig()
  const { renderPngFromSvg } = useImageRender()
  const { svgElement } = useSvgRef()
  const { renderWithAnimation } = useAnimationRenderer()

  const state = useLocalStorage<State>(
    localStorageKey,
    {
      ui: {
        darkMode: false,
        snackbar: {
          show: false,
          message: '',
          type: 'info',
        },
      },
      settings: { ...defaultSettings },
      data: { ...defaultData },
      download: {
        resultImage: '',
        useCustomFileName: false,
        fileName: null,
      },
    },
    { deep: true, listenToStorageChanges: true }
  )

  const { ui, settings, data, download } = toRefs(state)

  const downloadFileName = computed(
    () => (get(download).useCustomFileName && get(download).fileName) || ''
  )

  const resetData = () => {
    set(data, { ...defaultData })
  }

  const resetSettings = () => {
    set(settings, { ...defaultSettings })
  }

  const setCurrentMark = (mark: Mark) => {
    data.value.currentMark = {
      type: mark.type,
      points: mark.points,
    }
  }

  const updateCurrentMark = (mark: Mark) => {
    data.value.currentMark.points = [
      ...data.value.currentMark.points,
      ...mark.points,
    ]
  }

  const endMark = () => {
    data.value.marks = [
      ...data.value.marks,
      { ...state.value.data.currentMark },
    ]
  }

  const settingsHasChanged = computed(
    () => JSON.stringify(get(settings)) !== JSON.stringify(defaultSettings)
  )

  const dataHasChanged = computed(
    () => JSON.stringify(get(data)) !== JSON.stringify(defaultData)
  )

  debouncedWatch(
    [settings, data],
    async () => {
      if (get(settings).animation  === 'none') {
        const image = await renderPngFromSvg(get(svgElement)!)
        download.value.resultImage = image
      } else {
        download.value.resultImage = await renderWithAnimation(
          get(svgElement)!,
          get(settings)
        )
      }
    },
    { deep: true, debounce: 200 }
  )

  return {
    ui,
    settings,
    data,
    download,
    resetData,
    resetSettings,
    setCurrentMark,
    updateCurrentMark,
    endMark,
    settingsHasChanged,
    dataHasChanged,
    downloadFileName,
  }
}

type StoreType = ReturnType<typeof store>

export const StoreKey: InjectionKey<StoreType> = Symbol('State')

export const useStore = () => {
  const store = inject(StoreKey)

  if (!store) {
    throw new Error(`${StoreKey} is not provided`)
  }
  return store
}

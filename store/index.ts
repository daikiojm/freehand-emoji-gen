import {
  InjectionKey,
  inject,
  reactive,
  computed,
} from '@nuxtjs/composition-api'
import {
  debouncedWatch,
  toRefs,
  Fn,
  get,
  set,
  useManualRefHistory,
} from '@vueuse/core'
import { StrokeOptions } from 'perfect-freehand'

import { useImageRender } from '~/composables/useImageRender'
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

export const AnimationTypes = [
  'none',
  'horizontalScroll',
  'verticalScroll',
  'rotation',
] as const

export type AnimationType = typeof AnimationTypes[number]

export const EffectTypes = [
  'none',
  'sanfrancisco',
  'shadow',
  'glitch',
  'mosaic',
  'blur',
  'zoomBlur',
] as const

export type EffectType = typeof EffectTypes[number]

export const AnimationSpeeds = ['high', 'middle', 'low'] as const

export type AnimationSpeed = typeof AnimationSpeeds[number]

export type State = {
  ui: {
    darkMode: boolean
    snackbar: Snackbar
    helpDialog: boolean
  }
  settings: StrokeOptions & {
    // hex(a)
    strokeColor: string
    // hex(a)
    backgroundColor: string
    activeColorPicker: 'stroke' | 'background'
    zoom: number
    animation: AnimationType
    effect: EffectType[]
    animationSpeed: AnimationSpeed
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
  strokeColor: '#000000',
  backgroundColor: '#FFFFFFFF',
  activeColorPicker: 'stroke',
  zoom: 1,
  animation: 'none',
  effect: ['none'],
  animationSpeed: 'middle',
}

const defaultData: Data = {
  currentMark: {
    type: '',
    points: [],
  },
  marks: [],
}

export const store = () => {
  const { renderImage } = useImageRender()
  const { renderWithAnimation } = useAnimationRenderer()

  const state = reactive<State>({
    ui: {
      darkMode: false,
      snackbar: {
        show: false,
        message: '',
        type: 'info',
      },
      helpDialog: false,
    },
    settings: { ...defaultSettings },
    data: { ...defaultData },
    download: {
      resultImage: '',
      useCustomFileName: false,
      fileName: null,
    },
  })

  const { ui, settings, data, download } = toRefs(state)

  const { commit, undo, redo, canUndo, canRedo, clear } = useManualRefHistory(
    data,
    {
      clone: true,
      capacity: 20,
    }
  )

  const openHelpDialog = () => (ui.value.helpDialog = true)
  const closeHelpDialog = () => (ui.value.helpDialog = false)

  const downloadFileName = computed(
    () => (get(download).useCustomFileName && get(download).fileName) || ''
  )

  const resetData = () => {
    set(data, { ...defaultData })
    clear()
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
      ...get(data).currentMark.points,
      ...mark.points,
    ]
  }

  const endMark = () => {
    data.value.marks = [...get(data).marks, { ...get(data).currentMark }]
    commit()
  }

  const undoMark = () => undo()

  const redoMark = () => redo()

  const settingsHasChanged = computed(
    () => JSON.stringify(get(settings)) !== JSON.stringify(defaultSettings)
  )

  const dataHasChanged = computed(
    () => JSON.stringify(get(data)) !== JSON.stringify(defaultData)
  )

  const canUndoMark = canUndo
  const canRedoMark = canRedo

  debouncedWatch(
    [settings, data],
    async () => {
      if (
        get(settings).animation === 'none' &&
        JSON.stringify(get(settings).effect) === JSON.stringify(['none'])
      ) {
        const image = await renderImage(get(data.value.marks), get(settings))
        download.value.resultImage = image
      } else {
        download.value.resultImage = await renderWithAnimation(
          get(data.value.marks),
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
    openHelpDialog,
    closeHelpDialog,
    resetData,
    resetSettings,
    setCurrentMark,
    updateCurrentMark,
    endMark,
    undoMark,
    redoMark,
    settingsHasChanged,
    dataHasChanged,
    downloadFileName,
    canUndoMark,
    canRedoMark,
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

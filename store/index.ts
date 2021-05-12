import {
  ref,
  InjectionKey,
  inject,
  computed,
  WatchStopHandle,
} from '@nuxtjs/composition-api'
import { debouncedWatch, useLocalStorage, toRefs, Fn } from '@vueuse/core'
import { StrokeOptions } from 'perfect-freehand'

import { useStaticConfig } from '~/composables/useStaticConfig'

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
  }
  data: {
    currentMark: Mark
    marks: Mark[]
  }
  download: {
    useCustomFileName: boolean
    fileName: string | null
  }
}

const defaultSettings: State['settings'] = {
  // prefect-freehand StrokeOptions
  size: 24,
  thinning: 0.75,
  smoothing: 0.5,
  streamline: 0.5,
  // application options
  strokeColor: '#000000FF',
  backgroundColor: '#FFFFFFFF',
  activeColorPicker: 'stroke',
}

const defaultData: State['data'] = {
  currentMark: {
    type: '',
    points: [],
  },
  marks: [],
}

export const store = () => {
  const { localStorageKey } = useStaticConfig()

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
        useCustomFileName: false,
        fileName: null,
      },
    },
    { deep: true, listenToStorageChanges: true }
  )

  const unsubscribeOnUpdate = ref<WatchStopHandle>(() => undefined)

  const downloadFileName = computed(
    () =>
      (state.value.download.useCustomFileName &&
        state.value.download.fileName) ||
      ''
  )

  const resetData = () => {
    state.value.data = { ...defaultData }
  }

  const resetSettings = () => {
    state.value.settings = { ...defaultSettings }
  }

  const setCurrentMark = (mark: Mark) => {
    state.value.data.currentMark = {
      type: mark.type,
      points: mark.points,
    }
  }

  const updateCurrentMark = (mark: Mark) => {
    state.value.data.currentMark.points = [
      ...state.value.data.currentMark.points,
      ...mark.points,
    ]
  }

  const endMark = () => {
    state.value.data.marks = [
      ...state.value.data.marks,
      { ...state.value.data.currentMark },
    ]
  }

  const settingsHasChanged = computed(
    () =>
      JSON.stringify(state.value.settings) !== JSON.stringify(defaultSettings)
  )

  const dataHasChanged = computed(
    () => JSON.stringify(state.value.data) !== JSON.stringify(defaultData)
  )

  const onUpdate = (
    callbackFn: (state: State) => void,
    options?: { debounce: number }
  ) => {
    unsubscribeOnUpdate.value = debouncedWatch(
      state.value,
      (data: State) => {
        callbackFn(data)
      },
      { debounce: options?.debounce || 100 }
    )
  }

  return {
    ...toRefs(state),
    onUpdate,
    unsubscribeOnUpdate,
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

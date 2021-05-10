import {
  reactive,
  toRefs,
  InjectionKey,
  inject,
  computed,
} from '@nuxtjs/composition-api'
import { StrokeOptions } from 'perfect-freehand'

type Mark = {
  type: string
  points: number[][]
}

type State = {
  ui: {
    darkMode: boolean
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
  const state = reactive<State>({
    ui: {
      darkMode: false,
    },
    settings: { ...defaultSettings },
    data: { ...defaultData },
  })

  const resetData = () => {
    state.data = { ...defaultData }
  }

  const resetSettings = () => {
    state.settings = { ...defaultSettings }
  }

  const setCurrentMark = (mark: Mark) => {
    state.data.currentMark = {
      type: mark.type,
      points: mark.points,
    }
  }

  const updateCurrentMark = (mark: Mark) => {
    state.data.currentMark.points = [
      ...state.data.currentMark.points,
      ...mark.points,
    ]
  }

  const endMark = () => {
    state.data.marks = [...state.data.marks, { ...state.data.currentMark }]
  }

  const settingsHasChanged = computed(
    () => JSON.stringify(state.settings) !== JSON.stringify(defaultSettings)
  )

  const dataHasChanged = computed(
    () => JSON.stringify(state.data) !== JSON.stringify(defaultData)
  )

  return {
    ...toRefs(state),
    resetData,
    resetSettings,
    setCurrentMark,
    updateCurrentMark,
    endMark,
    settingsHasChanged,
    dataHasChanged,
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

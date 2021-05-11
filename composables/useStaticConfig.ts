type AppStrokeOption = {
  title: string
  key: string
  step: number
  min: number
  max: number
}

const strokeOptions: AppStrokeOption[] = [
  {
    title: 'lineSize',
    key: 'size',
    step: 0,
    min: 1,
    max: 50,
  },
  {
    title: 'option1',
    key: 'thinning',
    step: 0,
    min: -1,
    max: 1,
  },
  {
    title: 'option2',
    key: 'smoothing',
    step: 0,
    min: 0,
    max: 1,
  },
  {
    title: 'option3',
    key: 'streamline',
    step: 0,
    min: 0,
    max: 1,
  },
]

const baseConfig = {
  localStorageKey: 'freehand-emoji-gen',
  freehandCanvasWidth: 500,
  freehandCanvasHeight: 500,
  outputImageWidth: 128,
  outputImageHeight: 128,
  outputImageExtension: 'png',
  outputImageDefaultName: 'image_freehand',
  swatches: [
    ['#000000FF'],
    ['#FFFFFFFF'],
    ['#3AB0C7'],
    ['#38BA91'],
    ['#EC71A1'],
    ['#EAA822'],
    ['#1111FF'],
    ['#00BB00'],
    ['#FF0000'],
    ['#00000000'],
  ],
  strokeOptions,
} as const

export const useStaticConfig = () => {
  return {
    ...baseConfig,
    strokeOptions,
  }
}

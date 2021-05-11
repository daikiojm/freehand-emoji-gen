import { computed } from '@nuxtjs/composition-api'
import getStroke from 'perfect-freehand'

import { useStore } from '~/store'

// Create SVG path data using the points from perfect-freehand.
const getSvgPathFromStroke = (stroke: number[][]) => {
  const d: (number | string)[] = []

  if (stroke.length < 3) {
    return ''
  }

  let p0 = stroke[stroke.length - 3]
  let p1 = stroke[stroke.length - 2]

  d.push('M', p0[0], p0[1], 'Q')

  for (let i = 0; i < stroke.length; i++) {
    d.push(p0[0], p0[1], (p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2)
    p0 = p1
    p1 = stroke[i]
  }

  d.push('Z')

  return d.join(' ')
}

export const useSvgStroke = () => {
  const { state } = useStore()

  const strokes = computed(() => {
    if (
      state.value.data.marks.length < 1 &&
      state.value.data.currentMark.points.length < 1
    ) {
      return []
    }

    return [...state.value.data.marks, state.value.data.currentMark].map(
      (mark) =>
        getSvgPathFromStroke(
          getStroke(mark.points, {
            size: state.value.settings.size,
            thinning: state.value.settings.thinning,
            smoothing: state.value.settings.smoothing,
            streamline: state.value.settings.streamline,
            simulatePressure: mark.type !== 'pen',
          })
        )
    )
  })

  return {
    strokes,
  }
}

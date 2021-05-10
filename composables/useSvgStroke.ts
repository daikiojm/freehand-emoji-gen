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
  const { data, settings } = useStore()

  const strokes = computed(() => {
    if (
      data.value.marks.length < 1 &&
      data.value.currentMark.points.length < 1
    ) {
      return []
    }

    return [...data.value.marks, data.value.currentMark].map((mark) =>
      getSvgPathFromStroke(
        getStroke(mark.points, {
          size: settings.value.size,
          thinning: settings.value.thinning,
          smoothing: settings.value.smoothing,
          streamline: settings.value.streamline,
          simulatePressure: mark.type !== 'pen',
        })
      )
    )
  })

  return {
    strokes,
  }
}

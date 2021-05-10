import { useStore } from '~/store'

export const useEvents = () => {
  const { setCurrentMark, updateCurrentMark, endMark } = useStore()

  const handlePointerDown = (e: PointerEvent) => {
    e.preventDefault()
    setCurrentMark({
      type: e.pointerType,
      points: [[e.offsetX, e.offsetY, e.pressure]],
    })
  }

  const handlePointerMove = (e: PointerEvent) => {
    e.preventDefault()
    if (e.buttons === 1) {
      updateCurrentMark({
        type: e.pointerType,
        points: [[e.offsetX, e.offsetY, e.pressure]],
      })
    }
  }

  const handlePointerUp = (e: PointerEvent) => {
    e.preventDefault()
    endMark()
  }

  return {
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
  }
}

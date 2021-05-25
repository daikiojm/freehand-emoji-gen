import { useStore } from '~/store'

interface PointerEventEx extends PointerEvent {
  currentTarget: Element
}

export const useEvents = () => {
  const { setCurrentMark, updateCurrentMark, endMark } = useStore()

  const handlePointerDown = (e: PointerEventEx) => {
    e.preventDefault()
    e.currentTarget.setPointerCapture(e.pointerId)
    setCurrentMark({
      type: e.pointerType,
      points: [[e.offsetX, e.offsetY, e.pressure]],
    })
  }

  const handlePointerMove = (e: PointerEventEx) => {
    e.preventDefault()
    if (e.buttons === 1) {
      updateCurrentMark({
        type: e.pointerType,
        points: [[e.offsetX, e.offsetY, e.pressure]],
      })
    }
  }

  const handlePointerUp = (e: PointerEventEx) => {
    e.preventDefault()
    e.currentTarget.releasePointerCapture(e.pointerId)
    endMark()
  }

  return {
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
  }
}

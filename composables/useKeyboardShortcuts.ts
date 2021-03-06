import { useMagicKeys, whenever, or, and } from '@vueuse/core'

import { useStore } from '~/store'

export const useKeyboardShortcuts = () => {
  const { meta, ctrl, shift, z, y, slash, escape } = useMagicKeys()

  const {
    canUndoMark,
    canRedoMark,
    undoMark,
    redoMark,
    ui,
    openHelpDialog,
    closeHelpDialog,
  } = useStore()

  // undo: ctrl + z || command + z
  // bug: https://github.com/vueuse/vueuse/issues/491
  // hint: https://github.com/jaywcjlove/hotkeys/blob/master/src/index.js#L74-L95
  whenever(and(or(meta, ctrl), z), () => {
    if (canUndoMark) {
      undoMark()
    }
  })

  // redo: ctrl + shift + z
  // bug: https://github.com/vueuse/vueuse/issues/491
  // hint: https://github.com/jaywcjlove/hotkeys/blob/master/src/index.js#L74-L95
  whenever(and(or(meta, ctrl), shift, z), () => {
    if (canRedoMark) {
      redoMark()
    }
  })

  // redo: ctrl + y
  whenever(and(ctrl, y), () => {
    if (canRedoMark) {
      redoMark()
    }
  })

  // help: ctrl + / || command + /
  whenever(and(or(meta, ctrl), slash), () => {
    if (!ui.value.helpDialog) {
      openHelpDialog()
    }
    // todo
  })

  // close help: escape
  whenever(escape, () => {
    if (ui.value.helpDialog) {
      closeHelpDialog()
    }
  })
}

import { useTimeoutFn, toRefs } from '@vueuse/core'
import { nextTick } from '@nuxtjs/composition-api'

import { useStore, Snackbar } from '~/store'

const duration = 3000

export const useSnackbar = () => {
  const { ui } = useStore()

  const { snackbar } = toRefs(ui)

  const _show = (message: Snackbar['message'], type: Snackbar['type']) => {
    _stopDismissTimer({ withDismiss: true })

    nextTick(() => {
      ui.value.snackbar = {
        show: true,
        type,
        message,
      }

      if (type === 'error') return
      const { stop } = useTimeoutFn(() => {
        ui.value.snackbar.show = false
      }, duration)
      ui.value.snackbar.dismissTimerRef = stop
    })
  }

  const _stopDismissTimer = (
    options: { withDismiss: boolean } = { withDismiss: false }
  ) => {
    const { withDismiss } = options

    if (
      ui.value.snackbar.dismissTimerRef &&
      typeof ui.value.snackbar.dismissTimerRef === 'function'
    ) {
      ui.value.snackbar.dismissTimerRef()
      ui.value.snackbar.dismissTimerRef = null
    }

    if (withDismiss) {
      ui.value.snackbar.show = false
    }
  }

  const dismiss = () => _stopDismissTimer({ withDismiss: true })

  return {
    ui,
    snackbar,
    info: (message: Snackbar['message']) => _show(message, 'info'),
    success: (message: Snackbar['message']) => _show(message, 'success'),
    warning: (message: Snackbar['message']) => _show(message, 'warning'),
    error: (message: Snackbar['message']) => _show(message, 'error'),
    dismiss,
  }
}

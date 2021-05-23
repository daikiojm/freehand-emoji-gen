<template>
  <v-footer color="secondary" class="d-flex flex-column px-4">
    <p
      class="
        text-caption
        font-weight-bold
        blue-grey--text
        text-center text-justify
        mt-2
        mb-0
      "
    >
      Freehand Emoji Gen | {{ $t('subtitle') }}📝
    </p>
    <p
      class="
        text-caption
        font-weight-bold
        blue-grey--text
        text-center text-truncate
      "
    >
      © 2021 <a href="https://github.com/daikiojm" target="_blank">daikiojm</a>
    </p>

    <v-btn
      class="help-fab-button"
      small
      fab
      outlined
      color="primary"
      @click="handleHelpIconClick"
    >
      <v-icon dark> mdi-help </v-icon>
    </v-btn>

    <v-tooltip top>
      <template #activator="{ on, attrs }">
        <v-btn
          class="help-fab-button"
          small
          fab
          outlined
          color="primary"
          v-bind="attrs"
          @click="handleHelpIconClick"
          v-on="on"
        ></v-btn>
      </template>
      <span>{{ $t('help') }}</span>
    </v-tooltip>

    <HelpDialog :open="helpDialog" @close="handleClose" />
  </v-footer>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

import HelpDialog from '~/components/HelpDialog.vue'

import { useStore } from '~/store'

export default defineComponent({
  components: {
    HelpDialog,
  },
  setup() {
    const { ui, openHelpDialog, closeHelpDialog } = useStore()
    const helpDialog = computed(() => ui.value.helpDialog)
    const handleHelpIconClick = () => openHelpDialog()
    const handleClose = () => closeHelpDialog()

    return {
      helpDialog,
      handleHelpIconClick,
      handleClose,
    }
  },
})
</script>

<style scoped lang="scss">
.help-fab-button {
  position: absolute;
  bottom: 18px;
  right: 24px;
}
</style>

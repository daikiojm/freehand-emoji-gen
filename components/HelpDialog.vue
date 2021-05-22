<template>
  <v-dialog scrollable persistent :value="open" width="600">
    <v-card>
      <v-card-title>{{ $t('helpDialogTitle') }} </v-card-title>
      <v-divider></v-divider>

      <v-tabs vertical>
        <v-tab class="text-capitalize">
          <v-icon left> mdi-keyboard </v-icon>
          {{ $t('helpDialogShortcutTab') }}
        </v-tab>
        <v-tab class="text-capitalize">
          <v-icon left> mdi-chat-alert </v-icon>
          {{ $t('helpDialogInfoTab') }}
        </v-tab>

        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <AppLabel class="d-block mb-4">{{
                $t('shortcutLabel')
              }}</AppLabel>

              <p class="mb-2">
                {{ $t('shortcutCommandSlash') }}
              </p>

              <p class="mb-2">
                {{ $t('shortcutEsc') }}
              </p>

              <p class="mb-2">
                {{ $t('shortcutCommandZ') }}
              </p>

              <p class="mb-2">
                {{ $t('shortcutCommandY') }}
              </p>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <section>
                <AppLabel class="d-block mb-4">{{
                  $t('contactAuthorLabel')
                }}</AppLabel>
                <p class="mb-2">
                  GitHub:
                  <a href="https://github.com/daikiojm" target="_blank"
                    >@daikiojm</a
                  >
                </p>
                <p>
                  Twitter:
                  <a href="https://twitter.com/daikiojm" target="_blank"
                    >@daikiojm</a
                  >
                </p>
              </section>

              <section class="mt-6 mb-2">
                <AppLabel class="d-block mb-4">{{
                  $t('contactIssueLabel')
                }}</AppLabel>
                <p class="mb-2">
                  {{ $t('contactIssueMessage') }}
                </p>
                <a
                  class="d-block mb-2"
                  href="https://github.com/daikiojm/freehand-emoji-gen/issues"
                  target="_blank"
                  >GitHub - Issues</a
                >
                <a
                  class="d-block"
                  href="https://github.com/daikiojm/freehand-emoji-gen/pulls"
                  target="_blank"
                  >GitHub - Pull requests</a
                >
              </section>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          class="text-capitalize"
          color="primary"
          text
          @click="handleCloseClick"
        >
          {{ $t('close') }}</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { PropType, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    open: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  setup(_, { emit }) {
    const handleCloseClick = () => emit('close')

    return {
      handleCloseClick,
    }
  },
})
</script>

<style scoped lang="scss">
.controls-container {
  position: relative;

  .setting-reset-button {
    position: absolute;
    bottom: 24px;
    right: 24px;
  }
}
</style>

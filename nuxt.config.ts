import { NuxtConfig } from '@nuxt/types'
import colors from 'vuetify/es5/util/colors'
import messages from './locales/message'

export const nuxtConfig: NuxtConfig = {
  target: 'static',
  head: {
    title: 'Freehand Emoji Gen | フリーハンド絵文字ジェネレーター📝',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'フリーハンド(手書き)でSlack, Discordなど向けの絵文字画像を作成できるジェネレーターです',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Freehand Emoji Gen',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://daikiojm.github.io/freehand-emoji-gen/',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'フリーハンド(手書き)でSlack, Discordなど向けの絵文字画像を作成できるジェネレーターです',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://daikiojm.github.io/freehand-emoji-gen/ogp_image.png',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📝</text></svg>',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&family=Pacifico&display=swap',
      },
    ],
  },
  router: {
    base: process.env.NODE_ENV === 'production' ? '/freehand-emoji-gen/' : '',
  },
  components: ['~/components/base/'],
  modules: ['nuxt-i18n'],
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/composition-api/module',
    '@nuxtjs/vuetify',
    '@nuxtjs/google-analytics',
    '@nuxtjs/pwa',
  ],
  generate: {
    interval: 2000,
  },
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      dark: false,
      default: false,
      disable: false,
      options: {},
      themes: {
        light: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.shades.white,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.blue.lighten1,
          background: colors.blueGrey.lighten5,
        },
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: '#272727',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.blue.lighten1,
          background: colors.grey.darken3,
        },
      },
    },
  },
  i18n: {
    locales: [
      { code: 'ja', name: '日本語' },
      { code: 'en', name: 'English' },
    ],
    defaultLocale: 'ja',
    vueI18n: {
      messages,
    },
  },
  googleAnalytics: {
    id: 'UA-197325163-1',
    debug: {
      sendHitTask: process.env.NODE_ENV === 'production',
    },
  },
  pwa: {
    manifest: {
      name: 'Freehand Emoji Gen',
      lang: 'ja',
      useWebmanifestExtension: false,
    },
  },
}

module.exports = nuxtConfig

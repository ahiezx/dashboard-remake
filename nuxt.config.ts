import { defineNuxtConfig } from "nuxt"

// https://v3.nuxtjs.org/api/configuration/nuxt.config
  export default defineNuxtConfig({

      // CSS
      css: [
        '~/assets/css/main.css',
        '~/assets/css/fonts.css',
      ],

      // Build
      build: {
        postcss: {
          postcssOptions: require('./postcss.config.js'),
        },
      },

      // Head
      head: {
        link: [

        ],
      },

  })

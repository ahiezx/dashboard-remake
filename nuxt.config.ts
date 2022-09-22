import { defineNuxtConfig } from "nuxt"

// https://v3.nuxtjs.org/api/configuration/nuxt.config
  export default defineNuxtConfig({

      // CSS
      css: [
        '~/assets/css/main.css',
        '~/assets/css/fonts.css',
      ],
      
      // Plugins
      modules: [
        // ...
        [
          '@pinia/nuxt',
          {
            autoImports: [
              // automatically imports `defineStore`
              'defineStore', // import { defineStore } from 'pinia'
              // automatically imports `defineStore` as `definePiniaStore`
              ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
            ],
          },
        ],
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

import { defineNuxtConfig } from "nuxt"

// https://v3.nuxtjs.org/api/configuration/nuxt.config
  export default defineNuxtConfig({

      // CSS
      css: [
        '~/assets/css/main.css',
        '~/assets/css/fonts.css',
        '@fortawesome/fontawesome-svg-core/styles.css',
      ],
      

      // Plugins
      plugins: ["~/plugins/fontawesome.js"],
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

      // ... Imports
      // imports: {
      //   dirs: ['stores'],
      // },

      // Build
      build: {
        postcss: {
          postcssOptions: require('./postcss.config.js'),
        },
      },

      // Head
      head: {
        title: 'Dashboard Project',
        meta: [
          {
            hid: 'Dashboard',
            name: 'Dashboard',
            content: 'Dashboard Project Made by @blazewtt'
          }
        ],
        link: [

        ]

      },

  })

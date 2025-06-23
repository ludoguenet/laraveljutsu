// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    nitro: {
        static: true,
        compressPublicAssets: true,
    },

  devtools: { enabled: true },

  modules: ['@nuxt/ui', '@nuxt/eslint', '@nuxt/content', '@nuxt/icon', '@nuxt/image'],

  app: {
    head: {
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&display=swap'
        }
      ],
      htmlAttrs: {
        lang: 'en'
      }
    }
  },

  css: ['~/assets/css/main.css'],

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2024-11-27',

  content: {
    build: {
        markdown: {
          highlight: {
            theme: {
              default: 'material-theme-palenight',
            },
            langs: [
                'php',
                'javascript',
                'typescript',
                'bash',
                'sql',
                'json',
                'css',
                'html',
                'yaml',
                'markdown',
              ]
          }
        }
      }
  },

  image: {
    quality: 85,
    format: ['webp'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    presets: {
      avatar: {
        modifiers: {
          format: 'webp',
          width: 384,
          height: 384,
          quality: 85
        }
      }
    }
  }
})

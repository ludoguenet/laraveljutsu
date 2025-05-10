// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    nitro: {
        static: true,
    },

  devtools: { enabled: true },

  modules: ['@nuxt/ui', '@nuxt/eslint', '@nuxtjs/color-mode', '@nuxt/content', '@nuxt/icon'],

  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&display=swap'
        }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2024-11-27',

  colorMode: {
    preference: 'system',
    fallback: 'light'
  },

  content: {
    build: {
        markdown: {
          highlight: {
            theme: {
              default: 'github-light',
              dark: 'github-dark',
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
  }
})
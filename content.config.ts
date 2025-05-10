import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      source: 'blog/*.md',
      type: 'page',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        author: z.string(),
      })
    })
  }
})

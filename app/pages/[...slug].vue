<template>
  <div class="min-h-screen bg-white text-slate-900">
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-6 py-4">
        <div class="flex justify-between items-center">
          <NuxtLink to="/" class="text-xl font-bold">
            Laravel<span class="text-lime-500">Jutsu</span>
          </NuxtLink>
          <div class="flex items-center gap-8">
            <NuxtLink to="/blog" class="text-slate-600 hover:text-slate-900 transition-colors">Blog</NuxtLink>
            <a href="mailto:ludo@epekta.com" class="bg-slate-900 text-white px-6 py-2 rounded-full hover:bg-lime-500 transition-all duration-300">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Article Content -->
    <article class="pt-32 pb-20 px-6">
      <div class="max-w-4xl mx-auto">
        <!-- Back Button -->
        <div class="mb-12">
          <NuxtLink to="/blog" class="inline-flex items-center text-slate-500 hover:text-slate-700 transition-colors text-sm">
            <UIcon name="i-mdi-arrow-left" class="mr-2" />
            Back to articles
          </NuxtLink>
        </div>

        <div v-if="pending" class="flex items-center justify-center py-20">
          <div class="w-8 h-8 border-2 border-lime-500 border-t-transparent rounded-full animate-spin"/>
        </div>
        <div v-else-if="error" class="text-center py-20">
          <h1 class="text-4xl font-black mb-6">404</h1>
          <p class="text-slate-600 mb-8">Article not found</p>
          <NuxtLink to="/blog" class="bg-slate-900 text-white px-8 py-3 rounded-full hover:bg-lime-500 transition-all duration-300">
            Back to articles
          </NuxtLink>
        </div>
        <div v-else-if="page">
          <!-- Article Header -->
          <header class="mb-16 fade-in-up">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
              {{ page.title }}
            </h1>
            <div class="flex items-center gap-6 text-slate-500 mb-8">
              <span class="text-sm">{{ new Date(page.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}</span>
              <span class="w-1 h-1 bg-slate-400 rounded-full"/>
              <span class="text-sm">{{ page.author }}</span>
            </div>
            <div class="w-16 h-1 bg-lime-500 rounded-full"/>
          </header>

          <!-- Article Content -->
          <div class="prose prose-lg prose-slate max-w-none fade-in-up" style="animation-delay: 0.1s;">
            <ContentRenderer :value="page" />
          </div>

          <!-- Article Footer -->
          <footer class="mt-20 pt-12 border-t border-slate-200 fade-in-up" style="animation-delay: 0.2s;">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div>
                <h3 class="text-xl font-bold text-slate-900 mb-2">Enjoyed this article?</h3>
                <p class="text-slate-600">Connect with me for more insights on Laravel and web development.</p>
              </div>
              <div class="flex items-center gap-4">
                <a href="https://linkedin.com/in/ludoguenet" target="_blank" class="text-slate-400 hover:text-lime-500 transition-colors" aria-label="LinkedIn">
                  <UIcon name="i-mdi-linkedin" class="text-xl" />
                </a>
                <a href="https://x.com/laraveljutsu" target="_blank" class="text-slate-400 hover:text-lime-500 transition-colors" aria-label="Twitter">
                  <UIcon name="i-mdi-twitter" class="text-xl" />
                </a>
                <a href="https://youtube.com/@LaravelJutsu" target="_blank" class="text-slate-400 hover:text-lime-500 transition-colors" aria-label="YouTube">
                  <UIcon name="i-mdi-youtube" class="text-xl" />
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { data: page, pending, error } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
})

// Add error logging
watch(error, (newError: Error | null) => {
  if (newError) {
    console.error('Content error:', newError)
  }
})

useHead({
  title: page.value ? `${page.value.title} - LaravelJutsu` : '404 - Page not found',
  meta: [
    { name: 'description', content: page.value?.description || 'Page not found' }
  ]
})
</script>

<style>
/* Add any custom styles for content here if needed */
</style>

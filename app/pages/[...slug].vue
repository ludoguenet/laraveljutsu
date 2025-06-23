<template>
  <div class="min-h-screen flex flex-col bg-[#fef3e2] text-slate-900 transition-colors duration-300">
    <div class="py-12 md:py-20">
      <div class="max-w-3xl mx-auto px-4">
        <!-- Back Button -->
        <div class="mb-8 sm:mb-12">
          <NuxtLink to="/" class="inline-flex items-center gap-2 glass-effect px-3 py-2 sm:px-4 sm:py-2 rounded-full text-slate-700 hover:text-purple-600 hover:scale-105 transition-all">
            <UIcon name="i-mdi-arrow-left" class="text-base sm:text-lg" />
            <span class="font-medium text-sm sm:text-base">Back to Home</span>
          </NuxtLink>
        </div>

        <div v-if="pending" class="text-center py-12">
          <p class="text-slate-600">Loading...</p>
        </div>
        <div v-else-if="error" class="text-center py-12">
          <p class="text-slate-600">An error occurred.</p>
        </div>
        <div v-else-if="page" class="prose">
          <h1 class="text-4xl sm:text-5xl font-black mb-6 leading-tight">
            {{ page.title }}
          </h1>
          <div class="flex items-center gap-4 text-sm text-slate-500 mb-12">
            <span>{{ new Date(page.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}</span>
            <span>•</span>
            <span>{{ page.author }}</span>
          </div>
          <ContentRenderer :value="page" />
        </div>
        <div v-else class="text-center py-12">
          <h1 class="text-4xl sm:text-5xl font-black mb-6 leading-tight">
            <span class="text-slate-900">404</span>
          </h1>
          <p class="text-slate-600 mb-8">Page not found</p>
          <NuxtLink to="/" class="bg-purple-600 hover:bg-orange-500 text-white hover:text-slate-900 font-medium px-6 py-2.5 min-w-[140px] text-center rounded-full transition-colors text-sm shadow focus:outline-none focus:ring-2 focus:ring-purple-600">
            Back to Home
          </NuxtLink>
        </div>
      </div>
    </div>
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

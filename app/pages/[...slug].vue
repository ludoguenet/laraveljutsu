<template>
  <div class="min-h-screen flex flex-col bg-[#f8f8f3] text-zinc-900 dark:bg-zinc-900 transition-colors duration-300">
    <div class="py-12 md:py-20">
      <div class="max-w-3xl mx-auto px-4">
        <!-- Back Button -->
        <div class="mb-8">
          <NuxtLink to="/" class="inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-300 hover:text-lime-500 dark:hover:text-lime-500 transition-colors">
            <UIcon name="i-mdi-arrow-left" class="text-lg" />
            <span>Back to Home</span>
          </NuxtLink>
        </div>

        <div v-if="pending" class="text-center py-12">
          <p class="text-zinc-600 dark:text-zinc-300">Loading...</p>
        </div>
        <div v-else-if="error" class="text-center py-12">
          <p class="text-zinc-600 dark:text-zinc-300">An error occurred.</p>
        </div>
        <div v-else-if="page" class="prose">
          <h1 class="text-4xl sm:text-5xl dark:text-white font-black mb-6 leading-tight">
            {{ page.title }}
          </h1>
          <div class="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400 mb-12">
            <span>{{ new Date(page.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}</span>
            <span>•</span>
            <span>{{ page.author }}</span>
          </div>
          <ContentRenderer :value="page" />
        </div>
        <div v-else class="text-center py-12">
          <h1 class="text-4xl sm:text-5xl font-black mb-6 leading-tight">
            <span class="text-zinc-900 dark:text-white">404</span>
          </h1>
          <p class="text-zinc-600 dark:text-zinc-300 mb-8">Page not found</p>
          <NuxtLink to="/" class="bg-zinc-900 dark:bg-white hover:bg-lime-500 text-white dark:text-zinc-900 hover:text-zinc-900 font-medium px-6 py-2.5 min-w-[140px] text-center rounded-full transition-colors text-sm shadow focus:outline-none focus:ring-2 focus:ring-lime-500">
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

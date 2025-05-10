<template>
  <div class="min-h-screen flex flex-col bg-[#f8f8f3] text-zinc-900 dark:bg-zinc-900 transition-colors duration-300">
    <div class="py-12 md:py-20">
      <div class="max-w-5xl mx-auto px-4">
        <!-- Back Button -->
        <div class="mb-8">
          <NuxtLink to="/" class="inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-300 hover:text-lime-500 dark:hover:text-lime-500 transition-colors">
            <UIcon name="lucide:arrow-left" class="text-lg" />
            <span>Back to Home</span>
          </NuxtLink>
        </div>

        <!-- Blog Header -->
        <div class="flex flex-col md:flex-row items-start gap-6 mb-6">
          <div class="flex-1 flex flex-col items-start mb-8 md:mb-0">
            <h1 class="text-2xl md:text-3xl font-black text-zinc-900 dark:text-white mb-4 flex items-end gap-2 uppercase tracking-wider leading-tight">
              <span class="font-black">ALL</span>
              <span class="italic font-black text-lime-500">ARTICLES</span>
            </h1>
          </div>
        </div>

        <!-- Articles List -->
        <div v-if="pending" class="text-center py-12">
          <p class="text-zinc-600 dark:text-zinc-300">Loading...</p>
        </div>
        <div v-else-if="error" class="text-center py-12">
          <p class="text-zinc-600 dark:text-zinc-300">An error occurred.</p>
        </div>
        <div v-else-if="posts && posts.length > 0" class="grid gap-6">
          <NuxtLink
            v-for="post in posts"
            :key="post.path"
            :to="post.path"
            class="block max-w-2xl p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {{ post.title }}
            </h2>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              {{ post.description }}
            </p>
            <div class="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400 mt-4">
              <span>{{ new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}</span>
              <span>•</span>
              <span>{{ post.author }}</span>
            </div>
          </NuxtLink>
        </div>
        <div v-else class="text-center py-12">
          <p class="text-zinc-600 dark:text-zinc-300">No articles yet.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: posts, pending, error } = await useAsyncData('blog', () =>
  queryCollection('blog')
    .order('date', 'DESC')
    .all()
)

useHead({
  title: 'Blog - LaravelJutsu',
  meta: [
    { name: 'description', content: 'Read the latest articles about Laravel, PHP, Vue.js, and web development from LaravelJutsu.' }
  ]
})
</script>

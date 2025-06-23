<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-br from-[#fef3e2] via-[#fff8f0] to-[#fef3e2] text-slate-900">
    <div class="py-16 md:py-24">
      <div class="max-w-6xl mx-auto px-6">
        <!-- Back Button -->
        <div class="mb-16 fade-in-up">
          <NuxtLink to="/" class="inline-flex items-center gap-2 glass-effect px-4 py-2 rounded-full text-slate-700 hover:text-purple-600 hover:scale-105 transition-all">
            <UIcon name="i-mdi-arrow-left" class="text-lg" />
            <span class="font-medium">Back to Home</span>
          </NuxtLink>
        </div>

        <!-- Blog Header -->
        <div class="mb-16 fade-in-up" style="animation-delay: 0.1s;">
          <div class="space-y-4">
            <h1 class="text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
              <span class="block">ALL</span>
              <span class="block gradient-text">ARTICLES</span>
            </h1>
            <div class="w-16 h-1 bg-gradient-to-r from-purple-600 to-orange-500 rounded-full"></div>
          </div>
        </div>

        <!-- Articles List -->
        <div v-if="pending" class="text-center py-12">
          <p class="text-slate-600">Loading...</p>
        </div>
        <div v-else-if="error" class="text-center py-12">
          <p class="text-slate-600">An error occurred.</p>
        </div>
        <div v-else-if="posts && posts.length > 0" class="grid gap-6">
          <NuxtLink
            v-for="post in posts"
            :key="post.path"
            :to="post.path"
            class="block max-w-2xl p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100"
          >
            <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {{ post.title }}
            </h2>
            <p class="font-normal text-gray-700">
              {{ post.description }}
            </p>
            <div class="flex items-center gap-4 text-sm text-zinc-500 mt-4">
              <span>{{ new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}</span>
              <span>•</span>
              <span>{{ post.author }}</span>
            </div>
          </NuxtLink>
        </div>
        <div v-else class="text-center py-12">
          <p class="text-zinc-600">No articles yet.</p>
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

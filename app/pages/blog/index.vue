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
            <span class="text-slate-600">Blog</span>
            <a href="mailto:ludo@epekta.com" class="bg-slate-900 text-white px-6 py-2 rounded-full hover:bg-lime-500 transition-all duration-300">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Blog Header -->
    <section class="pt-32 pb-20 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="max-w-4xl mb-20">
          <div class="fade-in-up">
            <NuxtLink to="/" class="inline-flex items-center text-slate-500 hover:text-slate-700 transition-colors mb-8 text-sm">
              <UIcon name="i-mdi-arrow-left" class="mr-2" />
              Back to home
            </NuxtLink>
            <h1 class="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.85] tracking-tight mb-8">
              <span class="block">ALL</span>
              <span class="block text-lime-500">ARTICLES</span>
            </h1>
            <p class="text-xl text-slate-600 leading-relaxed font-light">
              Discover my latest thoughts on web development, Laravel best practices, and modern development techniques.
            </p>
          </div>
        </div>

        <!-- Articles Grid -->
        <div v-if="pending" class="flex items-center justify-center py-20">
          <div class="w-8 h-8 border-2 border-lime-500 border-t-transparent rounded-full animate-spin"/>
        </div>
        <div v-else-if="error" class="text-center py-20">
          <p class="text-slate-600">An error occurred while loading articles.</p>
        </div>
        <div v-else-if="posts && posts.length > 0" class="grid md:grid-cols-2 gap-8">
          <article
            v-for="(post, index) in posts"
            :key="post.path"
            class="fade-in-up"
            :style="`animation-delay: ${index * 0.1}s`"
          >
                        <NuxtLink
              :to="post.path"
              class="group block bg-white border border-slate-200 hover:border-slate-300 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg"
            >
              <h2 class="text-2xl font-bold text-slate-900 mb-4 group-hover:text-lime-500 transition-colors leading-tight">
                {{ post.title }}
              </h2>
              <p class="text-slate-600 mb-6 leading-relaxed">
                {{ post.description }}
              </p>
              <div class="flex items-center justify-between">
                <div class="text-sm text-slate-500">
                  {{ new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}
                </div>
                <div class="flex items-center text-lime-500 font-medium text-sm group-hover:translate-x-1 transition-transform">
                  Read article
                  <UIcon name="i-mdi-arrow-right" class="ml-2" />
                </div>
              </div>
            </NuxtLink>
          </article>
        </div>
        <div v-else class="text-center py-20">
          <p class="text-slate-600">No articles yet.</p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-16 bg-slate-50 border-t border-slate-100">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-center gap-8">
          <div class="text-slate-500 text-sm">
            © {{ new Date().getFullYear() }} Ludovic Guénet. All rights reserved.
          </div>
          <div class="flex items-center gap-6">
            <a href="https://github.com/ludoguenet" target="_blank" class="text-slate-400 hover:text-slate-600 transition-colors" aria-label="GitHub">
              <UIcon name="i-mdi-github" class="text-xl" />
            </a>
            <a href="https://linkedin.com/in/ludoguenet" target="_blank" class="text-slate-400 hover:text-slate-600 transition-colors" aria-label="LinkedIn">
              <UIcon name="i-mdi-linkedin" class="text-xl" />
            </a>
            <a href="https://x.com/laraveljutsu" target="_blank" class="text-slate-400 hover:text-slate-600 transition-colors" aria-label="Twitter">
              <UIcon name="i-mdi-twitter" class="text-xl" />
            </a>
            <a href="https://www.malt.fr/profile/ludovicguenet" target="_blank" class="text-slate-400 hover:text-slate-600 transition-colors" aria-label="Malt">
              <UIcon name="i-mdi-handshake" class="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const { data: posts, pending, error } = await useAsyncData('blog-all', () =>
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

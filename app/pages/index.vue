<template>
  <div class="min-h-screen flex flex-col bg-[#f8f8f3] text-zinc-900 dark:bg-zinc-900 transition-colors duration-300">
    <!-- Hero Section -->
    <div class="py-12 md:py-20">
      <div class="max-w-5xl mx-auto px-4">
        <!-- Icons and Email Row -->
        <div class="flex justify-between items-center mb-8">
          <div class="flex items-center gap-4">
            <a href="https://github.com/ludoguenet" aria-label="GitHub" target="_blank" rel="noopener noreferrer" class="w-8 h-8 flex items-center justify-center rounded-full border border-zinc-500 hover:border-lime-500 text-zinc-500 hover:text-lime-500 transition-colors duration-300">
              <UIcon name="lucide:github" class="text-lg" />
            </a>
            <a href="https://linkedin.com/in/ludoguenet" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" class="w-8 h-8 flex items-center justify-center rounded-full border border-zinc-500 hover:border-lime-500 text-zinc-500 hover:text-lime-500 transition-colors duration-300">
              <UIcon name="lucide:linkedin" class="text-lg" />
            </a>
            <a href="https://x.com/laraveljutsu" aria-label="Twitter" target="_blank" rel="noopener noreferrer" class="w-8 h-8 flex items-center justify-center rounded-full border border-zinc-500 hover:border-lime-500 text-zinc-500 hover:text-lime-500 transition-colors duration-300">
              <UIcon name="lucide:twitter" class="text-lg" />
            </a>
            <button
              class="w-8 h-8 flex items-center justify-center rounded-full border border-zinc-500 hover:border-lime-500 text-zinc-500 hover:text-lime-500 transition-colors duration-300"
              :aria-label="$colorMode.value === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
              @click="$colorMode.preference = $colorMode.value === 'dark' ? 'light' : 'dark'"
            >
              <UIcon :name="$colorMode.value === 'dark' ? 'lucide:sun' : 'lucide:moon'" class="text-lg" />
            </button>
          </div>
          <a href="mailto:ludo@epekta.com" aria-label="Send email to ludo@epekta.com" class="text-sm font-bold text-zinc-900 dark:text-zinc-200 underline">ludo@epekta.com</a>
        </div>
        <!-- Image and Text Row -->
        <div class="flex flex-col md:flex-row items-center gap-32">
          <div class="flex-shrink-0 relative">
            <div class="absolute -inset-6 bg-lime-500/10 rounded-2xl -rotate-6 pointer-events-none z-0"/>
            <img src="/img/avatar.webp" alt="Ludovic Guénet" class="relative rounded-2xl w-80 h-80 object-cover shadow-lg z-10">
          </div>
          <div class="flex-1 flex flex-col items-start">
            <p class="mb-2 text-zinc-500 dark:text-zinc-300">— Hello, I'm Ludovic 👋</p>
            <h1 class="text-4xl sm:text-5xl md:text-7xl font-black dark:text-white mb-2 leading-tight tracking-tight">
              THE <span class="text-lime-500">*</span><br>
              <span class="text-zinc-900 dark:text-white">LEGENDARY</span> <span class="text-lime-500">SAMURAÏ</span>
            </h1>
            <p class="mb-6 text-lg text-zinc-700 dark:text-zinc-200 max-w-lg">Available for freelance web development missions.<br>For a modern, efficient, and elegant application.</p>
            <div class="flex flex-row gap-4 mb-4">
              <a href="https://linkedin.com/in/ludoguenet" target="_blank" rel="noopener noreferrer" class="bg-zinc-900 dark:bg-white hover:bg-lime-500 text-white dark:text-zinc-900 hover:text-zinc-900 font-medium px-6 py-2.5 min-w-[140px] text-center rounded-full transition-colors text-sm shadow focus:outline-none focus:ring-2 focus:ring-lime-500">LET'S TALK</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- About Section -->
    <section class="bg-lime-500 py-8 md:py-16 mt-16">
      <div class="max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-6 px-4">
        <div class="flex-1 flex flex-col items-start mb-8 md:mb-0">
          <h2 class="text-2xl md:text-3xl font-black text-zinc-900 mb-4 flex items-end gap-2 uppercase tracking-wider leading-tight">
            <span class="font-black">ABOUT</span>
            <span class="italic font-black text-white">ME</span>
          </h2>
          <a href="https://youtube.com/@LaravelJutsu" target="_blank" rel="noopener noreferrer" class="bg-zinc-900 dark:bg-white hover:bg-white dark:hover:bg-zinc-900 text-white dark:text-zinc-900 hover:text-zinc-900 dark:hover:text-white font-medium px-6 py-2.5 min-w-[140px] text-center rounded-full transition-colors text-sm shadow mt-2 focus:outline-none focus:ring-2 focus:ring-lime-500">LEARN MORE</a>
        </div>
        <div class="flex-1 text-xl md:text-2xl text-zinc-900 font-black leading-tight">
          I use <span class="font-normal underline">PHP</span>, <span class="font-normal underline">Laravel</span>, <span class="font-normal underline">Vue.js</span> and <span class="font-normal underline">Nuxt.js</span> daily.<br>
          I love creating modern, performant, and elegant web applications. With solid technical expertise and attention to detail, I develop robust and maintainable solutions.
        </div>
      </div>
    </section>

    <!-- Blog Section -->
    <section class="py-16 bg-[#f8f8f3] text-zinc-900 dark:bg-zinc-900 transition-colors duration-300">
      <div class="max-w-5xl mx-auto px-4">
        <div class="flex flex-col md:flex-row items-start gap-6">
          <div class="flex-1 flex flex-col items-start mb-8 md:mb-0">
            <h2 class="text-2xl md:text-3xl font-black text-zinc-900 dark:text-white mb-4 flex items-end gap-2 uppercase tracking-wider leading-tight">
              <span class="font-black">LATEST</span>
              <span class="italic font-black text-lime-500">ARTICLE</span>
            </h2>
            <NuxtLink to="/blog" class="bg-zinc-900 dark:bg-white hover:bg-lime-500 text-white dark:text-zinc-900 hover:text-zinc-900 font-medium px-6 py-2.5 min-w-[140px] text-center rounded-full transition-colors text-sm shadow mt-2 focus:outline-none focus:ring-2 focus:ring-lime-500">
              ALL ARTICLES
            </NuxtLink>
          </div>
          <div class="flex-1">
            <div v-if="pending" class="text-center py-12">
              <p class="text-zinc-600 dark:text-zinc-300">Loading...</p>
            </div>
            <div v-else-if="error" class="text-center py-12">
              <p class="text-zinc-600 dark:text-zinc-300">An error occurred.</p>
            </div>
            <div v-else-if="latestPost" class="group">
              <NuxtLink
                :to="latestPost.path"
                class="block max-w-2xl p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {{ latestPost.title }}
                </h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                  {{ latestPost.description }}
                </p>
                <div class="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400 mt-4">
                  <span>{{ new Date(latestPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}</span>
                  <span>•</span>
                  <span>{{ latestPost.author }}</span>
                </div>
              </NuxtLink>
            </div>
            <div v-else class="text-center py-12">
              <p class="text-zinc-600 dark:text-zinc-300">No articles yet.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="mt-auto py-6 border-t border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800">
      <div class="max-w-5xl mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-sm text-zinc-500 dark:text-zinc-400">
            © {{ new Date().getFullYear() }} Ludovic Guénet. All rights reserved.
          </p>
          <div class="flex items-center gap-4">
            <a href="https://github.com/ludoguenet" target="_blank" rel="noopener noreferrer" class="text-zinc-500 hover:text-lime-500 dark:text-zinc-400 dark:hover:text-lime-500 transition-colors">
              <UIcon name="lucide:github" class="text-xl" />
            </a>
            <a href="https://www.linkedin.com/in/ludoguenet" target="_blank" rel="noopener noreferrer" class="text-zinc-500 hover:text-lime-500 dark:text-zinc-400 dark:hover:text-lime-500 transition-colors">
              <UIcon name="lucide:linkedin" class="text-xl" />
            </a>
            <a href="https://x.com/laraveljutsu" target="_blank" rel="noopener noreferrer" class="text-zinc-500 hover:text-lime-500 dark:text-zinc-400 dark:hover:text-lime-500 transition-colors">
              <UIcon name="lucide:twitter" class="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const { data: posts, pending, error } = await useAsyncData('blog', () =>
  queryCollection('blog')
    .order('date', 'DESC')
    .limit(1)
    .all()
)

const latestPost = computed(() => posts.value?.[0])

useHead({
  htmlAttrs: { lang: 'en' },
  title: 'Ludovic Guénet - Web Developer Laravel & Vue.js | YouTube & Freelance Missions',
  meta: [
    { name: 'description', content: 'Freelance web developer, expert in PHP, Laravel, Vue.js, Nuxt.js. Discover my YouTube channel LaravelJutsu and contact me for freelance missions.' },
    { name: 'keywords', content: 'web developer, freelance, PHP, Laravel, Vue.js, Nuxt.js, web application, YouTube, freelance missions' },
    { name: 'author', content: 'Ludovic Guénet' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'robots', content: 'index, follow' },
    // Open Graph / Facebook
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://laraveljutsu.com/' },
    { property: 'og:title', content: 'Ludovic Guénet - Web Developer Laravel & Vue.js | YouTube & Freelance Missions' },
    { property: 'og:description', content: 'Freelance web developer, expert in PHP, Laravel, Vue.js, Nuxt.js. Discover my YouTube channel LaravelJutsu and contact me for freelance missions.' },
    { property: 'og:image', content: 'https://laraveljutsu.com/img/avatar.webp' },
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:site_name', content: 'LaravelJutsu' },
    { property: 'og:see_also', content: 'https://youtube.com/@LaravelJutsu' },
    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:url', content: 'https://laraveljutsu.com/' },
    { name: 'twitter:title', content: 'Ludovic Guénet - Web Developer Laravel & Vue.js | YouTube & Freelance Missions' },
    { name: 'twitter:description', content: 'Freelance web developer, expert in PHP, Laravel, Vue.js, Nuxt.js. Discover my YouTube channel LaravelJutsu and contact me for freelance missions.' },
    { name: 'twitter:image', content: 'https://laraveljutsu.com/img/avatar.webp' },
    { name: 'twitter:site', content: '@laraveljutsu' }
  ],
  link: [
    { rel: 'canonical', href: 'https://laraveljutsu.com/' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Ludovic Guénet",
        "url": "https://laraveljutsu.com/",
        "sameAs": [
          "https://youtube.com/@LaravelJutsu",
          "https://github.com/ludoguenet",
          "https://linkedin.com/in/ludoguenet",
          "https://x.com/laraveljutsu"
        ],
        "jobTitle": "Freelance Web Developer",
        "description": "Freelance web developer, expert in PHP, Laravel, Vue.js, Nuxt.js. Discover my YouTube channel LaravelJutsu and contact me for freelance missions."
      })
    }
  ]
})
</script>

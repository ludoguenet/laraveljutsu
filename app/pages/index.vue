<template>
  <div class="min-h-screen bg-white text-slate-900">
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-6 py-4">
        <div class="flex justify-between items-center">
          <div class="text-xl font-bold">
            Laravel<span class="text-lime-500">Jutsu</span>
          </div>
          <div class="flex items-center gap-8">
            <NuxtLink to="/blog" class="text-slate-600 hover:text-slate-900 transition-colors">Blog</NuxtLink>
            <a href="mailto:ludo@epekta.com" class="bg-slate-900 text-white px-6 py-2 rounded-full hover:bg-lime-500 transition-all duration-300">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="pt-24 sm:pt-32 pb-24 sm:pb-40 px-4 sm:px-6 relative overflow-hidden">
      <!-- Background decorative elements -->
      <div class="absolute inset-0 -z-10">
        <div class="absolute top-20 left-10 w-64 h-64 bg-lime-500/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 right-10 w-96 h-96 bg-slate-900/5 rounded-full blur-3xl"></div>
      </div>

      <div class="max-w-7xl mx-auto">
        <div class="text-center">
          <div class="fade-in-up">
            <p class="text-slate-500 uppercase tracking-wide text-xs sm:text-sm font-medium mb-6 sm:mb-8">— Hello, I'm Ludovic</p>
            <h1 class="text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black leading-[0.8] tracking-tight mb-12">

                        <!-- Tech Stack Visual -->
            <div class="flex flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-4 mb-8 md:mb-12 fade-in-up" style="animation-delay: 0.1s;">
              <div class="bg-white border border-slate-200 rounded-full px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 shadow-sm hover:shadow-md transition-shadow">
                <span class="text-slate-700 font-semibold text-sm sm:text-base">PHP</span>
              </div>
              <div class="bg-white border border-slate-200 rounded-full px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 shadow-sm hover:shadow-md transition-shadow">
                <span class="text-slate-700 font-semibold text-sm sm:text-base">Laravel</span>
              </div>
              <div class="bg-white border border-slate-200 rounded-full px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 shadow-sm hover:shadow-md transition-shadow">
                <span class="text-slate-700 font-semibold text-sm sm:text-base">Vue.js</span>
              </div>
              <div class="bg-white border border-slate-200 rounded-full px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 shadow-sm hover:shadow-md transition-shadow">
                <span class="text-slate-700 font-semibold text-sm sm:text-base">Nuxt.js</span>
              </div>
            </div>

            <p class="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light mb-8 md:mb-12 fade-in-up px-4" style="animation-delay: 0.2s;">
              Available for freelance web development missions.<br>
              <span class="text-slate-900 font-medium">For a modern, efficient, and elegant application.</span>
            </p>

            <div class="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 fade-in-up px-4" style="animation-delay: 0.3s;">
              <a href="mailto:ludo@epekta.com" class="bg-slate-900 text-white px-8 py-3 sm:px-10 sm:py-4 md:px-12 md:py-4 rounded-full hover:bg-lime-500 transition-all duration-300 font-medium text-base md:text-lg text-center">
                Let's talk
              </a>
              <a href="https://linkedin.com/in/ludoguenet" target="_blank" class="border border-slate-200 text-slate-700 px-8 py-3 sm:px-10 sm:py-4 md:px-12 md:py-4 rounded-full hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 font-medium text-base md:text-lg text-center">
                Hire me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-32 bg-slate-50">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-20 items-start">
          <div class="fade-in-up">
            <h2 class="text-5xl md:text-6xl font-black mb-8 leading-tight">
              About<br>
              <span class="text-lime-500">me</span>
            </h2>
            <div class="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                I use <strong class="text-slate-900">PHP</strong>, <strong class="text-slate-900">Laravel</strong>,
                <strong class="text-slate-900">Vue.js</strong> and <strong class="text-slate-900">Nuxt.js</strong> daily.
              </p>
              <p>
                I love creating modern, performant, and elegant web applications. With solid technical expertise
                and attention to detail, I develop robust and maintainable solutions.
              </p>
            </div>
            <div class="mt-8">
              <a href="https://youtube.com/@LaravelJutsu" target="_blank" class="inline-flex items-center text-lime-500 font-medium hover:text-lime-600 transition-colors">
                Learn more about my work
                <UIcon name="i-mdi-arrow-right" class="ml-2" />
              </a>
            </div>
          </div>

          <!-- Skills Grid -->
          <div class="fade-in-up" style="animation-delay: 0.2s;">
            <div class="grid grid-cols-2 gap-6">
              <div class="bg-white p-6 rounded-2xl">
                <h3 class="font-bold text-slate-900 mb-2">Backend</h3>
                <p class="text-slate-600 text-sm">PHP, Laravel, APIs</p>
              </div>
              <div class="bg-white p-6 rounded-2xl">
                <h3 class="font-bold text-slate-900 mb-2">Frontend</h3>
                <p class="text-slate-600 text-sm">Vue.js, Nuxt.js, React</p>
              </div>
              <div class="bg-white p-6 rounded-2xl">
                <h3 class="font-bold text-slate-900 mb-2">DevOps</h3>
                <p class="text-slate-600 text-sm">Docker, CI/CD, Cloud</p>
              </div>
              <div class="bg-white p-6 rounded-2xl">
                <h3 class="font-bold text-slate-900 mb-2">Database</h3>
                <p class="text-slate-600 text-sm">MySQL, PostgreSQL, Redis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Latest Article Section -->
    <section class="py-32">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-20 items-start">
          <div class="fade-in-up">
            <h2 class="text-5xl md:text-6xl font-black mb-8 leading-tight">
              Latest<br>
              <span class="text-lime-500">article</span>
            </h2>
            <p class="text-lg text-slate-600 mb-8 leading-relaxed">
              Discover my latest thoughts on web development, Laravel best practices,
              and modern development techniques.
            </p>
            <NuxtLink to="/blog" class="inline-flex items-center text-lime-500 font-medium hover:text-lime-600 transition-colors">
              View all articles
              <UIcon name="i-mdi-arrow-right" class="ml-2" />
            </NuxtLink>
          </div>

          <div class="fade-in-up" style="animation-delay: 0.2s;">
            <div v-if="pending" class="flex items-center justify-center py-16">
              <div class="w-8 h-8 border-2 border-lime-500 border-t-transparent rounded-full animate-spin"/>
            </div>
            <div v-else-if="error" class="text-slate-600">
              <p>An error occurred while loading articles.</p>
            </div>
            <div v-else-if="latestPost" class="group">
              <NuxtLink :to="latestPost.path" class="block bg-white border border-slate-200 hover:border-slate-300 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg">
                <h3 class="text-2xl font-bold text-slate-900 mb-4 group-hover:text-lime-500 transition-colors">
                  {{ latestPost.title }}
                </h3>
                <p class="text-slate-600 mb-6 leading-relaxed">
                  {{ latestPost.description }}
                </p>
                <div class="flex items-center justify-between">
                  <div class="text-sm text-slate-500">
                    {{ new Date(latestPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}
                  </div>
                  <div class="flex items-center text-lime-500 font-medium text-sm group-hover:translate-x-1 transition-transform">
                    Read article
                    <UIcon name="i-mdi-arrow-right" class="ml-2" />
                  </div>
                </div>
              </NuxtLink>
            </div>
            <div v-else class="text-slate-600">
              <p>No articles yet.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-32 bg-slate-900 text-white">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-5xl md:text-6xl font-black mb-8 leading-tight fade-in-up">
            Ready to start<br>
            <span class="text-lime-400">your project?</span>
          </h2>
          <p class="text-xl text-slate-300 mb-12 leading-relaxed fade-in-up" style="animation-delay: 0.1s;">
            Let's discuss your next web development mission and bring your ideas to life.
          </p>
          <div class="fade-in-up" style="animation-delay: 0.2s;">
            <a href="mailto:ludo@epekta.com" class="bg-lime-500 text-white px-12 py-4 rounded-full hover:bg-lime-600 transition-all duration-300 font-medium text-lg inline-flex items-center gap-3">
              <UIcon name="i-mdi-email-outline" class="text-xl" />
              ludo@epekta.com
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-16 bg-white border-t border-slate-100">
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
    { property: 'og:url', content: 'https://laraveljutsu.net/' },
    { property: 'og:title', content: 'Ludovic Guénet - Web Developer Laravel & Vue.js | YouTube & Freelance Missions' },
    { property: 'og:description', content: 'Freelance web developer, expert in PHP, Laravel, Vue.js, Nuxt.js. Discover my YouTube channel LaravelJutsu and contact me for freelance missions.' },
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:site_name', content: 'LaravelJutsu' },
    { property: 'og:see_also', content: 'https://youtube.com/@LaravelJutsu' },
    // Twitter
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:url', content: 'https://laraveljutsu.net/' },
    { name: 'twitter:title', content: 'Ludovic Guénet - Web Developer Laravel & Vue.js | YouTube & Freelance Missions' },
    { name: 'twitter:description', content: 'Freelance web developer, expert in PHP, Laravel, Vue.js, Nuxt.js. Discover my YouTube channel LaravelJutsu and contact me for freelance missions.' },
    { name: 'twitter:site', content: '@laraveljutsu' }
  ],
  link: [
    { rel: 'canonical', href: 'https://laraveljutsu.net/' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' }
  ],
  script: [
    {
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Ludovic Guénet",
        "url": "https://laraveljutsu.net/",
        "sameAs": [
          "https://youtube.com/@LaravelJutsu",
          "https://github.com/ludoguenet",
          "https://linkedin.com/in/ludoguenet",
          "https://x.com/laraveljutsu",
          "https://www.malt.fr/profile/ludovicguenet"
        ],
        "jobTitle": "Freelance Web Developer",
        "description": "Freelance web developer, expert in PHP, Laravel, Vue.js, Nuxt.js. Discover my YouTube channel LaravelJutsu and contact me for freelance missions."
      }),
      type: 'application/ld+json'
    }
  ]
})
</script>

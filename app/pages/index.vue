<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-br from-[#fef3e2] via-[#fff8f0] to-[#fef3e2] text-slate-900">
    <!-- Hero Section -->
    <div class="py-16 md:py-24">
      <div class="max-w-6xl mx-auto px-6">
        <!-- Icons and Email Row -->
        <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0 mb-16 fade-in-up">
          <div class="flex items-center gap-3 sm:gap-6 stagger-children justify-center sm:justify-start">
            <a href="https://github.com/ludoguenet" aria-label="Visit my GitHub profile" target="_blank" rel="noopener noreferrer" class="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full glass-effect hover-lift text-slate-600 hover:text-purple-600 hover:scale-110">
              <UIcon name="i-mdi-github" class="text-lg sm:text-xl" />
            </a>
            <a href="https://linkedin.com/in/ludoguenet" aria-label="Visit my LinkedIn profile" target="_blank" rel="noopener noreferrer" class="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full glass-effect hover-lift text-slate-600 hover:text-purple-600 hover:scale-110">
              <UIcon name="i-mdi-linkedin" class="text-lg sm:text-xl" />
            </a>
            <a href="https://x.com/laraveljutsu" aria-label="Visit my Twitter profile" target="_blank" rel="noopener noreferrer" class="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full glass-effect hover-lift text-slate-600 hover:text-purple-600 hover:scale-110">
              <UIcon name="i-mdi-twitter" class="text-lg sm:text-xl" />
            </a>
            <a href="https://www.malt.fr/profile/ludovicguenet" aria-label="Visit my Malt profile" target="_blank" rel="noopener noreferrer" class="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full glass-effect hover-lift text-slate-600 hover:text-purple-600 hover:scale-110">
              <UIcon name="i-mdi-handshake" class="text-lg sm:text-xl" />
            </a>
          </div>
          <a href="mailto:ludo@epekta.com" aria-label="Contact me for freelance missions" class="modern-btn bg-gradient-to-r from-amber-500 to-orange-500 hover:from-purple-600 hover:to-purple-700 text-white font-medium px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm shadow-lg shadow-amber-500/25 hover:shadow-purple-500/25 hover:shadow-xl hover:scale-105 flex items-center gap-2 justify-center sm:justify-end">
            <UIcon name="i-mdi-email-outline" class="text-sm sm:text-base" />
            <span class="font-semibold">HIRE ME</span>
          </a>
        </div>
        <!-- Image and Text Row -->
        <div class="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
          <div class="relative fade-in-up" style="animation-delay: 0.2s;">
            <div class="absolute -inset-8 bg-gradient-to-r from-purple-500/20 via-orange-500/20 to-amber-500/20 rounded-3xl blur-2xl opacity-60 float-animation"/>
                        <div class="relative">
              <NuxtImg
                src="/images/avatar.png"
                alt="Ludovic Guénet"
                class="relative rounded-3xl w-64 sm:w-80 lg:w-96 object-contain shadow-2xl shadow-purple-500/20 hover-lift"
                width="384"
                height="384"
                loading="eager"
                sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
                quality="85"
                placeholder="blur"
                format="webp"
                densities="1x 2x"
                preload
                fetchpriority="high"
                decoding="async"
              />
            </div>
          </div>
          <div class="flex-1 space-y-8 fade-in-up" style="animation-delay: 0.4s;">
            <div class="space-y-6">
              <p class="text-slate-600/80 font-medium tracking-wide">— Hello, I'm Ludovic 👋</p>
              <h1 class="text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.9] tracking-tight">
                <span class="block">THE <span class="gradient-text">*</span></span>
                <span class="block mt-2">
                  <span class="text-slate-900">LEGENDARY</span><br>
                  <span class="gradient-text">SAMURAÏ</span>
                </span>
            </h1>
              <p class="text-xl text-slate-600 max-w-2xl leading-relaxed font-light">
                Available for freelance web development missions.<br>
                <span class="text-slate-800 font-medium">For a modern, efficient, and elegant application.</span>
              </p>
            </div>
            <div class="pt-4">
              <a href="https://linkedin.com/in/ludoguenet" target="_blank" rel="noopener noreferrer" class="modern-btn bg-gradient-to-r from-purple-600 to-purple-700 hover:from-orange-500 hover:to-orange-600 text-white font-medium px-8 py-4 inline-flex items-center gap-2 text-base shadow-lg shadow-purple-500/25 hover:shadow-orange-500/25 hover:shadow-xl hover:scale-105">
                <span>LET'S TALK</span>
                <UIcon name="i-mdi-arrow-right" class="text-lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- About Section -->
    <section class="relative py-24 mt-32 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-700 to-slate-800"/>
      <div class="absolute inset-0 opacity-40" style="background-image: url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"/>
      <div class="relative max-w-6xl mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="space-y-8 fade-in-up">
            <div class="space-y-4">
              <h2 class="text-4xl lg:text-5xl font-black text-white leading-tight">
                <span class="block opacity-80">ABOUT</span>
                <span class="block gradient-text">ME</span>
          </h2>
              <div class="w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"/>
            </div>
            <a href="https://youtube.com/@LaravelJutsu" target="_blank" rel="noopener noreferrer" class="modern-btn bg-gradient-to-r from-orange-500 to-amber-500 hover:from-white hover:to-white text-white hover:text-slate-900 font-medium px-8 py-4 inline-flex items-center gap-2 shadow-lg shadow-orange-500/25 hover:shadow-xl hover:scale-105">
              <span>LEARN MORE</span>
              <UIcon name="i-mdi-arrow-right" class="text-lg" />
            </a>
        </div>
          <div class="space-y-6 fade-in-up" style="animation-delay: 0.2s;">
            <p class="text-2xl lg:text-3xl text-white font-light leading-relaxed">
              I use <span class="font-medium text-orange-400 hover:text-orange-300 transition-colors cursor-default">PHP</span>, <span class="font-medium text-orange-400 hover:text-orange-300 transition-colors cursor-default">Laravel</span>, <span class="font-medium text-orange-400 hover:text-orange-300 transition-colors cursor-default">Vue.js</span> and <span class="font-medium text-orange-400 hover:text-orange-300 transition-colors cursor-default">Nuxt.js</span> daily.
            </p>
            <p class="text-lg text-white/80 leading-relaxed">
          I love creating modern, performant, and elegant web applications. With solid technical expertise and attention to detail, I develop robust and maintainable solutions.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Section -->
    <section class="py-24 bg-gradient-to-br from-[#fef3e2] via-[#fff8f0] to-[#fef3e2]">
      <div class="max-w-6xl mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-16 items-start">
          <div class="space-y-8 fade-in-up">
            <div class="space-y-4">
              <h2 class="text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
                <span class="block">LATEST</span>
                <span class="block gradient-text">ARTICLE</span>
            </h2>
              <div class="w-16 h-1 bg-gradient-to-r from-purple-600 to-orange-500 rounded-full"/>
            </div>
            <NuxtLink to="/blog" class="modern-btn bg-gradient-to-r from-purple-600 to-purple-700 hover:from-orange-500 hover:to-orange-600 text-white font-medium px-8 py-4 inline-flex items-center gap-2 shadow-lg shadow-purple-500/25 hover:shadow-orange-500/25 hover:shadow-xl hover:scale-105">
              <span>ALL ARTICLES</span>
              <UIcon name="i-mdi-arrow-right" class="text-lg" />
            </NuxtLink>
          </div>
          <div class="fade-in-up" style="animation-delay: 0.2s;">
            <div v-if="pending" class="flex items-center justify-center py-16">
              <div class="w-8 h-8 border-2 border-purple-600 border-t-transparent rounded-full animate-spin"/>
            </div>
            <div v-else-if="error" class="text-center py-16">
              <p class="text-slate-600">An error occurred while loading articles.</p>
            </div>
            <div v-else-if="latestPost" class="group">
              <NuxtLink
                :to="latestPost.path"
                class="block bg-white/70 backdrop-blur-md hover-lift p-8 rounded-3xl border border-white/40 shadow-lg shadow-purple-500/10 hover:bg-white/90 hover:border-purple-300/40 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-500"
              >
                <div class="space-y-4">
                  <h3 class="text-2xl lg:text-3xl font-bold text-slate-900 leading-tight group-hover:text-purple-600 transition-colors">
                  {{ latestPost.title }}
                  </h3>
                  <p class="text-lg text-slate-600 leading-relaxed">
                  {{ latestPost.description }}
                </p>
                  <div class="flex items-center gap-6 text-sm text-slate-500">
                  <span>{{ new Date(latestPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}</span>
                    <span class="w-1 h-1 bg-slate-400 rounded-full"/>
                  <span>{{ latestPost.author }}</span>
                  </div>
                  <div class="pt-2">
                    <span class="inline-flex items-center text-purple-600 font-medium">
                      Read article
                      <UIcon name="i-mdi-arrow-right" class="ml-2 text-lg group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </NuxtLink>
            </div>
            <div v-else class="text-center py-16">
              <p class="text-slate-600">No articles yet.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="mt-32 py-16 bg-gradient-to-br from-slate-50 to-white border-t border-slate-100">
      <div class="max-w-6xl mx-auto px-6">
        <!-- Contact CTA Section -->
        <div class="text-center mb-12 fade-in-up">
          <h3 class="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Ready to start your project?</h3>
          <p class="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">Let's discuss your next web development mission and bring your ideas to life.</p>
          <a href="mailto:ludo@epekta.com" aria-label="Contact me for freelance missions" class="modern-btn bg-gradient-to-r from-purple-600 to-purple-700 hover:from-amber-500 hover:to-orange-500 text-white font-semibold px-8 py-4 rounded-full text-base shadow-lg shadow-purple-500/25 hover:shadow-amber-500/25 hover:shadow-xl hover:scale-105 inline-flex items-center gap-3">
            <UIcon name="i-mdi-email-outline" class="text-xl" />
            <span>ludo@epekta.com</span>
            <UIcon name="i-mdi-arrow-right" class="text-lg" />
          </a>
        </div>

        <!-- Footer Bottom -->
        <div class="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-slate-200 fade-in-up" style="animation-delay: 0.2s;">
          <p class="text-sm text-slate-500 font-light">
            © {{ new Date().getFullYear() }} Ludovic Guénet. All rights reserved.
          </p>
          <div class="flex items-center gap-6 stagger-children">
            <a href="https://github.com/ludoguenet" aria-label="Visit my GitHub profile" target="_blank" rel="noopener noreferrer" class="w-10 h-10 flex items-center justify-center rounded-full glass-effect text-slate-600 hover:text-purple-600 hover:scale-110 transition-all">
              <UIcon name="i-mdi-github" class="text-xl" />
            </a>
            <a href="https://www.linkedin.com/in/ludoguenet" aria-label="Visit my LinkedIn profile" target="_blank" rel="noopener noreferrer" class="w-10 h-10 flex items-center justify-center rounded-full glass-effect text-slate-600 hover:text-purple-600 hover:scale-110 transition-all">
              <UIcon name="i-mdi-linkedin" class="text-xl" />
            </a>
            <a href="https://x.com/laraveljutsu" aria-label="Visit my Twitter profile" target="_blank" rel="noopener noreferrer" class="w-10 h-10 flex items-center justify-center rounded-full glass-effect text-slate-600 hover:text-purple-600 hover:scale-110 transition-all">
              <UIcon name="i-mdi-twitter" class="text-xl" />
            </a>
            <a href="https://www.malt.fr/profile/ludovicguenet" aria-label="Visit my Malt profile" target="_blank" rel="noopener noreferrer" class="w-10 h-10 flex items-center justify-center rounded-full glass-effect text-slate-600 hover:text-purple-600 hover:scale-110 transition-all">
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
    { property: 'og:image', content: 'https://laraveljutsu.net/images/avatar.png' },
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:site_name', content: 'LaravelJutsu' },
    { property: 'og:see_also', content: 'https://youtube.com/@LaravelJutsu' },
    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:url', content: 'https://laraveljutsu.net/' },
    { name: 'twitter:title', content: 'Ludovic Guénet - Web Developer Laravel & Vue.js | YouTube & Freelance Missions' },
    { name: 'twitter:description', content: 'Freelance web developer, expert in PHP, Laravel, Vue.js, Nuxt.js. Discover my YouTube channel LaravelJutsu and contact me for freelance missions.' },
    { name: 'twitter:image', content: 'https://laraveljutsu.net/images/avatar.png' },
    { name: 'twitter:site', content: '@laraveljutsu' }
  ],
  link: [
    { rel: 'canonical', href: 'https://laraveljutsu.net/' },
    { rel: 'preload', as: 'image', href: '/images/avatar.png', type: 'image/webp', fetchpriority: 'high' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
    { rel: 'preload', as: 'image', href: '/_vercel/image?url=%2Fimages%2Favatar.png&w=192&q=60', type: 'image/webp', fetchpriority: 'high' }
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

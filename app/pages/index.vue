<template>
  <div class="min-h-screen flex flex-col bg-[#f8f8f3] text-zinc-900 dark:bg-zinc-900 transition-colors duration-300">
    <!-- Hero Section -->
    <div class="py-12 md:py-20">
      <div class="max-w-5xl mx-auto px-4">
        <!-- Icons and Email Row -->
        <div class="flex justify-between items-center mb-8">
          <div class="flex items-center gap-4">
            <a href="https://github.com/ludoguenet" aria-label="GitHub" target="_blank" rel="noopener noreferrer" class="w-8 h-8 flex items-center justify-center rounded-full border border-zinc-500 hover:border-lime-500 text-zinc-500 hover:text-lime-500 transition-colors duration-300">
              <UIcon name="i-lucide-github" class="text-lg" />
            </a>
            <a href="https://linkedin.com/in/ludoguenet" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" class="w-8 h-8 flex items-center justify-center rounded-full border border-zinc-500 hover:border-lime-500 text-zinc-500 hover:text-lime-500 transition-colors duration-300">
              <UIcon name="i-lucide-linkedin" class="text-lg" />
            </a>
            <a href="https://x.com/laraveljutsu" aria-label="Twitter" target="_blank" rel="noopener noreferrer" class="w-8 h-8 flex items-center justify-center rounded-full border border-zinc-500 hover:border-lime-500 text-zinc-500 hover:text-lime-500 transition-colors duration-300">
              <UIcon name="i-lucide-twitter" class="text-lg" />
            </a>
          </div>
          <a href="mailto:ludo@epekta.com" aria-label="Envoyer un email à ludo@epekta.com" class="text-sm font-bold text-zinc-900 dark:text-zinc-200 underline">ludo@epekta.com</a>
        </div>
        <!-- Image and Text Row -->
        <div class="flex flex-col md:flex-row items-center gap-32">
          <div class="flex-shrink-0 relative">
            <div class="absolute -inset-6 bg-lime-500/10 rounded-2xl -rotate-6 pointer-events-none z-0"/>
            <img src="/img/avatar.webp" alt="Ludovic Guénet" class="relative rounded-2xl w-80 h-80 object-cover shadow-lg z-10">
          </div>
          <div class="flex-1 flex flex-col items-start">
            <p class="mb-2 text-zinc-500 dark:text-zinc-300">— Hello, je suis Ludovic 👋</p>
            <h1 class="text-4xl sm:text-5xl md:text-7xl font-black mb-2 leading-tight">
              THE <span class="text-lime-500">*</span><br>
              <span class="text-zinc-900 dark:text-white">LEGENDARY</span> <span class="text-lime-500">SAMURAÏ</span>
            </h1>
            <p class="mb-6 text-lg text-zinc-700 dark:text-zinc-200 max-w-lg">Disponible pour missions freelance développeur web.<br>Pour une application moderne, efficace et élégante.</p>
            <div class="flex flex-row gap-4 mb-4">
              <a href="https://linkedin.com/in/ludoguenet" target="_blank" rel="noopener noreferrer" class="bg-zinc-900 hover:bg-lime-500 text-white hover:text-zinc-900 font-medium px-6 py-2.5 min-w-[140px] text-center rounded-full transition-colors text-sm shadow focus:outline-none focus:ring-2 focus:ring-lime-500">ON EN DISCUTE ?</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- About Section -->
    <section class="bg-lime-500 py-8 md:py-16 mt-16 mb-16">
      <div class="max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-6 px-4">
        <div class="flex-1 flex flex-col items-start mb-8 md:mb-0">
          <h2 class="text-2xl md:text-3xl font-black text-zinc-900 mb-4 flex items-end gap-2 uppercase tracking-wider">
            <span class="font-black">A PROPOS DE</span>
            <span class="italic font-black text-white">MOI</span>
          </h2>
          <a href="https://youtube.com/@LaravelJutsu" target="_blank" rel="noopener noreferrer" class="bg-zinc-900 hover:bg-white text-white hover:text-zinc-900 font-medium px-6 py-2.5 min-w-[140px] text-center rounded-full transition-colors text-sm shadow mt-2 focus:outline-none focus:ring-2 focus:ring-lime-500">EN SAVOIR PLUS</a>
        </div>
        <div class="flex-1 text-xl md:text-2xl text-zinc-900 font-black">
          J'utilise quotidiennement <span class="font-normal underline">PHP</span>, <span class="font-normal underline">Laravel</span>, <span class="font-normal underline">Vue.js</span> et <span class="font-normal underline">Nuxt.js</span> depuis des années.<br>
          J'aime créer des applications web modernes, performantes et élégantes. Avec une expertise technique solide et une attention particulière aux détails, je développe des solutions robustes et maintenables.
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="mt-auto py-6 border-t border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800">
      <div class="max-w-5xl mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-sm text-zinc-500 dark:text-zinc-400">
            © {{ new Date().getFullYear() }} Ludovic Guénet. Tous droits réservés.
          </p>
          <div class="flex items-center gap-4">
            <a href="https://github.com/ludoguenet" target="_blank" rel="noopener noreferrer" class="text-zinc-500 hover:text-lime-500 dark:text-zinc-400 dark:hover:text-lime-500 transition-colors">
              <UIcon name="i-lucide-github" class="text-xl" />
            </a>
            <a href="https://www.linkedin.com/in/ludoguenet" target="_blank" rel="noopener noreferrer" class="text-zinc-500 hover:text-lime-500 dark:text-zinc-400 dark:hover:text-lime-500 transition-colors">
              <UIcon name="i-lucide-linkedin" class="text-xl" />
            </a>
            <a href="https://x.com/laraveljutsu" target="_blank" rel="noopener noreferrer" class="text-zinc-500 hover:text-lime-500 dark:text-zinc-400 dark:hover:text-lime-500 transition-colors">
              <UIcon name="i-lucide-twitter" class="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Page inspirée du template fourni, tout en français
useHead({
  htmlAttrs: { lang: 'fr' },
  title: 'Ludovic Guénet - Développeur Web Laravel & Vue.js | YouTube & Missions Freelance',
  meta: [
    { name: 'description', content: 'Développeur web freelance, expert PHP, Laravel, Vue.js, Nuxt.js. Découvrez ma chaîne YouTube LaravelJutsu et contactez-moi pour vos missions freelance.' },
    { name: 'keywords', content: 'développeur web, freelance, PHP, Laravel, Vue.js, Nuxt.js, application web, YouTube, missions freelance' },
    { name: 'author', content: 'Ludovic Guénet' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'robots', content: 'index, follow' },
    // Open Graph / Facebook
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://laraveljutsu.com/' },
    { property: 'og:title', content: 'Ludovic Guénet - Développeur Web Laravel & Vue.js | YouTube & Missions Freelance' },
    { property: 'og:description', content: 'Développeur web freelance, expert PHP, Laravel, Vue.js, Nuxt.js. Découvrez ma chaîne YouTube LaravelJutsu et contactez-moi pour vos missions freelance.' },
    { property: 'og:image', content: 'https://laraveljutsu.com/img/avatar.webp' },
    { property: 'og:locale', content: 'fr_FR' },
    { property: 'og:site_name', content: 'LaravelJutsu' },
    { property: 'og:see_also', content: 'https://youtube.com/@LaravelJutsu' },
    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:url', content: 'https://laraveljutsu.com/' },
    { name: 'twitter:title', content: 'Ludovic Guénet - Développeur Web Laravel & Vue.js | YouTube & Missions Freelance' },
    { name: 'twitter:description', content: 'Développeur web freelance, expert PHP, Laravel, Vue.js, Nuxt.js. Découvrez ma chaîne YouTube LaravelJutsu et contactez-moi pour vos missions freelance.' },
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
        "jobTitle": "Développeur Web Freelance",
        "description": "Développeur web freelance, expert PHP, Laravel, Vue.js, Nuxt.js. Découvrez ma chaîne YouTube LaravelJutsu et contactez-moi pour vos missions freelance."
      })
    }
  ]
})
</script>

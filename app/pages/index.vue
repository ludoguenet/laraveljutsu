<template>
  <div class="min-h-screen flex flex-col bg-[#f8f8f3] text-zinc-900 dark:bg-zinc-900 transition-colors duration-300">
    <!-- Hero Section -->
    <div class="py-12 md:py-20">
      <div class="max-w-5xl mx-auto px-4">
        <!-- Icons and Email Row -->
        <div class="flex justify-between items-center mb-8">
          <div class="flex items-center gap-4">
            <a href="https://github.com/ludoguenet" target="_blank" rel="noopener noreferrer" class="text-zinc-500 hover:text-lime-500"><UIcon name="i-lucide-github" class="text-xl" /></a>
            <a href="https://linkedin.com/in/ludoguenet" target="_blank" rel="noopener noreferrer" class="text-zinc-500 hover:text-lime-500"><UIcon name="i-lucide-linkedin" class="text-xl" /></a>
            <a href="https://x.com/laraveljutsu" target="_blank" rel="noopener noreferrer" class="text-zinc-500 hover:text-lime-500"><UIcon name="i-lucide-twitter" class="text-xl" /></a>
          </div>
          <span class="text-sm font-semibold text-zinc-500">ludo@epekta.com</span>
        </div>
        <!-- Image and Text Row -->
        <div class="flex flex-col md:flex-row items-center gap-12">
          <div class="flex-shrink-0">
            <img src="/img/avatar.webp" alt="Ludovic Guénet" class="rounded-2xl w-64 h-64 object-cover shadow-lg border-4 border-white" >
          </div>
          <div class="flex-1 flex flex-col items-start">
            <p class="mb-2 text-zinc-500 dark:text-zinc-300">Hello, je suis Ludovic <span>🪃</span></p>
            <h1 class="text-5xl md:text-6xl font-black mb-2 leading-tight">
              THE <span class="text-lime-500">*</span><br>
              <span class="text-zinc-900 dark:text-white">LEGENDARY</span> <span class="text-lime-500">SAMURAÏ</span>
            </h1>
            <p class="mb-6 text-lg text-zinc-600 dark:text-zinc-300 max-w-lg">Disponible pour missions freelance développeur web.<br>Pour une application moderne, efficace et élégante.</p>
            <a href="https://linkedin.com/in/ludoguenet" target="_blank" rel="noopener noreferrer" class="bg-zinc-900 hover:bg-lime-500 text-white hover:text-zinc-900 font-semibold px-8 py-3 rounded-full transition-colors text-lg shadow">ON EN DISCUTE ?</a>
          </div>
        </div>
      </div>
    </div>

    <!-- About Section -->
    <section class="bg-lime-500 py-16">
      <div class="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
        <div class="flex-1 flex flex-col items-start mb-8 md:mb-0">
          <h2 class="text-3xl font-black text-zinc-900 mb-4">ABOUT <span class="italic text-white">ME</span></h2>
          <a href="https://youtube.com/@LaravelJutsu" target="_blank" rel="noopener noreferrer" class="bg-zinc-900 hover:bg-white text-white hover:text-lime-500 font-semibold px-6 py-3 rounded-full transition-colors text-lg shadow">EN SAVOIR PLUS</a>
        </div>
        <div class="flex-1 text-lg text-white">
          Je suis un expert en <span class="underline font-semibold">PHP</span>, <span class="underline font-semibold">Laravel</span>, <span class="underline font-semibold">Vue.js</span> et <span class="underline font-semibold">Nuxt.js</span>.<br>
          J'aime créer des applications web modernes, performantes et élégantes. Avec une expertise technique solide et une attention particulière aux détails, je développe des solutions robustes et maintenables.
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="mt-auto py-6 border-t border-zinc-200 dark:border-zinc-700">
      <div class="max-w-5xl mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-sm text-zinc-500 dark:text-zinc-400">
            © 2024 Ludovic Guénet. Tous droits réservés.
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
  title: 'Ludovic Guénet - Développeur Web Laravel & Vue.js',
  meta: [
    { name: 'description', content: 'Développeur web freelance expert en PHP, Laravel, Vue.js et Nuxt.js. Création d\'applications web modernes, performantes et élégantes.' },
    { name: 'keywords', content: 'développeur web, freelance, PHP, Laravel, Vue.js, Nuxt.js, application web' },
    { name: 'author', content: 'Ludovic Guénet' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'robots', content: 'index, follow' },
    // Open Graph / Facebook
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://laraveljutsu.com/' },
    { property: 'og:title', content: 'Ludovic Guénet - Développeur Web Laravel & Vue.js' },
    { property: 'og:description', content: 'Développeur web freelance expert en PHP, Laravel, Vue.js et Nuxt.js. Création d\'applications web modernes, performantes et élégantes.' },
    { property: 'og:image', content: 'https://laraveljutsu.com/img/avatar.webp' },
    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:url', content: 'https://laraveljutsu.com/' },
    { name: 'twitter:title', content: 'Ludovic Guénet - Développeur Web Laravel & Vue.js' },
    { name: 'twitter:description', content: 'Développeur web freelance expert en PHP, Laravel, Vue.js et Nuxt.js. Création d\'applications web modernes, performantes et élégantes.' },
    { name: 'twitter:image', content: 'https://laraveljutsu.com/img/avatar.webp' }
  ],
  link: [
    { rel: 'canonical', href: 'https://laraveljutsu.com/' }
  ]
})
</script>

<template>
    <div class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <UContainer class="py-8 px-4">
        <div class="flex flex-col items-center relative">
          <!-- Dark mode toggle -->
          <div class="absolute top-0 right-0">
            <UButton color="gray" variant="ghost" :icon="isDark ? 'i-lucide-sun' : 'i-lucide-moon'"
              @click="isDark = !isDark" aria-label="Toggle dark mode"
              class="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full" />
          </div>

          <!-- Logo section -->
          <div class="mb-6">
            <img src="/img/logo.svg" alt="Logo" class="size-24" />
          </div>

          <!-- Header text with minimal styling -->
          <h1 class="text-3xl md:text-4xl font-bold text-center mb-3">
            <span class="text-primary-500 dark:text-primary-400">Code.</span>
            Create
            <span class="text-primary-500 dark:text-primary-400">Inspire.</span>
          </h1>

          <p class="text-gray-600 dark:text-gray-400 text-center mb-6 max-w-md">
            Essential resources to master Laravel and Nuxt.
          </p>

          <!-- Action buttons with minimal styling -->
          <div class="flex gap-3 justify-center mb-12">
            <UButton to="https://www.youtube.com/@LaravelJutsu" target="_blank" rel="noopener noreferrer"
              color="primary" icon="i-lucide-youtube" size="md">
              YouTube
            </UButton>

            <UButton to="https://github.com/ludoguenet" target="_blank" rel="noopener noreferrer"
              variant="outline" icon="i-lucide-github" size="md"
              class="dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800">
              GitHub
            </UButton>
          </div>

          <!-- Consulting Section -->
          <div class="w-full max-w-4xl mx-auto mb-12">
            <div class="flex items-center gap-4 mb-8">
              <div class="h-px bg-gray-200 dark:bg-gray-800 flex-grow"></div>
              <h2 class="text-xl font-bold text-gray-800 dark:text-gray-200">Consulting</h2>
              <div class="h-px bg-gray-200 dark:bg-gray-800 flex-grow"></div>
            </div>

            <div class="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-lg p-6 text-center">
              <UIcon name="i-lucide-calendar" class="size-12 mx-auto mb-4 text-primary-500 dark:text-primary-400" />
              <h3 class="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">Need Expert Guidance?</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-6 max-w-lg mx-auto">
                Book a one-on-one consulting session to discuss your Laravel and Nuxt projects, architecture decisions, or get personalized mentoring.
              </p>
              <UButton
                to="https://cal.com/laraveljutsu"
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
                icon="i-lucide-calendar"
                size="lg"
              >
                Schedule Consultation
              </UButton>
            </div>
          </div>

          <!-- Uses section with minimalist approach -->
          <div class="w-full max-w-4xl mx-auto">
            <!-- Section header -->
            <div class="flex items-center gap-4 mb-8">
              <div class="h-px bg-gray-200 dark:bg-gray-800 flex-grow"></div>
              <h2 class="text-xl font-bold text-gray-800 dark:text-gray-200">Uses</h2>
              <div class="h-px bg-gray-200 dark:bg-gray-800 flex-grow"></div>
            </div>

            <!-- Uses content with clean grid layout -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <!-- Editor Section -->
              <div class="space-y-4">
                <div class="flex items-center gap-2 mb-3">
                  <UIcon name="i-lucide-code" class="text-primary-500 dark:text-primary-400 size-5" />
                  <h3 class="text-lg font-semibold">Editor</h3>
                </div>

                <div v-for="(item, index) in usesData.editor" :key="index"
                  class="p-3 rounded-lg border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
                  <div class="flex items-start gap-2">
                    <UIcon :name="getItemIcon('editor', item.name)"
                      class="mt-1 text-gray-500 dark:text-gray-400 size-4" />
                    <div>
                      <span class="font-medium text-gray-900 dark:text-gray-100">{{ item.name }}</span>
                      <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">{{ item.description }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Apps Section -->
              <div class="space-y-4">
                <div class="flex items-center gap-2 mb-3">
                  <UIcon name="i-lucide-monitor" class="text-primary-500 dark:text-primary-400 size-5" />
                  <h3 class="text-lg font-semibold">Apps</h3>
                </div>

                <div v-for="(item, index) in usesData.apps" :key="index"
                  class="p-3 rounded-lg border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
                  <div class="flex items-start gap-2">
                    <UIcon :name="getItemIcon('apps', item.name)"
                      class="mt-1 text-gray-500 dark:text-gray-400 size-4" />
                    <div>
                      <span class="font-medium text-gray-900 dark:text-gray-100">{{ item.name }}</span>
                      <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">{{ item.description }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Hardware Section -->
              <div class="space-y-4">
                <div class="flex items-center gap-2 mb-3">
                  <UIcon name="i-lucide-laptop" class="text-primary-500 dark:text-primary-400 size-5" />
                  <h3 class="text-lg font-semibold">Hardware</h3>
                </div>

                <div v-for="(item, index) in usesData.hardware" :key="index"
                  class="p-3 rounded-lg border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
                  <div class="flex items-start gap-2">
                    <UIcon :name="getItemIcon('hardware', item.name)"
                      class="mt-1 text-gray-500 dark:text-gray-400 size-4" />
                    <div>
                      <span class="font-medium text-gray-900 dark:text-gray-100">{{ item.name }}</span>
                      <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">{{ item.description }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- VSCode Settings Link with minimal styling -->
            <div class="flex justify-center">
              <UButton to="https://gist.github.com/ludoguenet/b5fef1fe56200a48925fe6f88d9d245a" target="_blank"
                rel="noopener noreferrer" variant="soft" icon="i-lucide-download" size="sm"
                class="dark:text-gray-300 dark:hover:bg-gray-800">
                VSCode Settings
              </UButton>
            </div>
          </div>

          <!-- Latest YouTube Video Section with minimalist styling -->
          <div class="w-full max-w-4xl mx-auto mt-12">
            <!-- Section header -->
            <div class="flex items-center gap-4 mb-8">
              <div class="h-px bg-gray-200 dark:bg-gray-800 flex-grow"></div>
              <h2 class="text-xl font-bold text-gray-800 dark:text-gray-200">Latest Video</h2>
              <div class="h-px bg-gray-200 dark:bg-gray-800 flex-grow"></div>
            </div>

            <!-- Video container with minimal styling -->
            <div v-if="video" class="bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800 overflow-hidden">
              <!-- Video embed -->
              <div class="aspect-video w-full">
                <iframe
                  :src="`https://www.youtube.com/embed/${video.id}`"
                  class="w-full h-full"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>

              <!-- Video details -->
              <div class="p-4">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{{ video.title }}</h3>
                <div class="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                  <UIcon name="i-lucide-calendar" class="size-4" />
                  <span>{{ video.published }}</span>
                </div>

                <!-- Watch on YouTube button -->
                <div class="mt-3">
                  <UButton
                    :to="`https://www.youtube.com/watch?v=${video.id}`"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="error"
                    icon="i-lucide-youtube"
                    size="sm"
                  >
                    Watch on YouTube
                  </UButton>
                </div>
              </div>
            </div>

            <!-- Loading state -->
            <div v-else class="flex flex-col items-center justify-center p-8 bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800">
              <UProgress animation="swing" color="primary" />
            </div>

            <!-- More videos link -->
            <div class="flex justify-center mt-4">
              <UButton
                to="https://www.youtube.com/@LaravelJutsu"
                target="_blank"
                rel="noopener noreferrer"
                variant="soft"
                icon="i-lucide-video"
                size="sm"
                class="dark:text-gray-300 dark:hover:bg-gray-800"
              >
                View More Videos
              </UButton>
            </div>
          </div>

          <!-- Improved Footer with better mobile styling -->
          <footer class="mt-12 w-full max-w-4xl mx-auto">
            <!-- Divider -->
            <div class="flex items-center gap-4 mb-6">
              <div class="h-px bg-gray-200 dark:bg-gray-800 flex-grow"></div>
            </div>

            <!-- Copyright and tagline -->
            <div class="text-center mb-4">
              <p class="text-sm text-gray-500 dark:text-gray-400">
                &copy; {{ new Date().getFullYear() }} Laravel Jutsu
                <span class="mx-2 hidden sm:inline">•</span>
                <span class="block sm:inline mt-1 sm:mt-0">Made with <span class="text-primary-500 dark:text-primary-400">💚</span></span>
              </p>
            </div>

            <!-- Social links - grid for mobile, flex for desktop -->
            <div class="grid grid-cols-3 sm:flex sm:flex-wrap sm:justify-center gap-y-3 gap-x-4 sm:gap-6 mb-6">
              <a href="https://www.youtube.com/@LaravelJutsu" target="_blank" rel="noopener noreferrer"
                class="flex justify-center items-center hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                <UIcon name="i-lucide-youtube" class="size-5 sm:size-4 mr-2" />
              </a>
              <a href="https://github.com/ludoguenet" target="_blank" rel="noopener noreferrer"
                class="flex justify-center items-center hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                <UIcon name="i-lucide-github" class="size-5 sm:size-4 mr-2" />
              </a>
              <a href="https://twitter.com/LaravelJutsu" target="_blank" rel="noopener noreferrer"
                class="flex justify-center items-center hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                <UIcon name="i-lucide-twitter" class="size-5 sm:size-4 mr-2" />
              </a>
              <a href="https://bsky.app/profile/laraveljutsu.bsky.social" target="_blank" rel="noopener noreferrer"
                class="flex justify-center items-center hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                <UIcon name="i-lucide-cloud" class="size-5 sm:size-4 mr-2" />
              </a>
              <a href="https://www.linkedin.com/in/ludoguenet/" target="_blank" rel="noopener noreferrer"
                class="flex justify-center items-center hover:text-primary-500 dark:hover:text-primary-400 transition-colors col-span-3 sm:col-span-1">
                <UIcon name="i-lucide-linkedin" class="size-5 sm:size-4 mr-2" />
              </a>
            </div>

            <!-- Back to top button -->
            <div class="flex justify-center">
              <UButton
                variant="ghost"
                color="gray"
                icon="i-lucide-arrow-up"
                size="sm"
                @click="scrollToTop"
                class="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
                aria-label="Back to top"
              />
            </div>
          </footer>
        </div>
      </UContainer>
    </div>
  </template>

  <script setup>
  import { ref, onMounted, computed } from 'vue';

  const video = ref(null);

  const fetchLatestVideo = async () => {
    try {
      const response = await fetch('/api/latest-video');
      const xmlText = await response.text();

      const parser = new DOMParser();
      const xml = parser.parseFromString(xmlText, 'text/xml');

      const latestEntry = xml.querySelector('entry');

      if (! latestEntry) {
        console.error('No entries found in RSS feed');
        return;
      }

      const videoIdElement = latestEntry.querySelector('yt\\:videoId, videoId');
      const titleElement = latestEntry.querySelector('title');
      const publishedElement = latestEntry.querySelector('published');

      if (!videoIdElement || !titleElement || !publishedElement) {
        console.error('Missing elements in the XML feed');
        return;
      }

      video.value = {
        id: videoIdElement.textContent,
        title: titleElement.textContent,
        published: new Date(publishedElement.textContent).toLocaleDateString(),
      };
    } catch (error) {
      console.error('Error fetching video:', error);
    }
  };

  onMounted(fetchLatestVideo);

  const colorMode = useColorMode();

  const isDark = computed({
    get() {
      return colorMode.value === 'dark'
    },
    set() {
      colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    }
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useHead({
    title: 'Laravel Jutsu - Master Laravel & Nuxt',
    meta: [
      { name: 'description', content: 'Essential resources to master Laravel and Nuxt.' },
      { name: 'keywords', content: 'Laravel, Nuxt, Web Development, Tutorials, Consulting' },
      { name: 'author', content: 'Laravel Jutsu' },
      { property: 'og:title', content: 'Laravel Jutsu - Master Laravel & Nuxt' },
      { property: 'og:description', content: 'Essential resources to master Laravel and Nuxt.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://www.laraveljutsu.net' },
      { property: 'og:image', content: 'https://www.laraveljutsu.net/img/logo.svg' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Laravel Jutsu - Master Laravel & Nuxt' },
      { name: 'twitter:description', content: 'Essential resources to master Laravel and Nuxt.' },
      { name: 'twitter:image', content: 'https://www.laraveljutsu.net/img/logo.svg' }
    ],
    link: [
      { rel: 'canonical', href: 'https://www.laraveljutsu.net' }
    ]
  });

  const usesData = {
    editor: [
      { name: "Visual Studio Code", description: "With minimal settings" },
      { name: "Font", description: "JetBrains Mono" },
      { name: "Theme", description: "Xiaolu Abei Light" },
      { name: "Icons", description: "Seti Icons" }
    ],
    apps: [
      { name: "Browser", description: "Brave" },
      { name: "Valet Linux Plus", description: "Local development environment" },
      { name: "Adminer", description: "Database management" },
      { name: "Insomnia", description: "API client and testing tool" }
    ],
    hardware: [
      { name: "Computer", description: "Lenovo ThinkPad P16s Gen 3" },
      { name: "Memory", description: "32 GB RAM" },
      { name: "Storage", description: "1TB SK Hynix SSD" },
      { name: "Display", description: "15.6\" 1920x1200 IPS" },
      { name: "Keyboard", description: "Logitech Wireless Keyboard" },
      { name: "Mouse", description: "Logitech Wireless Mouse" }
    ]
  };

  const getItemIcon = (category, name) => {
    if (category === 'hardware') {
      if (name.includes('Microphone')) return 'i-lucide-mic';
      if (name.includes('Headphones')) return 'i-lucide-headphones';
      if (name.includes('Keyboard')) return 'i-lucide-keyboard';
      if (name.includes('Camera')) return 'i-lucide-camera';
      if (name.includes('Display')) return 'i-lucide-monitor';
      if (name.includes('Mouse')) return 'i-lucide-mouse-pointer';
      return 'i-lucide-cpu';
    }

    if (category === 'editor') {
      if (name.includes('Visual Studio')) return 'i-lucide-code';
      if (name.includes('Font')) return 'i-lucide-type';
      if (name.includes('Theme')) return 'i-lucide-palette';
      if (name.includes('Icons')) return 'i-lucide-image';
      return 'i-lucide-file-code';
    }

    if (category === 'apps') {
      if (name.includes('Browser')) return 'i-lucide-globe';
      if (name.includes('Valet')) return 'i-lucide-server';
      if (name.includes('Adminer')) return 'i-lucide-database';
      if (name.includes('Insomnia')) return 'i-lucide-network';
      return 'i-lucide-app-window';
    }

    return null;
  };
  </script>

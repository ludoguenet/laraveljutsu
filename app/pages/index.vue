<template>
    <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 transition-colors duration-300">
        <UContainer class="py-12 px-4">
            <div class="flex flex-col items-center relative">
                <!-- Dark mode toggle -->
                <div class="absolute top-0 right-0">
                    <UButton color="gray" variant="ghost" :icon="isDark ? 'i-lucide-sun' : 'i-lucide-moon'"
                        @click="isDark = !isDark" aria-label="Toggle dark mode"
                        class="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full" />
                </div>

                <!-- Logo section without animation -->
                <div class="mb-8">
                    <img src="/img/logo.svg" alt="Logo" class="size-36" />
                </div>

                <!-- Header text with enhanced styling -->
                <h1 class="text-4xl md:text-5xl font-bold text-center mb-4 tracking-tight">
                    <span class="text-primary-500 dark:text-primary-400">Code.</span>
                    <span class="relative">
                        Create
                        <span class="absolute bottom-1 left-0 w-full h-1 bg-primary-500/20 dark:bg-primary-400/20 rounded-full"></span>
                    </span>
                    <span class="text-primary-500 dark:text-primary-400">Inspire.</span>
                </h1>

                <p class="text-gray-600 dark:text-gray-400 text-center mb-8 max-w-md text-lg">
                    Essential resources to master Laravel and Nuxt.
                </p>

                <!-- Action buttons with enhanced styling -->
                <div class="flex flex-wrap gap-4 justify-center mb-16">
                    <UButton to="https://www.youtube.com/@LaravelJutsu" target="_blank" rel="noopener noreferrer"
                        color="primary" icon="i-lucide-youtube" size="lg" class="shadow-sm hover:shadow-md transition-shadow">
                        YouTube
                    </UButton>

                    <UButton to="https://github.com/ludoguenet" target="_blank" rel="noopener noreferrer"
                        variant="outline" icon="i-lucide-github" size="lg"
                        class="dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
                        GitHub
                    </UButton>
                </div>

                <!-- Uses section with redesigned minimalist approach -->
                <div class="w-full max-w-5xl mx-auto">
                    <!-- Section header -->
                    <div class="flex items-center gap-4 mb-12">
                        <div class="h-px bg-gray-200 dark:bg-gray-800 flex-grow"></div>
                        <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-200">Uses</h2>
                        <div class="h-px bg-gray-200 dark:bg-gray-800 flex-grow"></div>
                    </div>

                    <!-- Uses content with modern grid layout -->
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <!-- Editor Section -->
                        <div class="space-y-6">
                            <div class="flex items-center gap-3 mb-4">
                                <UIcon name="i-lucide-code" class="text-primary-500 dark:text-primary-400 size-6" />
                                <h3 class="text-xl font-semibold">Editor</h3>
                            </div>

                            <div v-for="(item, index) in usesData.editor" :key="index"
                                class="group p-4 rounded-lg border border-gray-100 dark:border-gray-800 hover:border-primary-200 dark:hover:border-primary-800 transition-all duration-300 hover:shadow-soft bg-white dark:bg-gray-900/50 backdrop-blur-sm">
                                <div class="flex items-start gap-3">
                                    <UIcon :name="getItemIcon('editor', item.name)"
                                        class="mt-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors size-5" />
                                    <div>
                                        <span class="font-medium text-gray-900 dark:text-gray-100">{{ item.name }}</span>
                                        <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">{{ item.description }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Apps Section -->
                        <div class="space-y-6">
                            <div class="flex items-center gap-3 mb-4">
                                <UIcon name="i-lucide-monitor" class="text-primary-500 dark:text-primary-400 size-6" />
                                <h3 class="text-xl font-semibold">Apps</h3>
                            </div>

                            <div v-for="(item, index) in usesData.apps" :key="index"
                                class="group p-4 rounded-lg border border-gray-100 dark:border-gray-800 hover:border-primary-200 dark:hover:border-primary-800 transition-all duration-300 hover:shadow-soft bg-white dark:bg-gray-900/50 backdrop-blur-sm">
                                <div class="flex items-start gap-3">
                                    <UIcon :name="getItemIcon('apps', item.name)"
                                        class="mt-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors size-5" />
                                    <div>
                                        <span class="font-medium text-gray-900 dark:text-gray-100">{{ item.name }}</span>
                                        <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">{{ item.description }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Hardware Section -->
                        <div class="space-y-6">
                            <div class="flex items-center gap-3 mb-4">
                                <UIcon name="i-lucide-laptop" class="text-primary-500 dark:text-primary-400 size-6" />
                                <h3 class="text-xl font-semibold">Hardware</h3>
                            </div>

                            <div v-for="(item, index) in usesData.hardware" :key="index"
                                class="group p-4 rounded-lg border border-gray-100 dark:border-gray-800 hover:border-primary-200 dark:hover:border-primary-800 transition-all duration-300 hover:shadow-soft bg-white dark:bg-gray-900/50 backdrop-blur-sm">
                                <div class="flex items-start gap-3">
                                    <UIcon :name="getItemIcon('hardware', item.name)"
                                        class="mt-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors size-5" />
                                    <div>
                                        <span class="font-medium text-gray-900 dark:text-gray-100">{{ item.name }}</span>
                                        <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">{{ item.description }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- VSCode Settings Link with enhanced styling -->
                    <div class="flex justify-center">
                        <UButton to="https://gist.github.com/ludoguenet/b5fef1fe56200a48925fe6f88d9d245a" target="_blank"
                            rel="noopener noreferrer" variant="soft" icon="i-lucide-download" size="md"
                            class="dark:text-gray-300 dark:hover:bg-gray-800 transition-colors">
                            VSCode Settings
                        </UButton>
                    </div>
                </div>

                <!-- Latest YouTube Video Section with enhanced styling -->
                <div class="w-full max-w-5xl mx-auto mt-16">
                    <!-- Section header with same style as Uses section -->
                    <div class="flex items-center gap-4 mb-12">
                        <div class="h-px bg-gray-200 dark:bg-gray-800 flex-grow"></div>
                        <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-200">Latest Video</h2>
                        <div class="h-px bg-gray-200 dark:bg-gray-800 flex-grow"></div>
                    </div>

                    <!-- Video container with consistent styling -->
                    <div v-if="video" class="bg-white dark:bg-gray-900/50 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                        <!-- Video embed with proper responsive sizing -->
                        <div class="aspect-video w-full">
                            <iframe
                                :src="`https://www.youtube.com/embed/${video.id}`"
                                class="w-full h-full"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                        </div>

                        <!-- Video details with consistent styling -->
                        <div class="p-6">
                            <h3 class="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{{ video.title }}</h3>
                            <div class="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                <UIcon name="i-lucide-calendar" class="size-4" />
                                <span>Published on {{ video.published }}</span>
                            </div>

                            <!-- Watch on YouTube button -->
                            <div class="mt-4">
                                <UButton
                                    :to="`https://www.youtube.com/watch?v=${video.id}`"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    color="primary"
                                    icon="i-lucide-youtube"
                                    size="md"
                                    class="shadow-sm hover:shadow-md transition-shadow"
                                >
                                    Watch on YouTube
                                </UButton>
                            </div>
                        </div>
                    </div>

                    <!-- Loading state with consistent styling -->
                    <div v-else class="flex flex-col items-center justify-center p-12 bg-white dark:bg-gray-900/50 rounded-xl border border-gray-100 dark:border-gray-800">
                        <UIcon name="i-lucide-loader" class="size-8 text-primary-500 dark:text-primary-400 animate-spin mb-4" />
                        <p class="text-gray-600 dark:text-gray-400">Loading latest video...</p>
                    </div>

                    <!-- More videos link -->
                    <div class="flex justify-center mt-6">
                        <UButton
                            to="https://www.youtube.com/@LaravelJutsu"
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="soft"
                            icon="i-lucide-video"
                            size="md"
                            class="dark:text-gray-300 dark:hover:bg-gray-800 transition-colors"
                        >
                            View More Videos
                        </UButton>
                    </div>
                </div>

                <!-- Footer with enhanced styling and additional social links -->
                <div class="mt-16 text-sm text-gray-500 dark:text-gray-400 flex flex-col items-center gap-3">
                    <div class="flex items-center gap-3">
                        <span>&copy; {{ new Date().getFullYear() }} Laravel Jutsu</span>
                        <span class="text-gray-400 dark:text-gray-500">•</span>
                        <span>Made with <span class="text-primary-500 dark:text-primary-400">💚</span> and passion</span>
                    </div>
                    <div class="flex flex-wrap items-center justify-center gap-4 mt-2">
                        <a href="https://www.youtube.com/@LaravelJutsu" target="_blank" rel="noopener noreferrer"
                            class="hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex items-center gap-2">
                            <UIcon name="i-lucide-youtube" class="size-4" />
                            YouTube
                        </a>
                        <a href="https://github.com/ludoguenet" target="_blank" rel="noopener noreferrer"
                            class="hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex items-center gap-2">
                            <UIcon name="i-lucide-github" class="size-4" />
                            GitHub
                        </a>
                        <a href="https://twitter.com/LaravelJutsu" target="_blank" rel="noopener noreferrer"
                            class="hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex items-center gap-2">
                            <UIcon name="i-lucide-twitter" class="size-4" />
                            Twitter
                        </a>
                        <a href="https://bsky.app/profile/laraveljutsu.bsky.social" target="_blank" rel="noopener noreferrer"
                            class="hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex items-center gap-2">
                            <UIcon name="i-lucide-cloud" class="size-4" />
                            Bluesky
                        </a>
                        <a href="https://www.linkedin.com/in/ludoguenet/" target="_blank" rel="noopener noreferrer"
                            class="hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex items-center gap-2">
                            <UIcon name="i-lucide-linkedin" class="size-4" />
                            LinkedIn
                        </a>
                    </div>
                </div>
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

useHead({
    title: 'Laravel Jutsu - Master Laravel & Nuxt',
    meta: [
        { name: 'description', content: 'Essential resources to master Laravel and Nuxt. Explore tutorials, tools, and inspiration for web development.' },
        { name: 'keywords', content: 'Laravel, Nuxt, Web Development, Tutorials, Coding, Inspiration' },
        { name: 'author', content: 'Laravel Jutsu' },
        { property: 'og:title', content: 'Laravel Jutsu - Master Laravel & Nuxt' },
        { property: 'og:description', content: 'Essential resources to master Laravel and Nuxt. Explore tutorials, tools, and inspiration for web development.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://www.laraveljutsu.net' },
        { property: 'og:image', content: 'https://www.laraveljutsu.net/img/logo.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Laravel Jutsu - Master Laravel & Nuxt' },
        { name: 'twitter:description', content: 'Essential resources to master Laravel and Nuxt. Explore tutorials, tools, and inspiration for web development.' },
        { name: 'twitter:image', content: 'https://www.laraveljutsu.net/img/logo.png' }
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
        { name: "Computer", description: "Lenovo ThinkPad P16s Gen 3 with Intel Core Ultra 9 185H" },
        { name: "Memory", description: "32 GB RAM" },
        { name: "Storage", description: "1TB SK Hynix SSD" },
        { name: "Display", description: "15.6\" 1920x1200 IPS" },
        { name: "Keyboard", description: "Logitech Wireless Keyboard" },
        { name: "Mouse", description: "Logitech Wireless Mouse B330/M330/M331" }
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

<template>
    <div class="min-h-screen bg-white dark:bg-zinc-900 transition-colors duration-300">
        <!-- Hero Section -->
        <div class="relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-lime-50 to-lime-100 dark:from-zinc-800 dark:to-zinc-900 opacity-50" />
            <UContainer class="relative py-32">
                <!-- Dark mode toggle -->
                <div class="absolute top-4 right-4">
                    <UButton
                        color="gray"
                        variant="ghost"
                        :icon="isDark ? 'i-lucide-sun' : 'i-lucide-moon'"
                        aria-label="Basculer en mode sombre"
                        class="hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-all duration-300 transform hover:scale-105"
                        @click="isDark = !isDark"
                    />
                </div>
                <div class="max-w-3xl mx-auto text-center">
                    <div class="flex justify-center mb-8">
                        <img src="/img/logo.svg" alt="Logo" class="size-16 transform transition-transform duration-500 hover:scale-110">
                    </div>
                    <h1 class="text-5xl md:text-6xl font-bold mb-6">
                        <span class="bg-clip-text text-transparent bg-gradient-to-r from-lime-600 to-lime-400 dark:from-lime-400 dark:to-lime-200">Laravel Jutsu</span>
                    </h1>
                    <p class="text-xl text-zinc-600 dark:text-zinc-400 mb-12">
                        Maîtriser Laravel & Nuxt avec élégance
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                        <UButton
                            to="https://www.youtube.com/@LaravelJutsu"
                            target="_blank"
                            rel="noopener noreferrer"
                            color="primary"
                            icon="i-lucide-youtube"
                            size="lg"
                            class="transform transition-all duration-300 hover:scale-105"
                        >
                            YouTube
                        </UButton>
                        <UButton
                            to="https://github.com/ludoguenet"
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="outline"
                            icon="i-lucide-github"
                            size="lg"
                            class="dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800 transform transition-all duration-300 hover:scale-105"
                        >
                            GitHub
                        </UButton>
                    </div>
                </div>
            </UContainer>
        </div>

        <!-- Main Content -->
        <UContainer class="py-24">
            <!-- Laravel 12 Series -->
            <div class="mb-32">
                <div class="max-w-4xl mx-auto">
                    <h2 class="text-3xl font-bold text-center mb-16">Apprendre Laravel 12</h2>
                    <div class="grid md:grid-cols-2 gap-12 items-center">
                        <div class="space-y-6">
                            <h3 class="text-2xl font-semibold">Série vidéo complète</h3>
                            <p class="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                Découvrez ma nouvelle série de tutoriels vidéo pour apprendre Laravel 12 de A à Z.
                                Que vous soyez débutant ou développeur expérimenté, cette série vous guidera à travers
                                toutes les fonctionnalités de Laravel 12 avec des exemples concrets et des projets pratiques.
                            </p>
                            <div class="grid grid-cols-2 gap-4">
                                <div class="flex items-center gap-3">
                                    <UIcon name="i-lucide-check-circle" class="text-lime-500 dark:text-lime-400 size-5" />
                                    <span class="text-sm">De zéro à expert</span>
                                </div>
                                <div class="flex items-center gap-3">
                                    <UIcon name="i-lucide-check-circle" class="text-lime-500 dark:text-lime-400 size-5" />
                                    <span class="text-sm">Projets pratiques</span>
                                </div>
                                <div class="flex items-center gap-3">
                                    <UIcon name="i-lucide-check-circle" class="text-lime-500 dark:text-lime-400 size-5" />
                                    <span class="text-sm">Contenu mis à jour</span>
                                </div>
                                <div class="flex items-center gap-3">
                                    <UIcon name="i-lucide-check-circle" class="text-lime-500 dark:text-lime-400 size-5" />
                                    <span class="text-sm">Support communautaire</span>
                                </div>
                            </div>
                            <div class="flex gap-4 mt-8">
                                <UButton
                                    to="https://apprendre-laravel-12.net"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    color="primary"
                                    icon="i-lucide-video"
                                    size="lg"
                                    class="transform transition-all duration-300 hover:scale-105"
                                >
                                    Accéder à la série
                                </UButton>
                            </div>
                        </div>
                        <div class="relative aspect-video rounded-xl overflow-hidden shadow-xl">
                            <img src="/img/apprendre-laravel-12.jpg" alt="Série Laravel 12" class="absolute inset-0 w-full h-full object-cover" />
                            <div class="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
                            <div class="absolute inset-0 flex items-center justify-center">
                                <UIcon name="i-lucide-play-circle" class="size-16 text-white opacity-90 hover:opacity-100 transition-opacity" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Consulting Section -->
            <div class="mb-32">
                <div class="max-w-4xl mx-auto">
                    <h2 class="text-3xl font-bold text-center mb-16">Consulting</h2>
                    <div class="bg-white dark:bg-zinc-800 rounded-2xl p-12 shadow-xl">
                        <div class="max-w-2xl mx-auto text-center">
                            <UIcon name="i-lucide-calendar" class="size-16 mx-auto mb-8 text-lime-500 dark:text-lime-400" />
                            <h3 class="text-2xl font-semibold mb-6">Besoin d'un coup de pouce ?</h3>
                            <p class="text-zinc-600 dark:text-zinc-400 mb-8">
                                Profitez d'un accompagnement personnalisé pour vos projets Laravel et Nuxt.
                            </p>
                            <UButton
                                to="https://cal.com/laraveljutsu"
                                target="_blank"
                                rel="noopener noreferrer"
                                color="primary"
                                icon="i-lucide-calendar"
                                size="lg"
                                class="transform transition-all duration-300 hover:scale-105"
                            >
                                Prendre RDV
                            </UButton>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Latest Video -->
            <div class="mb-32">
                <div class="max-w-4xl mx-auto">
                    <h2 class="text-3xl font-bold text-center mb-16">Dernière vidéo</h2>
                    <div v-if="video" class="bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-xl">
                        <div class="aspect-video">
                            <iframe
                                :src="`https://www.youtube.com/embed/${video.id}`"
                                class="w-full h-full"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            />
                        </div>
                        <div class="p-8">
                            <h3 class="text-xl font-semibold mb-4">{{ video.title }}</h3>
                            <div class="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 text-sm mb-6">
                                <UIcon name="i-lucide-calendar" class="size-4" />
                                <span>{{ video.published }}</span>
                            </div>
                            <UButton
                                :to="`https://www.youtube.com/watch?v=${video.id}`"
                                target="_blank"
                                rel="noopener noreferrer"
                                color="error"
                                icon="i-lucide-youtube"
                                size="lg"
                                class="transform transition-all duration-300 hover:scale-105"
                            >
                                Regarder sur YouTube
                            </UButton>
                        </div>
                    </div>
                    <div v-else class="flex justify-center items-center p-16">
                        <UProgress animation="swing" color="primary" class="w-24" />
                    </div>
                </div>
            </div>

            <!-- Tools Section -->
            <div class="mb-32">
                <div class="max-w-4xl mx-auto">
                    <h2 class="text-3xl font-bold text-center mb-16">Mes Outils</h2>
                    <div class="grid md:grid-cols-3 gap-8">
                        <div v-for="(category, categoryName) in usesData" :key="categoryName" class="space-y-6">
                            <div class="flex items-center gap-3">
                                <UIcon :name="getCategoryIcon(categoryName)" class="text-lime-500 dark:text-lime-400 size-5" />
                                <h3 class="text-lg font-semibold">{{ getCategoryTitle(categoryName) }}</h3>
                            </div>
                            <div class="space-y-4">
                                <div
                                    v-for="(item, index) in category"
                                    :key="index"
                                    class="p-4 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:border-lime-400 dark:hover:border-lime-500 transition-colors"
                                >
                                    <div class="flex items-center gap-3">
                                        <UIcon
                                            :name="getItemIcon(categoryName, item.name)"
                                            class="text-zinc-500 dark:text-zinc-400 size-4"
                                        />
                                        <div>
                                            <span class="font-medium">{{ item.name }}</span>
                                            <p class="text-sm text-zinc-500 dark:text-zinc-400">{{ item.description }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </UContainer>

        <!-- Footer -->
        <footer class="bg-zinc-50 dark:bg-zinc-800 py-16">
            <UContainer>
                <div class="max-w-4xl mx-auto">
                    <div class="flex flex-col items-center">
                        <div class="flex gap-6 mb-8">
                            <a
                                v-for="(social, index) in socialLinks"
                                :key="index"
                                :href="social.url"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="text-zinc-600 dark:text-zinc-400 hover:text-lime-500 dark:hover:text-lime-400 transition-colors"
                                :aria-label="social.label"
                            >
                                <UIcon :name="social.icon" class="size-5" />
                            </a>
                        </div>
                        <p class="text-sm text-zinc-500 dark:text-zinc-400">
                            &copy; {{ new Date().getFullYear() }} Laravel Jutsu
                            <span class="mx-2">•</span>
                            Fait avec <span class="text-lime-500 dark:text-lime-400">💚</span>
                        </p>
                    </div>
                </div>
            </UContainer>
        </footer>
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

        if (!latestEntry) {
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

const socialLinks = [
    { url: "https://www.youtube.com/@LaravelJutsu", icon: "i-lucide-youtube", label: "YouTube" },
    { url: "https://github.com/ludoguenet", icon: "i-lucide-github", label: "GitHub" },
    { url: "https://twitter.com/LaravelJutsu", icon: "i-lucide-twitter", label: "Twitter" },
    { url: "https://bsky.app/profile/laraveljutsu.bsky.social", icon: "i-lucide-cloud", label: "BlueSky" },
    { url: "https://www.linkedin.com/in/ludoguenet/", icon: "i-lucide-linkedin", label: "LinkedIn" }
];

const getCategoryIcon = (category) => {
    switch (category) {
        case 'editor': return 'i-lucide-code';
        case 'apps': return 'i-lucide-app-window';
        case 'hardware': return 'i-lucide-cpu';
        default: return 'i-lucide-file';
    }
};

const getCategoryTitle = (category) => {
    switch (category) {
        case 'editor': return 'Éditeur';
        case 'apps': return 'Applications';
        case 'hardware': return 'Matériel';
        default: return category;
    }
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

useHead({
    title: 'Laravel Jutsu - Maîtriser Laravel & Nuxt',
    meta: [
        { name: 'robots', content: 'index, follow' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Les ressources essentielles pour maîtriser Laravel & Nuxt.' },
        { name: 'keywords', content: 'Laravel, Nuxt, Web Development, Tutorials, Consulting' },
        { name: 'author', content: 'Ludovic Guénet' },
        { property: 'og:title', content: 'Laravel Jutsu - Maîtriser Laravel & Nuxt' },
        { property: 'og:description', content: 'Les ressources essentielles pour maîtriser Laravel & Nuxt.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://www.laraveljutsu.net' },
        { property: 'og:image', content: 'https://www.laraveljutsu.net/img/logo.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Laravel Jutsu - Maîtriser Laravel & Nuxt' },
        { name: 'twitter:description', content: 'Les ressources essentielles pour maîtriser Laravel & Nuxt.' },
        { name: 'twitter:image', content: 'https://www.laraveljutsu.net/img/logo.png' }
    ],
    link: [
        { rel: 'canonical', href: 'https://www.laraveljutsu.net' }
    ]
});
</script>

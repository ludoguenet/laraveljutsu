<template>
    <UContainer class="py-8">
        <div class="flex flex-col items-center">
            <!-- Dark mode toggle -->
            <div class="absolute top-4 right-4">
                <UButton color="gray" variant="ghost" :icon="isDark ? 'i-lucide-sun' : 'i-lucide-moon'"
                    @click="isDark = !isDark" aria-label="Toggle dark mode" />
            </div>

            <!-- Logo section -->
            <div class="mb-6">
                <img src="/img/logo.svg" alt="Logo" class="size-32" />
            </div>

            <!-- Header text -->
            <h1 class="text-3xl font-semibold text-center mb-4">
                <span class="text-primary-500 dark:text-primary-400">Code.</span> Create. <span
                    class="text-primary-500 dark:text-primary-400">Inspire.</span>
            </h1>

            <p class="text-gray-600 dark:text-gray-400 text-center mb-6 max-w-md">
                Essential resources to master Laravel and Nuxt.
            </p>

            <!-- Action buttons -->
            <div class="flex flex-wrap gap-3 justify-center mb-12">
                <UButton to="https://www.youtube.com/@LaravelJutsu" target="_blank" rel="noopener noreferrer"
                    color="primary" icon="i-lucide-youtube" size="sm">
                    YouTube
                </UButton>

                <UButton to="https://github.com/ludoguenet" target="_blank" rel="noopener noreferrer" variant="outline"
                    icon="i-lucide-github" size="sm"
                    class="dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800">
                    GitHub
                </UButton>
            </div>

            <!-- Uses section -->
            <div class="w-full">
                <!-- Section divider -->
                <USeparator label="Uses" class="mb-6" />

                <!-- Category Tabs -->
                <UTabs :items="tabItems" v-model="activeTab" class="mb-6 w-full">
                    <template #content="{ item }">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <UCard v-for="(items, category) in filteredUsesData(item.id)" :key="category"
                                class="mb-4 dark:bg-gray-800 dark:border-gray-700">
                                <template #header>
                                    <div class="flex items-center gap-2">
                                        <UIcon :name="getCategoryIcon(category)"
                                            class="text-primary-500 dark:text-primary-400" />
                                        <h3 class="text-base font-medium capitalize">{{ category }}</h3>
                                    </div>
                                </template>

                                <div class="space-y-3">
                                    <div v-for="(tool, index) in items" :key="index"
                                        class="flex items-start gap-3 py-2 border-b border-gray-100 dark:border-gray-700 last:border-0">
                                        <UIcon v-if="getItemIcon(category, tool.name)"
                                            :name="getItemIcon(category, tool.name)"
                                            class="mt-1 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                                        <div>
                                            <span class="font-medium">{{ tool.name }}</span>
                                            <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">{{ tool.description
                                                }}</p>
                                        </div>
                                    </div>
                                </div>
                            </UCard>
                        </div>
                    </template>
                </UTabs>

                <!-- VSCode Settings Link -->
                <div class="mt-8 flex justify-center">
                    <UButton to="https://gist.github.com/ludoguenet/b5fef1fe56200a48925fe6f88d9d245a" target="_blank"
                        rel="noopener noreferrer" variant="ghost" icon="i-lucide-download" size="sm"
                        class="dark:text-gray-300 dark:hover:bg-gray-800">
                        VSCode Settings
                    </UButton>
                </div>
            </div>

            <!-- Footer -->
            <div class="mt-12 text-sm text-gray-500 dark:text-gray-400 flex flex-col items-center gap-2">
                <div class="flex items-center gap-2">
                    <span>&copy; {{ new Date().getFullYear() }} Laravel Jutsu</span>
                    <span class="text-gray-400 dark:text-gray-500">•</span>
                    <span>Made with <span class="text-primary-500 dark:text-primary-400">💚</span> and passion</span>
                </div>
                <div class="flex items-center gap-2">
                    <a href="https://www.youtube.com/@LaravelJutsu" target="_blank" rel="noopener noreferrer"
                        class="hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                        YouTube
                    </a>
                    <span class="text-gray-400 dark:text-gray-500">•</span>
                    <a href="https://github.com/ludoguenet" target="_blank" rel="noopener noreferrer"
                        class="hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    </UContainer>
</template>

<script setup>
import { ref, computed } from 'vue';

const colorMode = useColorMode();
const activeTab = ref();

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

const tabItems = [
    {
        id: 'all',
        label: 'All',
        icon: 'i-lucide-layers',
    },
    {
        id: 'editor',
        label: 'Editor',
        icon: 'i-lucide-code',
    },
    {
        id: 'apps',
        label: 'Apps',
        icon: 'i-lucide-monitor',
    },
    {
        id: 'hardware',
        label: 'Hardware',
        icon: 'i-lucide-laptop',
    }
];

// Filter uses data based on active tab
const filteredUsesData = (tabId) => {
    if (tabId === 'all' || tabId === 0) {
        return usesData;
    }

    return Object.fromEntries(
        Object.entries(usesData).filter(([category]) => category === tabId)
    );
};

const getCategoryIcon = (category) => {
    switch (category) {
        case 'editor': return 'i-lucide-code';
        case 'apps': return 'i-lucide-monitor';
        case 'hardware': return 'i-lucide-laptop';
        default: return 'i-lucide-layers';
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
</script>

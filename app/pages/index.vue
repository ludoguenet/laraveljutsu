<template>
    <div class="min-h-screen bg-white dark:bg-zinc-900 transition-colors duration-300">
        <UContainer class="py-16 px-4">
            <div class="flex flex-col items-center relative">
                <!-- Bouton mode sombre - redessiné avec animation subtile -->
                <div class="absolute top-0 right-0">
                    <UButton
                        color="gray"
                        variant="ghost"
                        :icon="isDark ? 'i-lucide-sun' : 'i-lucide-moon'"
                        aria-label="Basculer en mode sombre"
                        class="hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-all duration-300 transform hover:scale-105"
                        @click="isDark = !isDark"
                    />
                </div>

                <!-- Section logo avec animation subtile -->
                <div class="mb-8 transform transition-all duration-500 hover:scale-105">
                    <img src="/img/logo.svg" alt="Logo" class="size-24">
                </div>

                <!-- Texte d'en-tête avec style amélioré et animations -->
                <h1 class="text-4xl md:text-5xl font-bold text-center mb-6 tracking-tighter">
                    <span class="bg-clip-text text-transparent bg-gradient-to-r from-lime-600 to-lime-400 dark:from-lime-400 dark:to-lime-200 pr-2 inline-block transition-transform duration-300 hover:scale-105">Coder.</span>
                    <span class="bg-clip-text text-transparent bg-gradient-to-r from-lime-500 to-lime-300 dark:from-lime-300 dark:to-lime-100 pr-2 inline-block transition-transform duration-300 hover:scale-105 delay-75">Créer.</span>
                    <span class="bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-lime-200 dark:from-lime-200 dark:to-lime-50 inline-block transition-transform duration-300 hover:scale-105 delay-150">Inspirer.</span>
                </h1>

                <p class="text-zinc-600 dark:text-zinc-400 text-center mb-8 max-w-md leading-relaxed">
                    Tout ce qu'il vous faut pour exceller avec Laravel et Nuxt !
                </p>

                <!-- Boutons d'action avec style amélioré -->
                <div class="flex gap-4 justify-center mb-24">
                    <UButton
                        to="https://www.youtube.com/@LaravelJutsu"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="primary"
                        icon="i-lucide-youtube"
                        size="md"
                        class="transform transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md bg-lime-500 hover:bg-lime-600 dark:bg-lime-600 dark:hover:bg-lime-700"
                    >
                        YouTube
                    </UButton>

                    <UButton
                        to="https://github.com/ludoguenet"
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outline"
                        icon="i-lucide-github"
                        size="md"
                        class="dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800 transform transition-all duration-300 hover:scale-105"
                    >
                        GitHub
                    </UButton>
                </div>

                <!-- Section Série Vidéo Laravel 12 - Design affiné -->
                <div class="w-full max-w-4xl mx-auto mb-24">
                    <!-- En-tête de section avec style amélioré -->
                    <div class="flex items-center gap-4 mb-12">
                        <div class="h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent dark:via-zinc-800 flex-grow" />
                        <h2 class="text-xl font-bold text-zinc-800 dark:text-zinc-200">Apprendre Laravel 12</h2>
                        <div class="h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent dark:via-zinc-800 flex-grow" />
                    </div>

                    <!-- Contenu Laravel 12 - Design de carte amélioré -->
                    <div class="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-100 dark:border-zinc-800 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                        <!-- Bannière de série avec effet d'image amélioré -->
                        <div class="aspect-video w-full relative overflow-hidden group">
                            <!-- Image d'arrière-plan avec effet de survol -->
                            <img src="/img/apprendre-laravel-12.jpg" alt="Série Laravel 12" class="w-full h-full object-cover brightness-75 absolute inset-0 transition-transform duration-700 group-hover:scale-105">

                            <!-- Superposition avec dégradé -->
                            <div class="absolute inset-0 bg-gradient-to-t from-lime-900/80 via-lime-700/60 to-lime-500/50 dark:from-lime-900/90 dark:via-lime-800/70 dark:to-lime-600/50"/>

                            <!-- Superposition de contenu -->
                            <div class="absolute inset-0 flex items-center justify-center">
                                <div class="text-center px-6 z-10 transition-all duration-500 group-hover:scale-105">
                                    <UIcon name="i-lucide-play-circle" class="size-16 text-white mb-4 opacity-90 group-hover:opacity-100" />
                                    <h3 class="text-2xl md:text-3xl font-bold text-white mb-2">Apprendre Laravel 12</h3>
                                    <p class="text-white/80 max-w-lg mx-auto group-hover:text-white/100">Série vidéo complète pour maîtriser Laravel 12 de zéro</p>
                                </div>
                            </div>
                        </div>

                        <!-- Détails de la série avec typographie et espacement améliorés -->
                        <div class="p-8">
                            <p class="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                                Découvrez ma nouvelle série de tutoriels vidéo pour apprendre Laravel 12 de A à Z.
                                Que vous soyez débutant ou développeur expérimenté, cette série vous guidera à travers
                                toutes les fonctionnalités de Laravel 12 avec des exemples concrets et des projets pratiques.
                            </p>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div class="flex items-start gap-3 group">
                                    <UIcon name="i-lucide-check-circle" class="size-5 text-lime-500 dark:text-lime-400 mt-1 group-hover:text-lime-600 dark:group-hover:text-lime-300 transition-colors" />
                                    <div>
                                        <span class="font-medium text-zinc-900 dark:text-zinc-100">De zéro à expert</span>
                                        <p class="text-sm text-zinc-500 dark:text-zinc-400 mt-2">Aucun prérequis nécessaire</p>
                                    </div>
                                </div>

                                <div class="flex items-start gap-3 group">
                                    <UIcon name="i-lucide-check-circle" class="size-5 text-lime-500 dark:text-lime-400 mt-1 group-hover:text-lime-600 dark:group-hover:text-lime-300 transition-colors" />
                                    <div>
                                        <span class="font-medium text-zinc-900 dark:text-zinc-100">Projets pratiques</span>
                                        <p class="text-sm text-zinc-500 dark:text-zinc-400 mt-2">Apprenez en construisant</p>
                                    </div>
                                </div>

                                <div class="flex items-start gap-3 group">
                                    <UIcon name="i-lucide-check-circle" class="size-5 text-lime-500 dark:text-lime-400 mt-1 group-hover:text-lime-600 dark:group-hover:text-lime-300 transition-colors" />
                                    <div>
                                        <span class="font-medium text-zinc-900 dark:text-zinc-100">Contenu mis à jour</span>
                                        <p class="text-sm text-zinc-500 dark:text-zinc-400 mt-2">Les dernières fonctionnalités</p>
                                    </div>
                                </div>

                                <div class="flex items-start gap-3 group">
                                    <UIcon name="i-lucide-check-circle" class="size-5 text-lime-500 dark:text-lime-400 mt-1 group-hover:text-lime-600 dark:group-hover:text-lime-300 transition-colors" />
                                    <div>
                                        <span class="font-medium text-zinc-900 dark:text-zinc-100">Support communautaire</span>
                                        <p class="text-sm text-zinc-500 dark:text-zinc-400 mt-2">Entraide et discussions</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Boutons d'action avec style amélioré -->
                            <div class="flex flex-col justify-center sm:flex-row gap-4 mt-6">
                                <UButton
                                    to="https://apprendre-laravel-12.net"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    color="primary"
                                    icon="i-lucide-video"
                                    size="lg"
                                    class="transform transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md bg-lime-500 hover:bg-lime-600 dark:bg-lime-600 dark:hover:bg-lime-700"
                                >
                                    Accéder à la série
                                </UButton>

                                <UButton
                                    to="https://www.youtube.com/@LaravelJutsu"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variant="outline"
                                    icon="i-lucide-youtube"
                                    size="lg"
                                    class="dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800 transform transition-all duration-300 hover:scale-105"
                                >
                                    Voir sur YouTube
                                </UButton>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Section Consulting - Design affiné -->
                <div class="w-full max-w-4xl mx-auto mb-24">
                    <div class="flex items-center gap-4 mb-12">
                        <div class="h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent dark:via-zinc-800 flex-grow" />
                        <h2 class="text-xl font-bold text-zinc-800 dark:text-zinc-200">Consulting</h2>
                        <div class="h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent dark:via-zinc-800 flex-grow" />
                    </div>

                    <!-- Carte de consulting avec style amélioré -->
                    <div class="bg-white dark:bg-zinc-900 text-center p-10 rounded-xl border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all duration-300">
                        <UIcon
                            name="i-lucide-calendar"
                            class="size-16 mx-auto mb-6 text-lime-500 dark:text-lime-400 transform transition-all duration-300 hover:scale-110"
                        />
                        <h3 class="text-2xl font-semibold mb-4 text-zinc-900 dark:text-zinc-100">Besoin d'un coup de pouce ?</h3>
                        <p class="text-zinc-600 dark:text-zinc-400 mb-8 max-w-xl mx-auto leading-relaxed">
                            Profitez d'un accompagnement personnalisé pour vos projets Laravel et Nuxt.
                        </p>
                        <UButton
                            to="https://cal.com/laraveljutsu"
                            target="_blank"
                            rel="noopener noreferrer"
                            color="primary"
                            icon="i-lucide-calendar"
                            size="lg"
                            class="transform transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md bg-lime-500 hover:bg-lime-600 dark:bg-lime-600 dark:hover:bg-lime-700"
                        >
                            Prendre RDV
                        </UButton>
                    </div>
                </div>

                <!-- Section Outils avec style amélioré -->
                <div class="w-full max-w-4xl mx-auto mb-24">
                    <!-- En-tête de section -->
                    <div class="flex items-center gap-4 mb-12">
                        <div class="h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent dark:via-zinc-800 flex-grow" />
                        <h2 class="text-xl font-bold text-zinc-800 dark:text-zinc-200">Mes Outils</h2>
                        <div class="h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent dark:via-zinc-800 flex-grow" />
                    </div>

                    <!-- Contenu Outils avec disposition en grille améliorée -->
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        <!-- Section Éditeur -->
                        <div class="space-y-4">
                            <div class="flex items-center gap-2 mb-6">
                                <UIcon name="i-lucide-code" class="text-lime-500 dark:text-lime-400 size-5" />
                                <h3 class="text-lg font-semibold dark:text-zinc-200">Éditeur</h3>
                            </div>

                            <div
                                v-for="(item, index) in usesData.editor"
                                :key="index"
                                class="p-4 rounded-lg border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-lime-200 dark:hover:border-lime-800 transition-all duration-300 group"
                            >
                                <div class="flex items-start gap-3">
                                    <UIcon
                                        :name="getItemIcon('editor', item.name)"
                                        class="mt-1 text-zinc-500 dark:text-zinc-400 size-4 group-hover:text-lime-500 dark:group-hover:text-lime-400 transition-colors"
                                    />
                                    <div>
                                        <span class="font-medium text-zinc-900 dark:text-zinc-100">{{ item.name }}</span>
                                        <p class="text-sm text-zinc-500 dark:text-zinc-400 mt-2">{{ item.description }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Section Applications -->
                        <div class="space-y-4">
                            <div class="flex items-center gap-2 mb-6">
                                <UIcon name="i-lucide-monitor" class="text-lime-500 dark:text-lime-400 size-5" />
                                <h3 class="text-lg font-semibold dark:text-zinc-200">Applications</h3>
                            </div>

                            <div
                                v-for="(item, index) in usesData.apps"
                                :key="index"
                                class="p-4 rounded-lg border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-lime-200 dark:hover:border-lime-800 transition-all duration-300 group"
                            >
                                <div class="flex items-start gap-3">
                                    <UIcon
                                        :name="getItemIcon('apps', item.name)"
                                        class="mt-1 text-zinc-500 dark:text-zinc-400 size-4 group-hover:text-lime-500 dark:group-hover:text-lime-400 transition-colors"
                                    />
                                    <div>
                                        <span class="font-medium text-zinc-900 dark:text-zinc-100">{{ item.name }}</span>
                                        <p class="text-sm text-zinc-500 dark:text-zinc-400 mt-2">{{ item.description }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Section Matériel -->
                        <div class="space-y-4">
                            <div class="flex items-center gap-2 mb-6">
                                <UIcon name="i-lucide-laptop" class="text-lime-500 dark:text-lime-400 size-5" />
                                <h3 class="text-lg font-semibold dark:text-zinc-200">Matériel</h3>
                            </div>

                            <div
                                v-for="(item, index) in usesData.hardware"
                                :key="index"
                                class="p-4 rounded-lg border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-lime-200 dark:hover:border-lime-800 transition-all duration-300 group"
                            >
                                <div class="flex items-start gap-3">
                                    <UIcon
                                        :name="getItemIcon('hardware', item.name)"
                                        class="mt-1 text-zinc-500 dark:text-zinc-400 size-4 group-hover:text-lime-500 dark:group-hover:text-lime-400 transition-colors"
                                    />
                                    <div>
                                        <span class="font-medium text-zinc-900 dark:text-zinc-100">{{ item.name }}</span>
                                        <p class="text-sm text-zinc-500 dark:text-zinc-400 mt-2">{{ item.description }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Lien vers les paramètres VSCode avec style amélioré -->
                    <div class="flex justify-center">
                        <UButton
                            to="https://gist.github.com/ludoguenet/b5fef1fe56200a48925fe6f88d9d245a"
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="soft"
                            icon="i-lucide-download"
                            size="sm"
                            class="dark:text-zinc-300 dark:hover:bg-zinc-800 transform transition-all duration-300 hover:scale-105"
                        >
                            Paramètres VSCode
                        </UButton>
                    </div>
                </div>

                <!-- Section Dernière Vidéo YouTube avec style amélioré -->
                <div class="w-full max-w-4xl mx-auto mb-24">
                    <!-- En-tête de section -->
                    <div class="flex items-center gap-4 mb-12">
                        <div class="h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent dark:via-zinc-800 flex-grow" />
                        <h2 class="text-xl font-bold text-zinc-800 dark:text-zinc-200">Ma dernière vidéo</h2>
                        <div class="h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent dark:via-zinc-800 flex-grow" />
                    </div>

                    <!-- Conteneur vidéo avec style amélioré -->
                    <div
                        v-if="video"
                        class="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-100 dark:border-zinc-800 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                    >
                        <!-- Intégration vidéo -->
                        <div class="aspect-video w-full overflow-hidden">
                            <iframe
                                :src="`https://www.youtube.com/embed/${video.id}`"
                                class="w-full h-full"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            />
                        </div>

                        <!-- Détails de la vidéo avec typographie améliorée -->
                        <div class="p-8">
                            <h3 class="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4 hover:text-lime-600 dark:hover:text-lime-400 transition-colors">
                                {{ video.title }}
                            </h3>
                            <div class="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 text-sm mb-6">
                                <UIcon name="i-lucide-calendar" class="size-4" />
                                <span>{{ video.published }}</span>
                            </div>

                            <!-- Bouton Regarder sur YouTube -->
                            <UButton
                                :to="`https://www.youtube.com/watch?v=${video.id}`"
                                target="_blank"
                                rel="noopener noreferrer"
                                color="error"
                                icon="i-lucide-youtube"
                                size="sm"
                                class="transform transition-all duration-300 hover:scale-105"
                            >
                                Regarder sur YouTube
                            </UButton>
                        </div>
                    </div>

                    <!-- État de chargement avec style amélioré -->
                    <div
                        v-else
                        class="flex flex-col items-center justify-center p-16 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-100 dark:border-zinc-800 shadow-sm"
                    >
                        <UProgress animation="swing" color="primary" class="w-24" />
                        <p class="text-zinc-500 dark:text-zinc-400 mt-4">Chargement...</p>
                    </div>

                    <!-- Lien vers plus de vidéos -->
                    <div class="flex justify-center mt-6">
                        <UButton
                            to="https://www.youtube.com/@LaravelJutsu"
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="soft"
                            icon="i-lucide-video"
                            size="sm"
                            class="dark:text-zinc-300 dark:hover:bg-zinc-800 transform transition-all duration-300 hover:scale-105"
                        >
                            Voir plus de vidéos
                        </UButton>
                    </div>
                </div>

                <!-- Pied de page amélioré avec meilleur style -->
                <footer class="mt-24 w-full max-w-4xl mx-auto">
                    <!-- Séparateur avec dégradé -->
                    <div class="flex items-center gap-4 mb-8">
                        <div class="h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent dark:via-zinc-800 flex-grow" />
                    </div>

                    <!-- Copyright et slogan avec animation subtile -->
                    <div class="text-center mb-8">
                        <p class="text-sm text-zinc-500 dark:text-zinc-400">
                            &copy; {{ new Date().getFullYear() }} Laravel Jutsu
                            <span class="mx-2 hidden sm:inline">•</span>
                            <span class="block sm:inline mt-1 sm:mt-0">Fait avec <span class="text-lime-500 dark:text-lime-400 inline-block transition-transform hover:scale-125 duration-300">💚</span></span>
                        </p>
                    </div>

                    <!-- Liens sociaux avec style amélioré -->
                    <div class="grid grid-cols-3 sm:flex sm:flex-wrap sm:justify-center gap-y-4 gap-x-6 sm:gap-8 mb-12">
                        <a
                            href="https://www.youtube.com/@LaravelJutsu"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="flex justify-center items-center hover:text-lime-500 dark:hover:text-lime-400 transition-all duration-300 hover:scale-110"
                            aria-label="YouTube"
                        >
                            <UIcon name="i-lucide-youtube" class="size-5 sm:size-5" />
                        </a>
                        <a
                            href="https://github.com/ludoguenet"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="flex justify-center items-center hover:text-lime-500 dark:hover:text-lime-400 transition-all duration-300 hover:scale-110"
                            aria-label="GitHub"
                        >
                            <UIcon name="i-lucide-github" class="size-5 sm:size-5" />
                        </a>
                        <a
                            href="https://twitter.com/LaravelJutsu"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="flex justify-center items-center hover:text-lime-500 dark:hover:text-lime-400 transition-all duration-300 hover:scale-110"
                            aria-label="Twitter"
                        >
                            <UIcon name="i-lucide-twitter" class="size-5 sm:size-5" />
                        </a>
                        <a
                            href="https://bsky.app/profile/laraveljutsu.bsky.social"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="flex justify-center items-center hover:text-lime-500 dark:hover:text-lime-400 transition-all duration-300 hover:scale-110"
                            aria-label="BlueSky"
                        >
                            <UIcon name="i-lucide-cloud" class="size-5 sm:size-5" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/ludoguenet/"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="flex justify-center items-center hover:text-lime-500 dark:hover:text-lime-400 transition-all duration-300 hover:scale-110"
                            aria-label="LinkedIn"
                        >
                            <UIcon name="i-lucide-linkedin" class="size-5 sm:size-5" />
                        </a>
                    </div>

                    <!-- Bouton retour en haut avec style amélioré -->
                    <div class="flex justify-center">
                        <UButton
                            variant="ghost"
                            color="gray"
                            icon="i-lucide-arrow-up"
                            size="sm"
                            class="hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-all duration-300 hover:scale-110"
                            aria-label="Retour en haut"
                            @click="scrollToTop"
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

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
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

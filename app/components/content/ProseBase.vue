<template>
  <div class="flex flex-col gap-y-6 dark:prose-invert">
    <slot />
  </div>
</template>

<style>
.flex {
  @apply text-zinc-900 dark:text-zinc-100;
}

.flex h1 {
  @apply text-4xl sm:text-5xl md:text-6xl font-black text-zinc-900 dark:text-white;
}

.flex h2 {
  @apply text-2xl md:text-3xl font-black text-zinc-800 dark:text-zinc-100;
}

.flex h3 {
  @apply text-xl md:text-2xl font-bold text-zinc-800 dark:text-zinc-100;
}

.flex p {
  @apply text-zinc-600 dark:text-zinc-300;
}

.flex a {
  @apply text-lime-600 dark:text-lime-400;
}

.flex ul {
  @apply list-disc list-inside text-zinc-600 dark:text-zinc-300;
}

.flex ol {
  @apply list-decimal list-inside text-zinc-600 dark:text-zinc-300;
}

.flex li {
  @apply text-zinc-600 dark:text-zinc-300;
}

.flex strong {
  @apply text-zinc-900 dark:text-white font-bold;
}

.flex blockquote {
  @apply border-l-4 border-zinc-200 dark:border-zinc-700 pl-4 italic text-zinc-600 dark:text-zinc-300;
}

.flex code {
  @apply bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 px-1 rounded;
}

.flex pre {
  @apply bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 p-4 rounded;
}

.flex pre code {
  @apply bg-transparent p-0;
}
</style>

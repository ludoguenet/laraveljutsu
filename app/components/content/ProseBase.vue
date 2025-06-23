<template>
  <div class="flex flex-col gap-y-6">
    <slot />
  </div>
</template>

<style>
.flex {
  @apply text-gray-900;
}

.flex h1 {
  @apply text-4xl sm:text-5xl md:text-6xl font-black text-gray-900;
}

.flex h2 {
  @apply text-2xl md:text-3xl font-black text-gray-800;
}

.flex h3 {
  @apply text-xl md:text-2xl font-bold text-gray-800;
}

.flex p {
  @apply text-gray-700;
}

.flex a {
  @apply text-purple-600 hover:text-purple-700 underline;
}

.flex ul {
  @apply list-disc list-inside text-gray-700;
}

.flex ol {
  @apply list-decimal list-inside text-gray-700;
}

.flex li {
  @apply text-gray-700;
}

.flex strong {
  @apply text-gray-900 font-bold;
}

.flex blockquote {
  @apply border-l-4 border-purple-200 pl-4 italic text-gray-700 bg-gray-50 py-2;
}

.flex code {
  @apply bg-gray-100 text-gray-900 px-2 py-1 rounded font-mono text-sm;
}

.flex pre {
  @apply bg-gray-100 text-gray-900 p-4 rounded-lg overflow-x-auto;
}

.flex pre code {
  @apply bg-transparent p-0;
}
</style>

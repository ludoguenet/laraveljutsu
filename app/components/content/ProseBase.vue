<template>
  <div class="flex flex-col gap-y-6">
    <slot />
  </div>
</template>

<style>
.flex {
  @apply text-zinc-900;
}

.flex h1 {
  @apply text-4xl sm:text-5xl md:text-6xl font-black text-zinc-900;
}

.flex h2 {
  @apply text-2xl md:text-3xl font-black text-zinc-800;
}

.flex h3 {
  @apply text-xl md:text-2xl font-bold text-zinc-800;
}

.flex p {
  @apply text-zinc-600;
}

.flex a {
  @apply text-lime-600;
}

.flex ul {
  @apply list-disc list-inside text-zinc-600;
}

.flex ol {
  @apply list-decimal list-inside text-zinc-600;
}

.flex li {
  @apply text-zinc-600;
}

.flex strong {
  @apply text-zinc-900 font-bold;
}

.flex blockquote {
  @apply border-l-4 border-zinc-200 pl-4 italic text-zinc-600;
}

.flex code {
  @apply bg-zinc-100 text-zinc-900 px-1 rounded;
}

.flex pre {
  @apply bg-zinc-100 text-zinc-900 p-4 rounded;
}

.flex pre code {
  @apply bg-transparent p-0;
}
</style>

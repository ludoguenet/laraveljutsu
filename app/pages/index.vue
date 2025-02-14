<template>
  <div class="flex flex-col items-center justify-center gap-4 h-screen">
    <h1 class="font-bold text-2xl text-(--ui-primary)">
        Code. Create. Inspire.
    </h1>

    <div class="flex items-center gap-2">
      <UButton
        label="YouTube"
        icon="i-lucide-square-play"
        to="https://www.youtube.com/@LaravelJutsu"
        target="_blank"
      />

      <UButton
        label="GitHub"
        color="neutral"
        variant="outline"
        icon="i-simple-icons-github"
        to="https://github.com/ludoguenet"
        target="_blank"
      />
    </div>
  </div>
</template>

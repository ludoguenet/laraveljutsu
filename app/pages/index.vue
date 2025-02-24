<template>
    <div class="flex flex-col items-center justify-center gap-6 h-screen p-4">
      <img src="/img/logo.svg" alt="Logo" class="w-60 h-auto">

      <h1 class="font-bold text-2xl sm:text-3xl text-(--ui-primary) tracking-wide">
        Code. Create. Inspire.
      </h1>

      <div class="flex items-center gap-2">
        <UTooltip text="Watch my videos on YouTube" delay="200">
          <UButton
            label="YouTube"
            icon="i-lucide-square-play"
            to="https://www.youtube.com/@LaravelJutsu"
            target="_blank"
            size="lg"
            class="rounded-lg hover:shadow-md transition duration-300"
          />
        </UTooltip>

        <UTooltip text="See my code on GitHub" delay="200">
          <UButton
            label="GitHub"
            color="neutral"
            variant="outline"
            icon="i-simple-icons-github"
            to="https://github.com/ludoguenet"
            target="_blank"
            size="lg"
            class="rounded-lg hover:shadow-md transition duration-300"
          />
        </UTooltip>
      </div>
    </div>
  </template>

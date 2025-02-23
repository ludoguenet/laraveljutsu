<template>
    <div class="flex flex-col items-center justify-center gap-4 h-screen">
      <img src="/img/logo.svg" alt="Logo" class="w-72">

      <h1 class="font-bold text-xl text-(--ui-primary)">
        Code. Create. Inspire.
      </h1>

      <div class="flex items-center gap-2">
        <UTooltip text="Watch my videos on YouTube">
            <UButton
            label="YouTube"
            icon="i-lucide-square-play"
            to="https://www.youtube.com/@LaravelJutsu"
            target="_blank"
            />
        </UTooltip>

        <UTooltip text="See my code on GitHub">
            <UButton
            label="GitHub"
            color="neutral"
            variant="outline"
            icon="i-simple-icons-github"
            to="https://github.com/ludoguenet"
            target="_blank"
            />
        </UTooltip>
      </div>
    </div>
  </template>

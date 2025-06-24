<template>
  <a :href="href" class="text-lime-600 hover:text-lime-700 font-medium underline decoration-lime-600/30 hover:decoration-lime-700 underline-offset-2 transition-all duration-200">
    <slot />
  </a>
</template>

<script setup lang="ts">
defineProps({
  href: {
    type: String,
    required: true
  }
})
</script>

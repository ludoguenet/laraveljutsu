<template>
  <a :href="href" class="text-purple-600 hover:text-purple-700 underline decoration-purple-600/30 hover:decoration-purple-700 underline-offset-2 transition-colors">
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

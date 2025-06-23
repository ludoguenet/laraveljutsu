<template>
  <a :href="href" class="text-purple-600 dark:text-purple-400">
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

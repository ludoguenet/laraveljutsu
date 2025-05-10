<template>
  <a :href="href" class="text-lime-600 dark:text-lime-400">
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

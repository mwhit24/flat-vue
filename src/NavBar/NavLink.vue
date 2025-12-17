<template>
  <a
    :href="href"
    :class="[
      'nav-link',
      active && 'nav-link-active'
    ]"
  >
    <slot />
  </a>
</template>

<script setup lang="ts">
defineProps<{
  href?: string
  active?: boolean
}>()
</script>


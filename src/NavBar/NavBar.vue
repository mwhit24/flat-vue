<template>
  <nav
    :class="[
      'flex items-center justify-between px-6 py-2 border-b-2',
      transparent ? 'bg-transparent border-transparent' : 'bg-white border-neutral-200'
    ]"
  >
    <div class="flex items-center gap-8">
      <div class="font-bold text-xl">
        <slot name="logo" />
      </div>

      <div class="flex items-center gap-6">
        <slot name="links" />
      </div>
    </div>

    <div class="flex items-center gap-3">
      <slot name="actions" />
    </div>
  </nav>
</template>

<script setup lang="ts">
defineProps<{
  transparent?: boolean
}>()

defineSlots<{
  logo?: any
  links?: any
  actions?: any
}>()
</script>

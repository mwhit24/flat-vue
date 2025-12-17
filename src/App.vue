<template>
  <div class="bg-neutral-50 p-8 min-h-screen font-sans">
    <h1 class="text-3xl font-bold mb-8">Flat UI Buttons</h1>

    <!-- Solid -->
    <section class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Solid (default)</h2>
      <div class="flex gap-3 items-center">
        <Button variant="primary" size="xs">Primary</Button>
        <Button variant="secondary" size="sm">Secondary</Button>
        <Button variant="success" size="md">Success</Button>
        <Button variant="danger" size="lg">Danger</Button>
      </div>
    </section>

    <!-- Outline -->
    <section class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Outline</h2>
      <div class="flex gap-3 items-center">
        <Button variant="primary" type="outline" size="xs">Primary</Button>
        <Button variant="secondary" type="outline">Secondary</Button>
        <Button variant="success" type="outline">Success</Button>
        <Button variant="danger" type="outline">Danger</Button>
      </div>
    </section>

    <!-- Ghost -->
    <section class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Ghost</h2>
      <div class="flex gap-3 items-center">
        <Button variant="primary" type="ghost">Primary</Button>
        <Button variant="secondary" type="ghost">Secondary</Button>
        <Button variant="success" type="ghost">Success</Button>
        <Button variant="danger" type="ghost">Danger</Button>
      </div>
    </section>

    <!-- Rounded Options -->
	  <section class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Rounded Options</h2>
      <div class="flex gap-3 items-center flex-wrap">
        <Button variant="primary" rounded="none">None</Button>
        <Button variant="primary" rounded="sm">Small</Button>
        <Button variant="primary" rounded="md">Medium (default)</Button>
        <Button variant="primary" rounded="lg">Large</Button>
        <Button variant="primary" rounded="full">Full (pill)</Button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import Button from "./Button/Button.vue"
</script>

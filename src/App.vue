<template>
  <div class="bg-neutral-50 min-h-screen">

	  <NavBar class="!bg-pink">
      <template #logo>
        <span class="text-white">FlatVue</span>
      </template>

      <template #links>
        <NavLink href="#" active>Home</NavLink>
        <NavLink href="#">Components</NavLink>
        <NavLink href="#">Documentation</NavLink>
        <NavLink href="#">Pricing</NavLink>
      </template>

      <template #actions>
        <Button variant="secondary" buttonStyle="ghost" size="sm">Login</Button>
        <Button variant="primary" size="sm">Sign Up</Button>
      </template>
    </NavBar>

	  <div class="p-8">
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

  </div>
</template>

<script setup lang="ts">
import { Button } from "./Button/index.ts"
import { NavBar, NavLink } from "./NavBar";
</script>

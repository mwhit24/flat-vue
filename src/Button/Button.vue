<template>
	<button :class="[buttonClass, sizeClass, roundedClass, disabled && 'opacity-50 cursor-not-allowed pointer-events-none']">
		 <slot />
	</button>
</template>

<script setup lang="ts">
import {computed} from "vue";

const props = defineProps<{
	variant?: "primary" | "secondary" | "danger" | "success"
  type?: 'solid' | 'outline' | 'ghost'
	size?: "xs" | "sm" | "md" | "lg" | "xl"
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
	disabled?: boolean
}>()

const buttonClass = computed(() => {
	const type = props.type || 'solid';
	const variant = props.variant || 'primary';

	const classMap = {
		solid: {
			primary: 'btn-solid-primary',
			secondary: 'btn-solid-secondary',
			success: 'btn-solid-success',
			danger: 'btn-solid-danger',
		},
		outline: {
			primary: 'btn-outline-primary',
			secondary: 'btn-outline-secondary',
			success: 'btn-outline-success',
			danger: 'btn-outline-danger',
		},
		ghost: {
			primary: 'btn-ghost-primary',
			secondary: 'btn-ghost-secondary',
			success: 'btn-ghost-success',
			danger: 'btn-ghost-danger',
		}
	}

	return classMap[type][variant];
})

const sizeClass = computed(() => {
	const sizes = {
		xs: 'btn-xs',
		sm: 'btn-sm',
		md: 'btn-md',
		lg: 'btn-lg',
		xl: 'btn-xl',
	}

	return sizes[props.size || 'md'];
})

const roundedClass = computed(() => {
  const rounded = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  }
  return rounded[props.rounded || 'md'] // Default to 'md'
})

</script>

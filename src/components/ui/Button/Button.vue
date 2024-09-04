<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

interface ButtonProps {
  class?: HTMLAttributes['class']
  as?: 'a' | 'button'
  href?: string
  type?: 'button' | 'submit' | 'reset'
}

const props = withDefaults(defineProps<ButtonProps>(), {
  as: 'button',
  type: 'button',
})
</script>

<template>
  <component
    :is="props.as"
    :href="props.as === 'a' ? props.href : undefined"
    :type="props.as === 'button' ? props.type : undefined"
    class="px-6 py-4 inline-flex items-center justify-center whitespace-nowrap text-sm font-bold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-white"
  >
    <slot />
  </component>
</template>

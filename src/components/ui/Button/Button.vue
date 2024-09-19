<script setup lang="ts">
import { cn } from '@/lib/utils'
import { ButtonProps, buttonVariants } from '.'

withDefaults(defineProps<ButtonProps>(), {
  as: 'button',
})
</script>

<template>
  <component
    :is="as"
    :class="cn(buttonVariants({ variant, size }), $attrs.class ?? '')"
  >
    <slot />
  </component>
</template>

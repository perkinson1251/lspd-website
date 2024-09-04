<script lang="ts" setup>
import { RouterLinkProps } from 'vue-router'

// Расширяем RouterLinkProps, добавляя новые свойства
interface CustomLinkProps extends Partial<RouterLinkProps> {
  tag?: 'a' | 'RouterLink'
  href?: string
}

const props = defineProps<CustomLinkProps>()
</script>

<template>
  <component
    :is="props.tag === 'a' ? 'a' : 'RouterLink'"
    :to="props.tag !== 'a' ? props.to : undefined"
    :href="props.tag === 'a' ? props.href : undefined"
    class="font-bold uppercase text-primary hover:text-secondary cursor-pointer text-text-base transition-all"
  >
    <slot />
  </component>
</template>

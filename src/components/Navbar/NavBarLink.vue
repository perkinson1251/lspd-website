<script lang="ts" setup>
import { NavbarLinkProps } from '.'

const props = defineProps<NavbarLinkProps>()
</script>

<template>
  <component
    :is="props.tag === 'a' ? 'a' : 'RouterLink'"
    :to="props.tag !== 'a' ? props.to : undefined"
    :href="props.tag === 'a' ? props.href : undefined"
    class="font-bold uppercase text-primaryBlue hover:text-orangeRed cursor-pointer text-text-base transition-all"
  >
    <slot />
  </component>
</template>

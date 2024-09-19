<script lang="ts" setup>
import { LinkProps } from '.'

const props = defineProps<LinkProps>()
</script>

<template>
  <a
    v-bind="props"
    class="text-orangeRed hover:text-gray text-base cursor-pointer transition-all"
  >
    <slot />
  </a>
</template>

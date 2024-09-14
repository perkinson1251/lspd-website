<script lang="ts" setup>
import type { AnchorHTMLAttributes } from 'vue'

interface Props {
  href?: string
  target?: string
  rel?: string
  otherProps?: AnchorHTMLAttributes
}

const props = defineProps<Props>()
</script>

<template>
  <a
    v-bind="props"
    class="text-secondary hover:text-gray text-base cursor-pointer transition-all"
  >
    <slot />
  </a>
</template>

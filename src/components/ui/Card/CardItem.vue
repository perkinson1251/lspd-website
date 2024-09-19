<script setup lang="ts">
import { CardItemProps } from '.'

defineProps<CardItemProps>()
</script>

<template>
  <div class="flex flex-col gap-2">
    <span class="text-xl font-bold">{{ title }}</span>
    <slot></slot>
  </div>
</template>

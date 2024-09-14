<script setup lang="ts">
defineProps({
  title: String,
})
</script>

<template>
  <Card class="flex flex-col gap-2">
    <span class="text-xl font-bold">{{ title }}</span>
    <slot></slot>
  </Card>
</template>

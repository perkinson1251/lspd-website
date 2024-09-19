<script setup lang="ts">
import { ImageSectionProps } from '.'

defineProps<ImageSectionProps>()
</script>

<template>
  <div class="w-full image">
    <img
      :src="src"
      :alt="alt"
      class="w-full h-full pointer-events-none object-cover"
    />
  </div>
</template>

<style scoped>
.image {
  height: calc(clamp(10rem, 64vw - 0.7rem, 32rem));
}
</style>

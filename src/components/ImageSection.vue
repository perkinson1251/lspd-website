<script setup lang="ts">
defineProps({
  src: String,
  alt: String,
})
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
  height: calc(clamp(10.313rem, 63.931vw - 0.716rem, 31.25rem));
}
</style>

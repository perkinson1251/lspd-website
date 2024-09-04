<script setup lang="ts">
import Panel from '@/components/Panel/Panel.vue'
</script>

<template>
  <Panel />
  <RouterLink to="/">Go to Home</RouterLink>
  <RouterLink to="/about">Go to About</RouterLink>
  <RouterView />
</template>

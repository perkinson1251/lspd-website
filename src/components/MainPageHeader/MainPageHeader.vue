<script setup lang="ts">
import { MainPageHeaderProps } from '.'

defineProps<MainPageHeaderProps>()
</script>
<template>
  <header
    class="py-[70px] container mx-auto flex flex-col gap-y-5 md:px-0 px-2"
  >
    <h2 class="text-3xl">{{ subtitle }}</h2>
    <h1 class="text-6xl font-bold italic">{{ title }}</h1>
  </header>
</template>

<script lang="ts" setup>
import Button from './Button.vue'

interface CardProps {
  title: string
  description: string
  imageName: string
  link: string
}

defineProps<CardProps>()
</script>

<template>
  <div
    class="relative p-6 bg-cover bg-center h-[512px] text-white"
    :style="{ backgroundImage: `url(${imageName})` }"
  >
    <div
      class="absolute inset-0 bg-gradient-to-t from-blue-800 to-transparent opacity-80"
    ></div>
    <div
      class="relative z-10 h-full w-full flex flex-col items-end justify-end gap-2"
    >
      <h2 class="text-xl font-bold">{{ title }}</h2>
      <p>{{ description }}</p>
      <a :href="link">
        <Button>Подробнее</Button>
      </a>
    </div>
  </div>
</template>

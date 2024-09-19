<script lang="ts" setup>
import Button from '@/components/ui/Button'
import { CareerCardProps } from '.'

defineProps<CareerCardProps>()
</script>

<template>
  <div
    class="relative p-6 bg-cover bg-center h-[512px] text-white"
    :style="{ backgroundImage: `url(${imageName})` }"
  >
    <div
      class="absolute inset-0 bg-gradient-to-t from-purpleBlue to-transparent opacity-80"
    ></div>
    <div
      class="relative z-10 h-full w-full flex flex-col items-end justify-end gap-2"
    >
      <h2 class="text-xl font-bold">{{ title }}</h2>
      <p>{{ description }}</p>
      <Button as="a" :href="link">Подробнее</Button>
    </div>
  </div>
</template>

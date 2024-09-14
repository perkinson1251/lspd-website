<script lang="ts" setup>
import Image1 from '@/assets/careers/1.jpg'
import Image2 from '@/assets/careers/2.png'
import Image3 from '@/assets/careers/3.png'
import CareerCard from '@/components/ui/CareerCard.vue'

const cards = [
  {
    title: 'Карточка 1',
    description: 'Бла-бла-бла-Бла-бла-бла-Бла-бла-бла-Бла-бла-бла-Бла-бла-бла',
    link: '',
    imageName: Image1,
  },
  {
    title: 'Карточка 2',
    description: 'Бла-бла-бла-Бла-бла-бла-Бла-бла-бла-Бла-бла-бла-Бла-бла-бла',
    link: '',
    imageName: Image2,
  },
  {
    title: 'Карточка 3',
    description: 'Бла-бла-бла-Бла-бла-бла-Бла-бла-бла-Бла-бла-бла-Бла-бла-бла',
    link: '',
    imageName: Image3,
  },
]
</script>
<template>
  <div class="w-full bg-dark md:px-0 px-2">
    <div class="container mx-auto text-white flex flex-col gap-4 py-6">
      <h2 class="text-lg font-medium">
        Стать офицером полиции, Программа повышения квалификации кандидатов
        (CAP), повторный прием на работу
      </h2>
      <h1 class="text-4xl font-bold">Присоединяйтесь к LSPD</h1>
    </div>
  </div>
  <div class="container mx-auto md:px-0 px-2">
    <h1 class="text-3xl font-bold text-center py-[40px]">
      Доступные возможности
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 gap-y-4">
      <CareerCard
        v-for="card in cards"
        :key="card.title"
        :title="card.title"
        :description="card.description"
        :imageName="card.imageName"
      />
    </div>
  </div>
</template>

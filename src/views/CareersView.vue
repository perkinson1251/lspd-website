<script lang="ts" setup>
import AcademyImage from '@/assets/careers/ACADEMY.jpg'
import BackhomeImage from '@/assets/careers/BH.jpg'
import CivilImage from '@/assets/careers/CIVIL.jpg'
import CareerCard from '@/components/ui/CareerCard'

const cards = [
  {
    title: 'Полицейская академия',
    description:
      'Академия полицейского департамента Лос-Сантоса приглашает амбициозных людей пройти обучение и подготовку для службы на защите общества. Мы предлагаем теоретические и практические занятия, чтобы выпускники получили все необходимые навыки для успешной карьеры в правоохранительных органах.',
    link: 'https://sa-es.online/lspd/viewforum.php?f=906',
    imageName: AcademyImage,
  },
  {
    title: '(( Восстановление на службу ))',
    description:
      'Руководство фракции предоставляет возможность вернуться в LSPD для игроков с предыдущим опытом службы в полиции на ролевых серверах. Программа доступна тем, кто может подтвердить свой опыт в правоохранительных органах.',
    link: 'https://sa-es.online/lspd/viewforum.php?f=907',
    imageName: BackhomeImage,
  },
  {
    title: 'Гражданская служба',
    description:
      'Департамент полиции Лос-Сантоса ежегодно предлагает более 700 вакансий, включая правоохранительную и гражданскую службы. Гражданские службы поддерживают работу департамента в сферах, таких как юриспруденция и бухгалтерия, под управлением полицейских администраторов.',
    link: 'https://sa-es.online/lspd/viewforum.php?f=955',
    imageName: CivilImage,
  },
]
</script>
<template>
  <div class="w-full bg-darkBlue md:px-0 px-2">
    <div class="container mx-auto text-white flex flex-col gap-4 py-6">
      <h2 class="text-lg font-medium">
        Стать офицером полиции, Программа повышения квалификации кандидатов
        (CAP), повторный прием на работу
      </h2>
      <h1 class="text-4xl font-bold">Присоединяйтесь к LSPD</h1>
    </div>
  </div>
  <div class="container mx-auto md:px-0 px-2">
    <h1 class="text-3xl font-bold text-center py-[40px]">Доступные вакансии</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 gap-y-4">
      <CareerCard
        v-for="card in cards"
        :key="card.title"
        :title="card.title"
        :description="card.description"
        :imageName="card.imageName"
        :link="card.link"
      />
    </div>
  </div>
</template>

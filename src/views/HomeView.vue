<script setup lang="ts">
import Image1 from '@/assets/homepage_1.png'
import Image2 from '@/assets/homepage_2.png'
import Card from '@/components/ui/Card/Card.vue'
import Link from '@/components/ui/Link/Link.vue'
</script>

<template>
  <header
    class="py-[70px] container mx-auto flex flex-col gap-y-5 md:px-0 px-2"
  >
    <h2 class="text-3xl">Официальный сайт Департамента полиции Лос-Сантоса</h2>
    <h1 class="text-6xl font-bold italic">“Служить и защищать”</h1>
  </header>
  <div
    class="container mx-auto grid md:grid-cols-3 grid-cols-1 md:gap-2 md:mt-[70px] mt-[30px] md:px-0 px-2 gap-y-2"
  >
    <Card class="flex flex-col gap-2">
      <span class="text-xl font-bold">Телефонные номера</span>
      Для опасных для жизни чрезвычайных ситуаций
      <span class="font-bold">9-1-1</span>
      В случае террористических угроз
      <span class="font-bold">1-877-A-THREAT или (1-877-284-7328)</span>
    </Card>
    <Card class="flex flex-col gap-2">
      <span class="text-xl font-bold">Адреса</span>
      <span class="font-bold">Штаб-квартира полиции Лос-Сантоса</span>
      100, 1-ая Уэст-стрит,<br />
      Лос-Сантос, Сан-Андреас, 90012<br />
      В случае чрезвычайной ситуации звоните по телефону 911. Чрезвычайная
      ситуация — это ситуация, которая угрожает жизни или имуществу человека и
      требует незамедлительного реагирования.
    </Card>
    <Card class="flex flex-col gap-2">
      <span class="text-xl font-bold">Стань частью команды</span>
      Существует бесчисленное множество способов помочь полиции Лос-Сантоса
      выполнять свою работу. <br />
      <RouterLink :to="{ name: 'careers' }">
        <Link href="#">Подробнее</Link>
      </RouterLink>
    </Card>
  </div>
  <div
    class="grid md:grid-cols-2 grid-cols-1 md:mt-[60px] mt-[20px] md:px-0 px-2"
  >
    <div class="w-full image">
      <img
        :src="Image1"
        alt="Изображение"
        class="w-full h-full pointer-events-none object-cover"
      />
    </div>
    <div class="w-full image">
      <img
        :src="Image2"
        alt="Изображение"
        class="w-full h-full pointer-events-none object-cover"
      />
    </div>
  </div>
</template>
<style scoped>
.image {
  height: calc(clamp(10.313rem, 63.931vw - 0.716rem, 31.25rem));
}
</style>

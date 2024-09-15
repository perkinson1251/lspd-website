<script setup lang="ts">
import Image from '@/assets/homepage.jpg'
import Image1 from '@/assets/homepage_1.jpg'
import Image2 from '@/assets/homepage_2.jpg'
import ImageSection from '@/components/ImageSection.vue'
import MainPageHeader from '@/components/MainPageHeader.vue'
import Card from '@/components/ui/Card/Card.vue'
import CardItem from '@/components/ui/Card/CardItem.vue'
import Link from '@/components/ui/Link.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <MainPageHeader
    title="“Служить и защищать”"
    subtitle="Официальный сайт Департамента полиции Лос-Сантоса"
  />

  <div
    class="container mx-auto grid md:grid-cols-3 grid-cols-1 md:gap-2 md:mt-[70px] mt-[30px] md:px-0 px-2 gap-y-2"
  >
    <Card>
      <CardItem title="Телефонные номера">
        Для опасных для жизни чрезвычайных ситуаций
        <span class="font-bold">9-1-1</span><br />
        В случае террористических угроз
        <span class="font-bold">1-877-A-THREAT или (1-877-284-7328)</span>
      </CardItem>
    </Card>

    <Card>
      <CardItem title="Адреса">
        <span class="font-bold">Штаб-квартира полиции Лос-Сантоса</span><br />
        Площадь Першинг,<br />
        Лос-Сантос, Сан-Андреас, 90012<br />
        В случае чрезвычайной ситуации звоните по телефону 911.
      </CardItem>
    </Card>

    <Card>
      <CardItem title="Стань частью команды">
        Существует бесчисленное множество способов помочь полиции Лос-Сантоса
        выполнять свою работу. <br />
        <RouterLink :to="{ name: 'careers' }">
          <Link href="#">Подробнее</Link>
        </RouterLink>
      </CardItem>
    </Card>
  </div>

  <div
    class="grid md:grid-cols-3 grid-cols-1 md:mt-[60px] mt-[20px] md:px-0 px-2"
  >
    <ImageSection :src="Image" alt="Изображение 1" />
    <ImageSection :src="Image1" alt="Изображение 2" />
    <ImageSection :src="Image2" alt="Изображение 3" />
  </div>
</template>

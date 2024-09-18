<script setup lang="ts">
import SectionTitle from '@/components/ui/SectionTitle.vue'
import TextBlock from '@/components/ui/TextBlock.vue'
</script>

<template>
  <div class="container mx-auto flex flex-col gap-4 px-2 md:px-0">
    <h1 class="text-4xl font-bold text-center mt-2">О нас</h1>

    <div>
      <SectionTitle>Наша миссия</SectionTitle>
      <TextBlock>
        Миссия Департамента полиции Лос-Сантоса — защищать жизни и имущество
        людей, которым мы служим, снижать уровень преступности и страх перед
        ней, а также повышать общественную стабильность, работая с различными
        сообществами над улучшением качества их жизни...
      </TextBlock>
    </div>

    <div>
      <SectionTitle>Служба нашим гражданам</SectionTitle>
      <TextBlock>
        Мы стремимся повысить общественную безопасность и уменьшить страх и
        уровень преступности. Люди в наших сообществах — наши самые важные
        клиенты...
      </TextBlock>
    </div>

    <div>
      <SectionTitle>Почтение закона</SectionTitle>
      <TextBlock>
        Нам представлена честь и привилегия обеспечивать соблюдение закона. Мы
        должны всегда проявлять добросовестность в использовании власти...
      </TextBlock>
    </div>

    <div>
      <SectionTitle>Приверженность к лидерству</SectionTitle>
      <TextBlock>
        Мы считаем, что Департамент полиции Лос-Сантоса должен быть лидером в
        правоохранительной деятельности. Мы также считаем, что каждый человек
        должен быть лидером в своей сфере ответственности...
      </TextBlock>
    </div>

    <div>
      <SectionTitle>Честность во всем, что мы говорим и делаем</SectionTitle>
      <TextBlock>
        Честность — наш стандарт. Мы гордимся своей профессией и будем вести
        себя так, чтобы заслужить уважение всех людей...
      </TextBlock>
    </div>

    <div>
      <SectionTitle>Качество через постоянное улучшение</SectionTitle>
      <TextBlock>
        Мы будем стремиться достичь высочайшего уровня качества во всех аспектах
        нашей работы. Мы никогда не можем быть удовлетворены "статусом-кво"...
      </TextBlock>
    </div>
  </div>
</template>

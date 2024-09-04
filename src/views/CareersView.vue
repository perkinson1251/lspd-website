<script lang="ts" setup>
import Card from '@/components/ui/Card/Card.vue'
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
      <a
        href="https://sa-es.online/lspd/viewforum.php?f=906"
        class="flex flex-col"
      >
        <img
          src="https://i.imgur.com/rwyGOcm.gif"
          alt="Изображение"
          class="w-full h-[150px] object-cover"
        />
        <Card class="flex-grow flex flex-col gap-4">
          <span class="text-xl font-bold">Полицейская академия</span>
          <p>
            Академия полицейского департамента Лос-Сантос приглашает молодых и
            амбициозных людей стать частью нашей команды. Каждый год мы отбираем
            до 200 кандидатов, которые проходят интенсивное обучение и готовятся
            к ответственной службе на защите общества. Наша программа включает
            не только теоретические занятия и тренировки, но и практические
            кейсы, чтобы обеспечить нашим выпускникам все необходимые навыки для
            успешной карьеры в правоохранительных органах. Присоединяйтесь к нам
            и станьте частью команды, которая делает Лос-Сантос безопаснее
            каждый день.
          </p>
        </Card>
      </a>

      <a
        href="https://sa-es.online/lspd/viewforum.php?f=907"
        class="flex flex-col"
      >
        <img
          src="https://i.imgur.com/r6lHWJY.gif"
          alt="Изображение"
          class="w-full h-[150px] object-cover"
        />
        <Card class="flex-grow flex flex-col gap-4">
          <span class="text-xl font-bold">(( Восстановление на службу ))</span>
          <p>
            Руководство фракции предоставляет возможность, путем подачи
            заявления на восстановление в LSPD попасть во фракцию. Программа
            предполагает собой возвращение в неё игроков, которые ранее уже
            имели опыт отыгрыша полиции. Данной программой может воспользоваться
            любой желающий, который ранее играл в правоохранительных на серверах
            с повышенным уровнем ролевой игры и может это доказать.
          </p>
        </Card>
      </a>

      <a
        href="https://sa-es.online/lspd/viewforum.php?f=955"
        class="flex flex-col"
      >
        <img
          src="https://i.imgur.com/SSsInTs.gif"
          alt="Изображение"
          class="w-full h-[150px] object-cover"
        />
        <Card class="flex-grow flex flex-col gap-4">
          <span class="text-xl font-bold">Гражданское трудоустройство</span>
          <p>
            Гражданское трудоустройство. департамент полиции является одним из
            крупнейших работодателей на рынке труда города, ежегодно предлагая
            более 700 вакансий как на правоохранительной службе, так и на
            гражданской. Гражданские службы департамента играют ключевую роль в
            поддержании работоспособного состояния организации, начиная от
            юридического представительства в суде и заканчивая ведением
            финансового учета в бухгалтерии бюджетных средств ЛСПД. Руководство
            гражданскими службами ЛСПД осуществляется полицейскими
            администраторами, которые подчиняются директору офиса
            вспомогательных служб.
          </p>
        </Card>
      </a>
    </div>
  </div>
</template>

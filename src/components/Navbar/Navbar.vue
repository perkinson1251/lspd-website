<script lang="ts" setup>
import badge from '@/assets/badge.png'
import Button from '@/components/ui/Button/Button.vue'
import NavBarLink from './NavBarLink.vue'
</script>
<template>
  <nav class="w-full shadow-sm sticky top-0 bg-white">
    <div class="container mx-auto flex items-center justify-between">
      <RouterLink :to="{ name: 'home' }">
        <img :src="badge" width="68" class="pointer-events-none" />
      </RouterLink>
      <div class="flex items-center gap-5">
        <NavBarLink :to="{ name: 'about' }">О нас</NavBarLink>
        <NavBarLink :to="{ name: 'contacts' }">Наши контакты</NavBarLink>
        <NavBarLink :to="{ name: 'faq' }">F.A.Q.</NavBarLink>
        <NavBarLink tag="a" href="https://sa-es.online/lspd"
          >Новости</NavBarLink
        >
        <Button as="a" href="123">КАРЬЕРА</Button>
      </div>
    </div>
  </nav>
</template>

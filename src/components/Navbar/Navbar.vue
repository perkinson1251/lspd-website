<script lang="ts" setup>
import LSPDLogo from '@/assets/badge.png'
import Button from '@/components/ui/Button.vue'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import NavBarLink from './NavBarLink.vue'

const isDropdownOpen = ref(false)

const toggleDropdown = (event: MouseEvent) => {
  event.stopPropagation()
  isDropdownOpen.value = !isDropdownOpen.value
}

const closeDropdown = () => {
  isDropdownOpen.value = false
}

const handleClickOutside = (event: MouseEvent) => {
  const dropdownMenu = document.querySelector('.dropdown-menu')
  if (dropdownMenu && !dropdownMenu.contains(event.target as Node)) {
    closeDropdown()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <nav class="w-full shadow-sm sticky top-0 bg-white z-10 md:px-0 px-2">
    <div class="container mx-auto flex items-center justify-between">
      <RouterLink :to="{ name: 'home' }">
        <img
          :src="LSPDLogo"
          alt="Badge"
          width="68"
          class="pointer-events-none"
        />
      </RouterLink>
      <button
        @click="toggleDropdown"
        class="lg:hidden flex items-center justify-center size-10 bg-light rounded text-gray-500 hover:text-gray-700"
      >
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
      <div class="hidden lg:flex items-center gap-5">
        <NavBarLink :to="{ name: 'about' }">О нас</NavBarLink>
        <NavBarLink tag="a" href="https://sa-es.online/lspd/viewforum.php?f=997"
          >Ближайшая станция</NavBarLink
        >
        <NavBarLink tag="a" href="https://sa-es.online/lspd"
          >Новости</NavBarLink
        >
        <RouterLink :to="{ name: 'careers' }">
          <Button>КАРЬЕРА</Button>
        </RouterLink>
      </div>
    </div>
    <div
      v-if="isDropdownOpen"
      class="dropdown-menu lg:hidden flex flex-col items-start gap-2 bg-white border-t border-gray-200 p-4 transition-all duration-300 ease-in-out"
    >
      <NavBarLink :to="{ name: 'about' }">О нас</NavBarLink>
      <NavBarLink tag="a" href="https://sa-es.online/lspd/viewforum.php?f=997"
        >Ближайшая станция</NavBarLink
      >
      <NavBarLink tag="a" href="https://sa-es.online/lspd">Новости</NavBarLink>
      <RouterLink :to="{ name: 'careers' }">
        <Button>КАРЬЕРА</Button>
      </RouterLink>
    </div>
  </nav>
</template>

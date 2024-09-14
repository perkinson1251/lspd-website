<script lang="ts" setup>
import CityLogo from '@/components/ui/CityLogo.vue'
import Phone from '@/components/ui/Phone.vue'
</script>

<template>
  <header class="flex items-center justify-between w-full bg-primary px-8 py-2">
    <CityLogo />
    <div class="flex items-center gap-3">
      <Phone number="911">Экстренные службы</Phone>
      <Phone number="311">Городские службы</Phone>
    </div>
  </header>
</template>

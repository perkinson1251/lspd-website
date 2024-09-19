<script lang="ts" setup>
import CityLogo from '@/components/ui/CityLogo'
import Phone from '@/components/ui/Phone/inedx'
</script>

<template>
  <header
    class="flex items-center justify-between w-full bg-primaryBlue px-8 py-2"
  >
    <CityLogo />
    <div class="flex items-center gap-3">
      <Phone number="911">Экстренные службы</Phone>
      <Phone number="311">Городские службы</Phone>
    </div>
  </header>
</template>

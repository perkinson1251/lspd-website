<script lang="ts" setup>
import { PhoneProps } from './inedx'

defineProps<PhoneProps>()
</script>

<template>
  <div class="sm:flex items-center gap-1 hidden">
    <div
      class="bg-white text-primaryBlue p-[2.5px_6px] font-bold text-xs rounded-lg"
    >
      {{ number }}
    </div>
    <span class="text-xs text-white">
      <slot />
    </span>
  </div>
</template>

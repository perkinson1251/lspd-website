<script lang="ts" setup>
interface Props {
  number: string
}

defineProps<Props>()
</script>

<template>
  <div class="sm:flex items-center gap-1 hidden">
    <div
      class="bg-white text-primary p-[2.5px_6px] font-bold text-xs rounded-lg"
    >
      {{ number }}
    </div>
    <span class="text-xs text-white">
      <slot />
    </span>
  </div>
</template>

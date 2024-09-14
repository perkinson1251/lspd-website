<script setup lang="ts">
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar/Navbar.vue'
import Panel from '@/components/Panel.vue'
</script>

<template>
  <Panel />
  <Navbar />
  <RouterView />
  <Footer />
</template>

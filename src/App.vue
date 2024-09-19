<script setup lang="ts">
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import TopPanel from '@/components/TopPanel'
</script>

<template>
  <TopPanel />
  <Navbar />
  <RouterView />
  <Footer />
</template>

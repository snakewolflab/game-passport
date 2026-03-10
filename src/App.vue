<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from './components/layout/TheHeader.vue'
import TheFooter from './components/layout/TheFooter.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <TheHeader />
    
    <main class="flex-grow w-full">
      <RouterView />
    </main>

    <TheFooter />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;500;700;800&display=swap');
</style>
<script setup lang="ts">
import HeroSection from '@/components/home/HeroSection.vue'
import NewsSection from '@/components/home/NewsSection.vue'
import GradeGrid from '@/components/home/GradeGrid.vue'
import SearchSection from '@/components/search/SearchSection.vue'
</script>

<template>
  <div>
    <HeroSection />
    
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-24">
      <NewsSection />
      <GradeGrid />
      <SearchSection />
    </div>
  </div>
</template>
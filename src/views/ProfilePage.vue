<template>
  <div class="max-w-3xl mx-auto p-6 bg-[#fdfcfd] min-h-screen text-[#262a2f]">
    <ProfileHeader :user="userData" />

    <hr class="my-8 border-slate-300" />

    <section class="mb-10">
      <h2 class="text-sm font-black mb-4 flex items-center gap-2">
        <span class="w-2 h-4 bg-slate-800 inline-block"></span>
        進行中の試験 / 予約状況
      </h2>
      <div v-if="reservations.length > 0">
        <ReservationCard 
          v-for="res in reservations" 
          :key="res.id" 
          :reservation="res" 
        />
      </div>
      <p v-else class="text-slate-400 text-sm italic">現在、予約済みの試験はありません。</p>
    </section>

    <section>
      <h2 class="text-sm font-black mb-4 flex items-center gap-2">
        <span class="w-2 h-4 bg-slate-800 inline-block"></span>
        取得済み検定査証 (Passports & Visas)
      </h2>
      
      <CertificationSearch v-model="searchQuery" />

      <div class="mt-4 border-t-2 border-slate-800">
        <CertificationItem 
          v-for="cert in filteredCertifications" 
          :key="cert.id" 
          :certification="cert" 
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import ProfileHeader from '@/components/profile/ProfileHeader.vue';
import ReservationCard from '@/components/reservations/ReservationCard.vue';
import CertificationSearch from '@/components/certification/CertificationSearch.vue';
import CertificationItem from '@/components/certification/CertificationItem.vue';
import type { UserProfile, Reservation, Certification } from '@/types';

// ダミーデータ（実際はAPI等から取得）
const userData = ref<UserProfile>({
  id: 'SnakeWolf_01',
  name: 'ゲーム 太郎',
  registrationDate: '2025/10/01',
  imageUrl: null
});

const reservations = ref<Reservation[]>([
  {
    id: 'GKEN-2026-0012',
    examName: 'G検',
    category: 'アクション',
    grade: 2,
    status: 'confirmed',
    examDate: '2026/05/20',
    venue: '東京国際展示場 第3ホール'
  }
]);

const certifications = ref<Certification[]>([
  { id: 'CERT-8821', year: 2025, term: 2, category: 'RPG', grade: 3, certifiedDate: '2025/12/15' },
  { id: 'CERT-4410', year: 2025, term: 1, category: 'パズル', grade: 5, certifiedDate: '2025/07/20' }
]);

const searchQuery = ref('');

const filteredCertifications = computed(() => {
  return certifications.value.filter(c => 
    c.category.includes(searchQuery.value) || 
    c.year.toString().includes(searchQuery.value)
  );
});
</script>
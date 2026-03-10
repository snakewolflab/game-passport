<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import SearchSection from '@/components/search/SearchSection.vue'

const route = useRoute()
const router = useRouter()

// 検索キーワードの取得
const searchQuery = computed(() => (route.query.q as string) || '')

// タイトルの動的切り替え
const displayTitle = computed(() => {
  return searchQuery.value ? `「${searchQuery.value}」の検索結果` : 'すべての結果'
})

// 本来はここでAPIからデータを取得（モックデータ）
const allExams = [
  { id: '1', name: 'FPSエイム・レスポンス検定', category: 'Action' },
  { id: '2', name: 'タクティカル・FPS・タクティクス', category: 'Strategy' },
  { id: '3', name: 'オープンワールド探索技能', category: 'Adventure' },
  { id: '4', name: 'RPG・コマンドバトル理論', category: 'RPG' },
]

// フィルタリングロジック（簡易版）
const filteredResults = computed(() => {
  if (!searchQuery.value) return allExams
  return allExams.filter(exam => 
    exam.name.includes(searchQuery.value) || 
    exam.category.includes(searchQuery.value)
  )
})
</script>

<template>
  <div class="max-w-screen-xl mx-auto px-4 py-12 md:py-20">
    
    <section class="mb-20">
      <SearchSection />
    </section>

    <div class="border-t border-slate-200 pt-12">
      <div class="mb-10 flex items-center justify-between">
        <h2 class="text-xl md:text-2xl font-black text-blue-900">{{ displayTitle }}</h2>
        <span class="text-slate-400 text-sm font-bold">{{ filteredResults.length }} 件</span>
      </div>

      <div class="grid grid-cols-1 gap-8">
        <div v-for="exam in filteredResults" :key="exam.id" 
             class="bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
          
          <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <span class="inline-block px-3 py-1 bg-blue-50 text-blue-500 text-[10px] font-bold rounded-full uppercase tracking-widest mb-2">
                {{ exam.category }}
              </span>
              <h4 class="text-xl md:text-2xl font-bold text-slate-800">{{ exam.name }}</h4>
            </div>
          </div>

          <div class="space-y-4">
            <p class="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Choose Your Grade</p>
            <div class="grid grid-cols-5 md:grid-cols-10 gap-2 md:gap-3">
              <button v-for="n in 10" :key="n"
                class="aspect-square flex flex-col items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 hover:bg-blue-500 hover:text-white transition-all group active:scale-95"
              >
                <span class="text-sm md:text-base font-black">{{ n }}</span>
                <span class="text-[8px] md:text-[10px] opacity-70 font-bold">級</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div v-if="filteredResults.length === 0" class="py-20 text-center">
        <p class="text-slate-400 font-bold">該当する検定が見つかりませんでした。</p>
      </div>
    </div>
  </div>
</template>
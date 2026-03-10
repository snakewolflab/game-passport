<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const searchQuery = ref('')

const onSearch = () => {
  if (!searchQuery.value.trim()) return
  // 検索クエリをパラメータにのせて移動
  router.push({ name: 'search', query: { q: searchQuery.value } })
}
</script>

<template>
  <div class="w-full max-w-3xl mx-auto">
    <div class="space-y-2">
        <h3 class="text-2xl font-extrabold text-center mb-8">検索</h3>
        <p class="max-w-2xl mx-auto text-slate-500 text-sm md:text-lg mb-12 text-center">検定名・ジャンル・キーワードを入力してこのサイト内を検索する</p>
      </div>
    <div class="relative group">
      <input 
        v-model="searchQuery"
        type="text" 
        placeholder="キーワードを入力..."
        class="w-full h-16 md:h-20 px-8 rounded-2xl bg-white border-2 border-blue-100 shadow-sm focus:border-blue-400 focus:ring-4 focus:ring-blue-50 outline-none text-lg transition-all"
        @keyup.enter="onSearch"
      />
      <button 
        @click="onSearch"
        class="absolute right-3 top-3 bottom-3 px-6 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl shadow-md transition-all active:scale-95"
      >
        検索
      </button>
    </div>
    <div class="mt-4 flex flex-wrap gap-2 justify-center text-xs">
      <span class="text-slate-400 py-1">注目のキーワード:</span>
      <button class="px-3 py-1 bg-white border border-slate-200 rounded-full hover:border-blue-300 text-slate-600">FPSエイム</button>
      <button class="px-3 py-1 bg-white border border-slate-200 rounded-full hover:border-blue-300 text-slate-600">RPG知識</button>
      <button class="px-3 py-1 bg-white border border-slate-200 rounded-full hover:border-blue-300 text-slate-600">パズル戦略</button>
    </div>
  </div>
</template>
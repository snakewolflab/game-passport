<template>
  <header class="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
    <div class="max-w-screen-xl mx-auto px-4 h-16 flex items-center justify-between">
      
      <router-link to="/" class="flex items-center gap-2 group">
        <div class="w-9 h-9 bg-blue-400 rounded-xl flex items-center justify-center text-white font-black shadow-sm group-hover:bg-blue-500 transition">G</div>
        <span class="font-bold text-slate-800 tracking-tight hidden xs:block">ゲームパスポート</span>
      </router-link>

      <div class="flex items-center gap-2 md:gap-4">
        
        <router-link to="/search" class="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </router-link>

        <button class="flex items-center gap-2 p-2 md:px-4 md:py-2 text-slate-600 hover:bg-slate-50 rounded-xl transition">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span class="hidden md:inline text-sm font-bold">マイページ</span>
        </button>

        <button class="bg-blue-500 text-white p-2 md:px-6 md:py-2.5 rounded-xl md:rounded-full shadow-md hover:bg-blue-600 transition flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 md:w-4 md:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          <span class="hidden md:inline text-sm font-bold">受験申込</span>
        </button>

      </div>
    </div>
  </header>
</template>

<style scoped>
/* 極小デバイス向け調整 */
@media (max-width: 380px) {
  .xs\:hidden { display: none; }
}
</style>
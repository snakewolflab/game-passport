<template>
  <div class="bg-white px-6 py-4 border-b border-slate-100 last:border-none flex items-center justify-between hover:bg-blue-50/30 transition-colors">
    <div class="flex items-center gap-6">
      <div class="text-sm text-slate-400 font-medium">
        {{ certification.year }}年
      </div>
      <div>
        <p class="text-sm font-bold text-slate-800">
          {{ certification.category }}分野 {{ certification.grade }}級 合格
        </p>
        <p class="text-xs text-slate-500 mt-0.5">合格証番号：{{ certification.id }}</p>
      </div>
    </div>
    
    <div class="flex items-center gap-4">
      <button class="text-xs font-bold text-[#00479d] hover:underline">
        合格証を表示
      </button>
      <svg class="text-slate-300" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
    </div>
  </div>
</template>
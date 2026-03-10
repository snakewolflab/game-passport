<template>
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    <div class="lg:col-span-3">
      <h3 class="text-xl font-extrabold border-l-4 border-blue-400 pl-4">大切なお知らせ</h3>
    </div>
    <div class="lg:col-span-9 bg-white rounded-2xl shadow-sm border border-slate-100 divide-y divide-slate-50">
      <div v-for="n in 3" :key="n" class="p-5 flex flex-col md:flex-row md:items-center gap-4 hover:bg-slate-50/50 transition">
        <span class="text-slate-400 text-xs font-mono whitespace-nowrap">2026.03.10</span>
        <span class="inline-block w-fit px-2 py-0.5 bg-blue-100 text-blue-600 text-[10px] font-bold rounded">重要</span>
        <a href="#" class="text-slate-700 text-sm font-medium hover:text-blue-500">2026年度第1回検定の申込受付を開始しました。</a>
      </div>
    </div>
  </div>
</template>
<template>
  <div class="bg-white rounded-xl border-l-8 border-[#00479d] shadow-sm border-y border-r border-slate-200 p-6 mb-6">
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <div class="flex items-center gap-2 mb-1">
          <span class="text-[#00479d] font-bold text-sm">申込受付中・進行中の試験</span>
          <span class="bg-orange-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">重要</span>
        </div>
        <h3 class="text-lg font-bold">
          {{ reservation.examName }} {{ reservation.category }}（{{ reservation.grade }}級）
        </h3>
        <p class="text-sm text-slate-500 mt-1">
          試験日：{{ reservation.examDate }} | 会場：{{ reservation.venue }}
        </p>
      </div>
      
      <div class="flex items-center gap-4">
        <div class="text-right hidden md:block px-4 border-r border-slate-100">
          <p class="text-xs text-slate-400 uppercase">Status</p>
          <p class="font-bold text-[#00479d]">{{ statusLabel }}</p>
        </div>
        <button class="bg-[#00479d] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#00357a] transition-all shadow-md">
          受験票を確認する
        </button>
      </div>
    </div>
  </div>
</template>
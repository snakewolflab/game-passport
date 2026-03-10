<template>
  <div class="bg-white rounded-xl shadow-sm border border-slate-200 p-8 flex flex-col md:flex-row items-center gap-8">
    <div class="w-24 h-24 rounded-full bg-slate-100 border border-slate-200 flex-shrink-0 overflow-hidden">
      <img v-if="user.imageUrl" :src="user.imageUrl" class="w-full h-full object-cover" />
      <div v-else class="w-full h-full flex items-center justify-center text-slate-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
      </div>
    </div>

    <div class="flex-1 text-center md:text-left">
      <div class="flex items-center justify-center md:justify-start gap-3 mb-2">
        <h2 class="text-2xl font-bold">{{ user.name }} 様</h2>
        <span class="bg-blue-50 text-[#00479d] text-xs font-bold px-2 py-1 rounded border border-blue-100">
          公式会員
        </span>
      </div>
      <div class="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm text-slate-500">
        <p>ユーザーID：<span class="text-slate-800 font-medium">{{ user.id }}</span></p>
        <p>登録日：<span class="text-slate-800 font-medium">{{ user.registrationDate }}</span></p>
      </div>
    </div>

    <button class="px-6 py-2 border border-slate-300 rounded-full text-sm font-medium hover:bg-slate-50 transition-all">
      プロフィールを編集
    </button>
  </div>
</template>
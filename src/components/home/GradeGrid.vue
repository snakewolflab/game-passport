<template>
  <div>
    <h3 class="text-2xl font-extrabold text-center mb-12">検定レベル</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div v-for="g in grades" :key="g.level" class="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition text-center group">
        <div class="text-4xl font-black text-blue-400 mb-2 group-hover:scale-110 transition-transform">{{ g.level }}<span class="text-lg">級</span></div>
        <div class="text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-4">{{ g.label }}</div>
        <p class="text-xs text-slate-500 leading-relaxed mb-6">{{ g.text }}</p>
        <button class="w-full py-2 bg-slate-50 text-blue-500 text-xs font-bold rounded-lg group-hover:bg-blue-50 transition">詳細を確認</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const grades = [
  { level: '10', label: '条件：なし', text: 'まずはここから' },
  { level: '9', label: '条件：10級', text: '高度な戦略と深い知識を問うエキスパート版。' },
  { level: '8', label: '条件：9級', text: '一般的なリテラシーと基礎操作を習得。' },
  { level: '7', label: '条件：8級', text: '初心者向け。ゲームの基本ルールを網羅。' },
  { level: '6', label: '条件：7級', text: '初心者向け。ゲームの基本ルールを網羅。' },
  { level: '5', label: '条件：6級', text: '初心者向け。ゲームの基本ルールを網羅。' },
  { level: '4', label: '条件：5級', text: '初心者向け。ゲームの基本ルールを網羅。' },
  { level: '3', label: '条件：4級', text: '初心者向け。ゲームの基本ルールを網羅。' },
  { level: '2', label: '条件：3級', text: '初心者向け。ゲームの基本ルールを網羅。' },
  { level: '1', label: '条件：2級', text: '初心者向け。ゲームの基本ルールを網羅。' },
  { level: '指導者', label: '条件：1級', text: '初心者向け。ゲームの基本ルールを網羅。' },
  { level: '専門家', label: '条件：指導者', text: '初心者向け。ゲームの基本ルールを網羅。' },
]
</script>
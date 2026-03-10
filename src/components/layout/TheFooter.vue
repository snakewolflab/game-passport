<template>
  <footer class="bg-white border-t border-slate-200 pt-16 pb-8 mt-auto">
    <div class="max-w-screen-xl mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div class="space-y-4">
          <div class="flex items-center gap-2">
            <div class="w-6 h-6 bg-blue-400 rounded text-white flex items-center justify-center font-bold text-xs">G</div>
            <span class="font-bold text-lg">ゲームパスポート</span>
          </div>
          <p class="text-xs text-slate-500 leading-relaxed">ゲーム文化の健全な発展と、プレイヤーの誇りある活動を支援します。</p>
        </div>
        <div v-for="col in footerLinks" :key="col.title">
          <h4 class="font-bold text-sm mb-6 border-b border-blue-100 pb-2">{{ col.title }}</h4>
          <ul class="space-y-3 text-xs text-slate-500">
            <li v-for="link in col.links" :key="link"><a href="#" class="hover:text-blue-500">{{ link }}</a></li>
          </ul>
        </div>
      </div>
      <div class="pt-8 border-t border-slate-100 text-center text-[10px] text-slate-400">
        &copy; 2026 Game Passport for SnakeWolf. All rights reserved. | <a href="https://snakewolf.com" class="hover:text-blue-500">運営団体</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const footerLinks = [
  { title: '検定案内', links: ['検定概要', '各級詳細', '試験日程'] },
  { title: 'サポート', links: ['公式テキスト', 'FAQ', 'お問い合わせ'] },
  { title: '規約', links: ['利用規約', 'プライバシー', '特定商取引法'] }
]
</script>
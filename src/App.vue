<template>
  <div class="min-h-screen bg-[#f8fafc] text-slate-900 font-sans">
    <nav class="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
      <div class="max-w-5xl mx-auto px-6 h-16 flex justify-between items-center">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-indigo-200 shadow-lg">
            <span class="text-white font-black text-lg">G</span>
          </div>
          <span class="font-bold tracking-tight text-slate-800">Game Certificate</span>
        </div>
        <div class="flex items-center gap-6">
          <button class="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors">マイページ</button>
          <button class="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-bold hover:bg-indigo-100 transition-all">検定を予約する</button>
        </div>
      </div>
    </nav>

    <main class="max-w-5xl mx-auto py-10 px-6">
      <ProfilePage />
    </main>
  </div>
</template>

<style>
/* M PLUS Rounded 1c をインポート */
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;500;700;800&display=swap');

body {
  font-family: 'M PLUS Rounded 1c', sans-serif;
  letter-spacing: 0.01em;
  color: #333;
  background-color: #F4F7F9;
}

/* ボタンや見出しなど、さらに強調したい部分 */
.font-bold-ud {
  font-weight: 700;
}
</style>
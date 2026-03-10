import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Search from '@/views/SearchView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
        path: '/search',
        name: 'search',
        component: Search
    }
    // 今後、検定詳細や申込ページをここに追加
  ]
})

export default router
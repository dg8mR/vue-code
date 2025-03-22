import { createRouter, createWebHistory } from 'vue-router'
import Game from '../components/GameC.vue'
import Skills from '../components/SkillsC.vue'
import Shop from '../components/ShopC.vue'

const routes = [
  { path: '/', redirect: '/game' }, // Перенаправление на вкладку "Игра" по умолчанию
  { path: '/game', component: Game },
  { path: '/skills', component: Skills },
  { path: '/shop', component: Shop }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
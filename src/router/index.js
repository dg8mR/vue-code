import { createRouter, createWebHistory } from 'vue-router';
import MenuComponent from '../components/MenuComponent.vue'; // Обновленный путь
import GameComponent from '../components/GameComponent.vue'; // Обновленный путь
import SkillsComponent from '../components/SkillsComponent.vue'; // Обновленный путь
import ShopComponent from '../components/ShopComponent.vue'; // Обновленный путь

const routes = [
  { path: '/', component: MenuComponent },
  { path: '/game', component: GameComponent },
  { path: '/skills', component: SkillsComponent },
  { path: '/shop', component: ShopComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
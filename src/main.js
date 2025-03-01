// Импортируем Vue и создаем приложение
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Импортируем настроенную роутеризацию
import './assets/style.css'; // Импортируем глобальный CSS

// Создаем экземпляр Vue-приложения
const app = createApp(App);

// Используем роутер
app.use(router);

// Монтируем приложение на #app
app.mount('#app');
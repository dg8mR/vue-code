<template>
  <div class="container">
    <!-- Выбор класса -->
    <div class="select">
      <select>
        <option>Воин</option>
        <option>Лучник</option>
        <option>Маг</option>
      </select>
    </div>

    <!-- Экран смерти -->
    <DeathScreen v-if="state.player.hp <= 0" />

    <!-- Основной контент -->
    <div v-else>
      <!-- Вкладки -->
      <div class="tabs">
        <button
          :class="{ active: $route.path === '/game' }"
          @click="$router.push('/game')"
        >
          Игра
        </button>
        <button
          :class="{ active: $route.path === '/skills' }"
          @click="$router.push('/skills')"
        >
          Навыки
        </button>
        <button
          :class="{ active: $route.path === '/shop' }"
          @click="$router.push('/shop')"
        >
          Магазин
        </button>
      </div>

      <!-- Маршрутизация -->
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import DeathScreen from './components/DeathScreenC.vue'

const state = reactive({
  enemy: {
    hp: 10,
    lvl: 1,
    maxhp: 10,
    ex: 0,
    attack: 0,
  },
  player: {
    hp: 100,
    lvl: 1,
    maxhp: 100,
    ex: 0,
    attack: 5,
    lowk: 0,
    inte: 0,
    points: 10,
    yclun: "Уклонился",
  },
  log: ""
})
</script>

<style scoped>
/* Стили остаются такими же, как в вашем исходном коде */
</style>
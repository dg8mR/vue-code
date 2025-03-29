<template>
  <div class="container">
    <!-- Выбор класса -->
    <div class="select" v-if="state.start == 0">
      <select>
        <option>Воин</option>
        <option>Лучник</option>
        <option>Маг</option>


      </select>
      <button @click="start">Начать</button>
    </div>
    <div v-if="state.start == 1">
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
        <button
          :class="{ active: $route.path === '/ekip' }"
          @click="$router.push('/ekip')"
        >
          Экипировка
        </button>
      </div>

      <!-- Маршрутизация -->
      <router-view />
    </div>
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
  equip:["","","","","",""],
  equip_V: {
    head:'',
    body:'',
    foot:'',
    armR:'',
    armL:'',
    pois:'',
  },
  log: "",
  start: 0
})

function start(){
    state.start += 1
}
</script>

<style scoped>
/* Стили остаются такими же, как в вашем исходном коде */
.select button{
  position: absolute;
  background-color: #ff0000;
  width: 100px;
  height: 100px;
  top:200px;
  left:600px;
}
</style>
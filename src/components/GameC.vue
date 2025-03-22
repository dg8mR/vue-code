<template>
  <div class="tab-content">
    <h3 class="enemy-label">Враг</h3>
    <button @click="playerAttack" class="attack-button">
      👻
    </button>
    <div class="enemy-stats">
      <p>Урон: {{ state.enemy.attack }}</p>
      <p>HP: {{ state.enemy.hp }} / {{ state.enemy.maxhp }}</p>
      <div class="health-bar">
        <div
          class="health-fill"
          :style="{ width: `${(state.enemy.hp / state.enemy.maxhp) * 100}%` }"
          :class="enemyHealthClass"
        ></div>
      </div>
      <p>Уровень: {{ state.enemy.lvl }}</p>
    </div>
    <h3 class="player-label">Персонаж</h3>
    <div class="stats">
      <div class="player-stats">
        <p>Урон: {{ state.player.attack }}</p>
        <p>{{ state.player.yclun }}</p>
        <p>HP: {{ state.player.hp }} / {{ state.player.maxhp }}</p>
        <div class="health-bar">
          <div
            class="health-fill"
            :style="{ width: `${(state.player.hp / state.player.maxhp) * 100}%` }"
            :class="playerHealthClass"
          ></div>
        </div>
        <p>Уровень: {{ state.player.lvl }}</p>
        <p>Опыт: {{ state.player.ex }}</p>
        <p>{{ state.log }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { state } from '../store/index.js'

// Логика атаки игрока и босса
function playerAttack() {
  if (state.player.hp <= 0) return
  state.player.attack = getRandomInt(state.player.lvl, state.player.lvl * 2)
  state.enemy.hp -= state.player.attack
  if (state.enemy.hp <= 0) {
    state.player.ex += state.enemy.lvl
    state.enemy.lvl += 1
    state.enemy.hp = state.enemy.lvl * 10
    state.enemy.maxhp = state.enemy.hp
    state.player.points += 5
    state.player.hp = state.player.maxhp
    if (state.player.ex >= 10) {
      state.player.lvl += 1
      state.player.ex = 0
    }
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// Добавляем классы для изменения цвета полоски здоровья
const enemyHealthClass = computed(() => {
  if (state.enemy.hp / state.enemy.maxhp < 0.2) return 'critical-health'
  if (state.enemy.hp / state.enemy.maxhp < 0.5) return 'low-health'
  return ''
})

const playerHealthClass = computed(() => {
  if (state.player.hp / state.player.maxhp < 0.2) return 'critical-health'
  if (state.player.hp / state.player.maxhp < 0.5) return 'low-health'
  return ''
})
</script>

<style scoped>

</style>
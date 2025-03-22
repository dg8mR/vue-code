<template>
  <div class="tab-content">
    <h3>Навыки</h3>
    <p>Доступные очки умений: {{ state.player.points }}</p>
    <ul>
      <li>
        <span>Повышение HP: {{ state.player.maxhp }}</span>
        <button @click="increaseSkill('maxhp')">+</button>
      </li>
      <li>
        <span>Ловкость: {{ state.player.lowk }}</span>
        <button @click="increaseSkill('lowk')">+</button>
      </li>
      <li>
        <span>Интеллект: {{ state.player.inte }}</span>
        <button @click="increaseSkill('inte')">+</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { state } from '../store/index.js'

function increaseSkill(skill) {
  if (state.player.points > 0) {
    state.player[skill] += 1
    state.player.points -= 1
  } else {
    alert('Недостаточно очков умений!')
  }
}
</script>

<style scoped>
/* Стили остаются такими же, как в вашем исходном коде */
</style>
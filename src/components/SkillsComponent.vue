<template>
  <div>
    <h2>Навыки</h2>
    <p>Доступные очки умений: {{ state.player.points }}</p>
    <button @click="upgradeHP">Повышение HP: {{ state.player.maxhp }}</button>
    <button @click="upgradeDexterity">Ловкость: {{ state.player.lowk }}</button>
    <button @click="upgradeIntelligence">Интеллект: {{ state.player.inte }}</button>
    <button @click="goToMenu">Вернуться в меню</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      state: {
        player: { points: 5, maxhp: 100, lowk: 10, inte: 10 },
      },
    };
  },
  methods: {
    upgradeHP() {
      if (this.state.player.points > 0) {
        this.state.player.maxhp += 10;
        this.state.player.points -= 1;
      }
    },
    upgradeDexterity() {
      if (this.state.player.points > 0) {
        this.state.player.lowk += 1;
        this.state.player.points -= 1;
      }
    },
    upgradeIntelligence() {
      if (this.state.player.points > 0) {
        this.state.player.inte += 1;
        this.state.player.points -= 1;
      }
    },
    goToMenu() {
      this.$router.push('/');
    },
  },
};
</script>
<template>
  <div>
    <h2>Выберите класс:</h2>
    <button @click="selectClass('Воин')">Воин</button>
    <button @click="selectClass('Лучник')">Лучник</button>
    <button @click="selectClass('Маг')">Маг</button>
    <p>Выбрано: {{ state.player.class }}</p>

    <h2>Выберите сложность:</h2>
    <button @click="selectDifficulty('Легко')">Легко</button>
    <button @click="selectDifficulty('Средне')">Средне</button>
    <button @click="selectDifficulty('Сложно')">Сложно</button>
    <p>Выбрано: {{ state.clog }}</p>

    <button @click="startGame">Начать игру</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      state: {
        player: { class: '', points: 0 },
        clog: '',
      },
    };
  },
  methods: {
    selectClass(classType) {
      this.state.player.class = classType;
    },
    selectDifficulty(difficulty) {
      this.state.clog = difficulty;
    },
    startGame() {
      if (this.state.player.class && this.state.clog) {
        this.$router.push('/game');
      } else {
        alert('Выберите класс и сложность!');
      }
    },
  },
};
</script>
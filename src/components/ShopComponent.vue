<template>
  <div>
    <h2>Магазин</h2>
    <p>Здесь можно покупать предметы.</p>
    <p>Зелье здоровья: 10 монет</p>
    <p>Усиление атаки: 20 монет</p>
    <p>Усиление защиты: 30 монет</p>
    <button @click="goToMenu">Вернуться в меню</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToMenu() {
      this.$router.push('/');
    },
  },
};
</script>
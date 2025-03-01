<!-- components/Game.vue -->
<template>
  <div class="container">
    <!-- Tabs Section -->
    <div class="tabs">
      <div
        class="tab"
        :class="{ active: currentTab === 'game' }"
        @click="currentTab = 'game'"
      >
        Игра
      </div>
      <div
        class="tab"
        :class="{ active: currentTab === 'skills' }"
        @click="currentTab = 'skills'"
      >
        Навыки
      </div>
      <div
        class="tab"
        :class="{ active: currentTab === 'shop' }"
        @click="currentTab = 'shop'"
      >
        Магазин
      </div>
    </div>

    <!-- Dynamic Component Section -->
    <keep-alive>
      <component :is="currentTabComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import Skills from './SkillsComponent.vue';
import Shop from './ShopComponent.vue';
import GameContent from './GameComponent.vue'; // New component for the "Игра" tab

export default {
  components: { Skills, Shop, GameContent }, // Register the new component
  data() {
    return {
      currentTab: 'game', // Default tab set to "game"
    };
  },
  computed: {
    currentTabComponent() {
      switch (this.currentTab) {
        case 'game':
          return 'GameContent'; // Return the GameContent component for the "Игра" tab
        case 'skills':
          return 'Skills'; // Return the Skills component for the "Навыки" tab
        case 'shop':
          return 'Shop'; // Return the Shop component for the "Магазин" tab
        default:
          return 'GameContent'; // Fallback to "Игра" if no tab is selected
      }
    },
  },
};
</script>
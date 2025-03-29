<template>
    <div class="tab-content">
      <h3>Ваша Экипировка</h3>
      <p>Инвентарь.</p>
      <div class="equipment">
        <div class="head">
          <p>Голова</p>
          <select>
            <option value="1h">1ур шлем</option>
            <option value="2h">2ур шлем</option>
            <option value="3h">3ур шлем</option>
            <option value="4h">4ур шлем</option>
            <option value="5h">5ур шлем</option>
          </select>
        </div>
        <div class="body">
          <p>Тело</p>
          <select>
            <option value="1b">1ур Бронижилет</option>
            <option value="2b">2ур Бронижилет</option>
            <option value="3b">3ур Бронижилет</option>
            <option value="4b">4ур Бронижилет</option>
            <option value="5b">5ур Бронижилет</option>
          </select>
        </div>
        <div class="foot">
          <p>Ноги</p>
          <select>
            <option value="1f">1ур Штаны</option>
            <option value="2f">2ур Штаны</option>
            <option value="3f">3ур Штаны</option>
            <option value="4f">4ур Штаны</option>
            <option value="5f">5ур Штаны</option>
          </select>
        </div>
        <div class="armR">
          <p>Пр.Рука</p>
          <select>
            <option value="1ar">1ур Меч</option>
            <option value="2ar">2ур Меч</option>
            <option value="3ar">3ур Меч</option>
            <option value="4ar">4ур Меч</option>
            <option value="5ar">5ур Меч</option>
          </select>
        </div>
        <div class="armL">
          <p>Лв.Рука</p>
          <select>
            <option value="1al">1ур Меч</option>
            <option value="2al">2ур Меч</option>
            <option value="3al">3ур Меч</option>
            <option value="4al">4ур Меч</option>
            <option value="5al">5ур Меч</option>
          </select>
        </div>
        <div class="pois">
          <p>Пояс</p>
          <select>
            <option value="1p">Гранат</option>
            <option value="2p">Зелье</option>
            <option value="3p">Зелье</option>
            <option value="4p">Пистолет</option>
          </select>
        </div>
      </div>
    </div>
</template>

<script setup>
import { state } from '@/store';

//state.equip_V.head = document.getElementBy

</script>

<style scoped>
.tab-content {
  font-family: Arial, sans-serif;
  padding: 20px;
}

.equipment > div {
  display: flex; /* Размещаем элементы в строку */
  align-items: center; /* Выравниваем по центру по вертикали */
  margin-bottom: 10px; /* Добавляем отступ между строками */
}

.equipment p {
  margin: 0 10px 0 0; /* Добавляем отступ справа от текста */
  white-space: nowrap; /* Запрещаем перенос текста */
}

.equipment select {
  flex: 1; /* Растягиваем выпадающий список на оставшееся пространство */
  padding: 5px;
  font-size: 14px;
}
</style>
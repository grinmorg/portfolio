<template>
  <div class="calc calc--1">
    <div class="calc__block">
      <div class="calc-item calc-item--dropdown">
        <label class="calc-item__title">Количество страниц:</label>
        <v-select v-model="selectedCountPage" :options="CountPage"> </v-select>
      </div>
      <div class="calc-item calc-item--checkbox">
        <input type="checkbox" v-model="boolAdaptiv" id="html_coding_2" />
        <label for="html_coding_2" class="calc-item__title"
          >Нужна ли адаптация:
          <em class="toogle"></em>
        </label>
      </div>
    </div>
    <div class="calc__block">
      <div class="calc-item calc-item--dropdown">
        <label class="calc-item__title">Количество блоков на странице:</label>
        <v-select v-model="selectedCountBlocks" :options="CountBlocks">
        </v-select>
      </div>
      <div class="calc-item calc-item--checkbox">
        <input type="checkbox" v-model="boolLightAnimate" id="html_coding_3" />
        <label for="html_coding_3" class="calc-item__title"
          >Легкая анимация:
          <em class="toogle"></em>
        </label>
      </div>
    </div>
    <div class="calc__block">
      <div class="calc-item calc-item--checkbox">
        <input type="checkbox" v-model="boolScripts" id="html_coding_4" />
        <label for="html_coding_4" class="calc-item__title"
          >Сложные JS-скрипты:
          <em class="toogle"></em>
        </label>
      </div>
      <div class="calc-item calc-item--checkbox">
        <input type="checkbox" v-model="boolHardAnimate" id="html_coding_5" />
        <label for="html_coding_5" class="calc-item__title">
          <span>Тяжелая анимация:</span>
          <em class="toogle"></em>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    CountPage: ["Лендинг", "1 - 3", "3 - 6", "6 - 10", "10 - 15", "более 15"],
    selectedCountPage: "",
    CountBlocks: ["1 - 5", "5 - 10", "10 - 15", "более 15"],
    selectedCountBlocks: "",
    boolAdaptiv: true,
    boolLightAnimate: false,
    boolScripts: false,
    boolHardAnimate: false,
    endprice: 0,
  }),
  methods: {
    ...mapActions({
      changeEndPrice: "SAVE_CALC_END_PRICE",
    }),
    totalPrice() {
      const priceBlock = 450; // цена за блок
      let pageMultiplier = 1; // множетель за страницы

      // страницы
      if (this.selectedCountPage == "Лендинг") {
        this.endprice = 2500;
      } else if (this.selectedCountPage == "1 - 3") {
        this.endprice = 2000;
        pageMultiplier = 1.5;
      } else if (this.selectedCountPage == "3 - 6") {
        this.endprice = 4000;
        pageMultiplier = 2;
      } else if (this.selectedCountPage == "6 - 10") {
        this.endprice = 8000;
        pageMultiplier = 3;
      } else if (this.selectedCountPage == "10 - 15") {
        this.endprice = 13000;
        pageMultiplier = 4;
      } else if (this.selectedCountPage == "более 15") {
        this.endprice = 18000;
        pageMultiplier = 5;
      }

      if (this.CountBlocks == "1 - 5") {
        this.endprice += priceBlock * 3 * pageMultiplier;
      } else if (this.selectedCountPage == "5 - 10") {
        this.endprice += priceBlock * 7 * pageMultiplier;
      } else if (this.selectedCountPage == "10 - 15") {
        this.endprice += priceBlock * 12 * pageMultiplier;
      } else if (this.selectedCountPage == "более 15") {
        this.endprice += priceBlock * 18 * pageMultiplier;
      }

      // легкая анимация
      if (this.boolLightAnimate) {
        this.endprice += 2000;
      }
      // скрипты
      if (this.boolScripts) {
        this.endprice += 1500;
      }
      // сложная анимация
      if (this.boolHardAnimate) {
        this.endprice += 4500;
      }

      // адаптация
      if (this.boolAdaptiv) {
        this.endprice += this.endprice / 2;
      }
      // console.log(this.selectedCountPage == 'Лендинг')
      this.changeEndPrice(this.endprice);
    },
  },
  watch: {
    selectedCountPage() {
      this.totalPrice();
    },
    selectedCountBlocks() {
      this.totalPrice();
    },
    boolAdaptiv() {
      this.totalPrice();
    },
    boolLightAnimate() {
      this.totalPrice();
    },
    boolScripts() {
      this.totalPrice();
    },
    boolHardAnimate() {
      this.totalPrice();
    },
  },
};
</script>

<style></style>

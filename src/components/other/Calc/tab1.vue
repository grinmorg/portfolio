<template>
  <div class="calc calc--1">
    <div class="calc__block">
      <div class="calc-item calc-item--dropdown">
        <Popper
          :is-open="boolPopperCountPage"
          :anchor-el="$refs.popperCountPage"
          placement="top"
        >
          <div id="popper-content">Укажите количество страниц для вёрстки</div>
        </Popper>
        <label
          ref="popperCountPage"
          @mouseover="showPopper('boolPopperCountPage')"
          @mouseleave="hidePopper('boolPopperCountPage')"
          class="calc-item__title"
          >Количество страниц:</label
        >
        <v-select v-model="selectedCountPage" :options="CountPage"> </v-select>
      </div>
      <div class="calc-item calc-item--checkbox">
        <Popper
          :is-open="boolPopperAdaptiv"
          :anchor-el="$refs.popperAdaptiv"
          placement="top"
        >
          <div id="popper-content">
            Адаптация нужна для нормального отображения вашего сайта на всех
            устройствах, от телефона до ПК
          </div>
        </Popper>
        <input type="checkbox" v-model="boolAdaptiv" id="html_coding_2" />
        <label
          ref="popperAdaptiv"
          @mouseover="showPopper('boolPopperAdaptiv')"
          @mouseleave="hidePopper('boolPopperAdaptiv')"
          for="html_coding_2"
          class="calc-item__title"
          >Нужна ли адаптация:
          <em class="toogle"></em>
        </label>
      </div>
    </div>
    <div class="calc__block">
      <div class="calc-item calc-item--dropdown">
        <Popper
          :is-open="boolPopperCountBlocks"
          :anchor-el="$refs.popperCountBlocks"
          placement="top"
        >
          <div id="popper-content">
            Если количество блоков на страницах разное - укажите среднее
            значение
          </div>
        </Popper>
        <label
          ref="popperCountBlocks"
          @mouseover="showPopper('boolPopperCountBlocks')"
          @mouseleave="hidePopper('boolPopperCountBlocks')"
          class="calc-item__title"
          >Количество блоков на странице:</label
        >
        <v-select v-model="selectedCountBlocks" :options="CountBlocks">
        </v-select>
      </div>
      <div class="calc-item calc-item--checkbox">
        <Popper
          :is-open="boolPopperLightAnimate"
          :anchor-el="$refs.popperLightAnimate"
          placement="top"
        >
          <div id="popper-content">
            Такая анимация сделает ваш сайт более приятным для пользователя.
            Блоки будут плавно появлятся при скролее. Динамические элементы так
            же будут анимированы при взаимодейсвии с пользователем
          </div>
        </Popper>
        <input type="checkbox" v-model="boolLightAnimate" id="html_coding_3" />
        <label
          ref="popperLightAnimate"
          @mouseover="showPopper('boolPopperLightAnimate')"
          @mouseleave="hidePopper('boolPopperLightAnimate')"
          for="html_coding_3"
          class="calc-item__title"
          >Легкая анимация (CSS/JS):
          <em class="toogle"></em>
        </label>
      </div>
    </div>
    <div class="calc__block">
      <div class="calc-item calc-item--checkbox">
        <Popper
          :is-open="boolPopperScripts"
          :anchor-el="$refs.popperScripts"
          placement="top"
        >
          <div id="popper-content">
            Простые скрипты типо бургер-меню, слайдеров и тп. уже входят в
            стоимость работ. Под "Сложными JS-скриптами" подразумеваются скрипты
            реализующие более сложный функционал, например квизы, калькуляторы,
            мини-игры и тп.
          </div>
        </Popper>
        <input type="checkbox" v-model="boolScripts" id="html_coding_4" />
        <label
          ref="popperScripts"
          @mouseover="showPopper('boolPopperScripts')"
          @mouseleave="hidePopper('boolPopperScripts')"
          for="html_coding_4"
          class="calc-item__title"
          >Сложные JS-скрипты:
          <em class="toogle"></em>
        </label>
      </div>
      <div class="calc-item calc-item--checkbox">
        <Popper
          :is-open="boolPopperHardAnimate"
          :anchor-el="$refs.popperHardAnimate"
          placement="top"
        >
          <div id="popper-content">
            Пример такой анимации - задний фон на этом сайте, который
            представляет из себя анимированные 3d объекты.
            <span class="green-text">Внимание!</span> Если вы выбираете данный
            пункт, то опция "Сложные JS-скрипты" должна быть так же выбрана
          </div>
        </Popper>
        <input type="checkbox" v-model="boolHardAnimate" id="html_coding_5" />
        <label
          ref="popperHardAnimate"
          @mouseover="showPopper('boolPopperHardAnimate')"
          @mouseleave="hidePopper('boolPopperHardAnimate')"
          for="html_coding_5"
          class="calc-item__title"
        >
          Тяжелая JS-анимация:
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
    selectedCountPage: "Выбирайте нужный пункт в выпадающем списке",
    CountBlocks: ["1 - 5", "5 - 10", "10 - 15", "более 15"],
    selectedCountBlocks: "Выбирайте нужный пункт в выпадающем списке",
    boolAdaptiv: true,
    boolLightAnimate: false,
    boolScripts: false,
    boolHardAnimate: false,
    endprice: 0,

    // Poppers
    boolPopperAdaptiv: false,
    boolPopperCountPage: false,
    boolPopperCountBlocks: false,
    boolPopperLightAnimate: false,
    boolPopperScripts: false,
    boolPopperHardAnimate: false,
  }),
  methods: {
    ...mapActions({
      changeEndPrice: "SAVE_CALC_END_PRICE",
    }),
    totalPrice() {
      const priceBlock = 450; // цена за блок
      let pageMultiplier = 1; // множетель за страницы

      // сбрасываю цену
      this.endprice = 0;

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

      // Блоки
      if (this.selectedCountBlocks == "1 - 5") {
        this.endprice += priceBlock * 3 * pageMultiplier;
      } else if (this.selectedCountBlocks == "5 - 10") {
        this.endprice += priceBlock * 7 * pageMultiplier;
      } else if (this.selectedCountBlocks == "10 - 15") {
        this.endprice += priceBlock * 12 * pageMultiplier;
      } else if (this.selectedCountBlocks == "более 15") {
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

      // Отдаю цену
      if (this.$i18n.locale === "ru") {
        this.changeEndPrice(this.endprice);
      } else {
        this.changeEndPrice(Math.round(this.endprice / 70));
      }
    },
    showPopper(name) {
      this[name] = !this[name];
    },
    hidePopper(name) {
      this[name] = false;
    },
  },
  watch: {
    selectedCountPage() {
      this.totalPrice();
    },
    selectedCountBlocks() {
      this.totalPrice();
    },
    boolAdaptiv(val) {
      if (!val) {
        this.$toast.warning(
          "Вы потеряете большое кол-во трафика. Так как большинство пользователей будут использовать телефоны для просмотра вашего сайта!",
          {
            position: "top-right",
            timeout: 10000,
            closeOnClick: true,
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            draggable: true,
            draggablePercent: 0.6,
            showCloseButtonOnHover: false,
            closeButton: "button",
            icon: true,
            rtl: false,
          }
        );
      }
      this.totalPrice();
    },
    boolLightAnimate() {
      this.totalPrice();
    },
    boolScripts(val) {
      if (this.boolHardAnimate) {
        if (!val) {
          this.$toast.warning(
            'Данная опция является обязатеьной, так как выбрана опция "Тяжелая анимация" ',
            {
              position: "top-right",
              timeout: 3000,
              closeOnClick: true,
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              draggable: true,
              draggablePercent: 0.6,
              showCloseButtonOnHover: false,
              closeButton: "button",
              icon: true,
              rtl: false,
            }
          );
          setTimeout(() => {
            this.boolScripts = true;
          }, 500);
        }
      }
      this.totalPrice();
    },
    boolHardAnimate(val) {
      if (val && !this.boolScripts) {
        this.boolScripts = true;
      }
      this.totalPrice();
    },
    "$i18n.locale"() {
      // при смене языка пересчитает по новой
      this.totalPrice();
    },
  },
};
</script>

<style></style>

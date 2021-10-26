<template>
  <div class="calcs gray-block">
    <div class="tabs">
      <div
        class="tabs__item"
        :class="{ active: activeTab === 'HTMLcode' }"
        @click="changeTab('HTMLcode')"
      >
        Вёрстка
      </div>
      <div
        class="tabs__item"
        :class="{ active: activeTab === 'fullSite' }"
        @click="changeTab('fullSite')"
      >
        Сайт "ключ"
      </div>
    </div>
    <transition name="fade">
      <TabHtmlCode v-if="activeTab === 'HTMLcode'" />
    </transition>
    <transition name="fade">
      <TabFullSite v-if="activeTab === 'fullSite'" />
    </transition>
    <p class="calcs__endprice">
      Примерная стоимость: от <span> <em>{{ CALC_END_PRICE }}</em> руб.</span>
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    activeTab: "HTMLcode",
  }),
  methods: {
    changeTab(name) {
      this.activeTab = name;
    },
  },
  components: {
    TabHtmlCode: () => import("@/components/other/Calc/tab1"),
    TabFullSite: () => import("@/components/other/Calc/tab2"),
  },
  computed: {
    ...mapGetters(["CALC_END_PRICE"]),
  },
};
</script>

<style>
.calcs.gray-block {
  background: linear-gradient(180deg, #394253 0%, #181c27 147.23%);
  max-width: 1050px;
  margin: 0 auto;
}
.calcs__endprice {
  text-align: center;
  font-size: 2rem;
}
.calcs__endprice span em{
  color: var(--green);
  font-weight: 700;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
@media screen and (max-width: 1050px) {
  .calcs.gray-block {
    margin: 0 10px;
  }
}
</style>

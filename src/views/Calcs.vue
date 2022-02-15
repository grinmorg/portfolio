<template>
  <div class="calcs gray-block">
    <div class="tabs">
      <div
        class="tabs__item"
        :class="{ active: activeTab === 'HTMLcode' }"
        @click="changeTab('HTMLcode')"
      >
        {{ $t("base.htmlCoding") }}
      </div>
      <div
        class="tabs__item"
        :class="{ active: activeTab === 'fullSite' }"
        @click="changeTab('fullSite')"
      >
        {{ $t("base.fullSite") }}
      </div>
    </div>
    <transition name="fade">
      <TabHtmlCode v-show="activeTab === 'HTMLcode'" />
    </transition>
    <transition name="fade">
      <TabFullSite v-show="activeTab === 'fullSite'" />
    </transition>
    <p class="calcs__endprice">
      {{ $t("calc.price.text") }}
      <span>
        <em>{{ CALC_END_PRICE }}</em> {{ $t("calc.price.currency") }}</span
      >
    </p>
    <p class="calcs__desc">
      ({{ $t("calc.desc") }} -
      <button @click="$emit('openPopupCallback')">
        {{ $t("base.ContactWithMe") }}</button
      >)
    </p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({
    activeTab: "HTMLcode",
  }),
  methods: {
    ...mapActions({
      changeEndPrice: "SAVE_CALC_END_PRICE",
    }),
    changeTab(name) {
      // Сбрасываю цену при переключении таба
      if(this.activeTab !== name) {
        this.changeEndPrice(0);
      }

      // Переключаю таб
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
  margin: 150px auto;
}
.calcs__endprice {
  text-align: center;
  font-size: 2rem;
}
.calcs__endprice span em {
  color: var(--green);
  font-weight: 700;
}
.calcs__desc {
  text-align: center;
  font-size: 1.2rem;
}
.calcs__desc button {
  text-transform: lowercase;
}

@media screen and (max-width: 1050px) {
  .calcs.gray-block {
    margin: 100px 10px;
  }
}
</style>

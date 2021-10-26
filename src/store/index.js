import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    calcEndPrice: 500,
  },
  getters: {
    CALC_END_PRICE: (state) => {
      return state.calcEndPrice;
    },
  },
  mutations: {
    SET_CALC_END_PRICE: (state, payload) => {
      state.calcEndPrice = payload;
    },
  },
  actions: {
    SAVE_CALC_END_PRICE: (context, payload) => {
      context.commit("SET_CALC_END_PRICE", payload);
    },
  },
  modules: {},
});

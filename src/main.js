import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

import {i18n} from './plugins/i18n'
import FlagIcon from 'vue-flag-icon'

import VueSilentbox from "vue-silentbox";
import VueTilt from "vue-tilt.js";

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
const options = {
  transition: "Vue-Toastification__bounce",
  maxToasts: 10,
  newestOnTop: true,
};

// Дефолтный тайтл
const DEFAULT_TITLE = "Personal Portfolio | GM";
router.afterEach((to) => {
  // Use next tick to handle router history correctly
  // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
  Vue.nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE;
  });
});

Vue.use(Toast, options);
Vue.use(VueSilentbox);
Vue.use(VueTilt);
Vue.use(FlagIcon);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  i18n,
  render: (h) => h(App),
}).$mount("#app");

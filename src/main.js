import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

import VueSilentbox from 'vue-silentbox'
import VueTilt from 'vue-tilt.js'

import Toast from "vue-toastification"
import "vue-toastification/dist/index.css"
const options = {
  transition: "Vue-Toastification__bounce",
  maxToasts: 10,
  newestOnTop: true
};


Vue.use(Toast, options)
Vue.use(VueSilentbox)
Vue.use(VueTilt)

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");

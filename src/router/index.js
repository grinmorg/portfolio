import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/cases",
    name: "Cases",
    component: () => import("@/views/Cases.vue"),
    meta: { title: "Cases | GM" },
  },
  {
    path: "/calcs",
    name: "Calcs",
    component: () => import("@/views/Calcs.vue"),
    meta: { title: "Calculate price | GM" },
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: () => import("@/views/Contacts.vue"),
    meta: { title: "Contacts | GM" },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

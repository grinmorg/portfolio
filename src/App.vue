<template>
  <div id="app">
    <Preloader />
    <Header />
    <ThreeBg />
    <!-- <Sidebar
      :showSideBar="showSideBar"
      @openPopupCallback="openPopupCallback"
    /> -->
    <!-- <div
      class="show-sidebar"
      :class="{
        active: !showSideBar,
      }"
      @click="showSideBar = !showSideBar"
      title="Показать сайдбар"
    ></div> -->
    <main class="main">
      <router-view @openPopupCallback="openPopupCallback" />
    </main>
    <callback-popup :open="isOpenCallbackPopup" @close="closePopupCallback" />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    Preloader: () => import("@/components/layouts/Preloader"),
    Header: () => import("@/components/layouts/Header"),
    // Sidebar: () => import("@/components/layouts/Sidebar"),
    CallbackPopup: () => import("@/components/popups/CallbackPopup"),
    ThreeBg: () => import("@/components/layouts/ThreeBg"),

  },
  data: () => ({
    showSideBar: false,
    isOpenCallbackPopup: false,
  }),

  methods: {
    openPopupCallback() {
      this.isOpenCallbackPopup = true;
    },
    closePopupCallback() {
      this.isOpenCallbackPopup = false;
    },
  },
  created() {
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".sidebar") && !e.target.closest(".show-sidebar")) {
        this.showSideBar = false;
      }
    });
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/vendor/reset.scss";
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/styles.scss";
</style>

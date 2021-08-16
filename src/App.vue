<template>
  <div id="app">
    <Preloader />
    <Header />
    <Sidebar
      :showSideBar="showSideBar"
      @openPopupCallback="openPopupCallback"
    />
    <div
      class="show-sidebar"
      :class="{
        active: !showSideBar,
      }"
      @click="showSideBar = !showSideBar"
      title="Показать сайдбар"
    ></div>
    <main class="main">
      <router-view />
    </main>
    <three-bg />

    <callback-popup :open="isOpenCallbackPopup" @close="closePopupCallback"/>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    Preloader: () => import("@/components/layouts/Preloader"),
    Header: () => import("@/components/layouts/Header"),
    Sidebar: () => import("@/components/layouts/Sidebar"),
    ThreeBg: () => import("@/components/layouts/ThreeBg"),
    CallbackPopup: () => import("@/components/popups/CallbackPopup"),
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
@import "@/assets/scss/vendor/reset";
@import "@/assets/scss/variables";
@import "@/assets/scss/styles";

html {
  font-size: 62.5%;
}

body {
  background: var(--bg-body);
  color: var(--white);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  line-height: 1.5;
}

.main {
  padding-top: 10rem;
  padding-left: 300px;
}

.show-sidebar {
  display: none;
}

@include tablets {
  .main {
    padding-left: 0;
  }
  .show-sidebar {
    display: block;
    width: 3.5rem;
    height: 3.5rem;
    position: absolute;
    top: 5.5rem;
    left: 3rem;
    border-bottom: 5px solid var(--green-text);
    border-left: 5px solid var(--green-text);
    transform: rotate(45deg);
    cursor: pointer;
    z-index: 1001;

    transition: 0.3s;
  }

  .show-sidebar.active {
    transform: rotate(-135deg);
  }
}
</style>

<template>
  <div id="app">
    <Preloader />
    <Header />
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
  background: var(--bg-sidebar-header);
  color: var(--white);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  line-height: 1.5;
}

.show-sidebar {
  display: none;
}

#text-glitch.vue-glitch {
  &:before, 
  &:after {
    background: transparent!important;
    color: var(--white)!important;
    color: var(--white)!important;
  }

  color: var(--white)!important;
}

@include tablets {
  .main {
    padding-left: 0;
  }
  .show-sidebar {
    display: block;
    width: 5rem;
    height: 5rem;
    position: fixed;
    top: 5.5rem;
    left: 3rem;
    background: var(--white);
    border-radius: 50%;
    cursor: pointer;
    z-index: 1001;


    &::before {
      content: "";
      position: absolute;
      top: calc(50% - 1rem);
      left: calc(50% - 0.5rem);
      width: 2rem;
      height: 2rem;
      border-bottom: 5px solid var(--green-text);
      border-left: 5px solid var(--green-text);
      transform: rotate(45deg);
      transition: 0.3s;
    }
  }

  .show-sidebar.active {
    &::before {
      transform: rotate(-135deg);
      left: calc(50% - 1.2rem);
    }
  }
}
</style>

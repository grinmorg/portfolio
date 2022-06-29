<template>
  <div id="app" :style="{ overflow: isLoading ? 'hidden' : 'auto' }">
    <Transition>
      <Preloader v-if="isLoading" />
    </Transition>
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

    <ThreeBg />

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
    isLoading: true,
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

  mounted() {
    // TODO: Убрать setTimeout, когда буду получать данные из firebase store
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/vendor/reset.scss";
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/styles.scss";

.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

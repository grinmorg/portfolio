<template>
  <transition name="fade-top">
    <div class="popup" v-if="isOpen" @click.self="close">
      <div class="popup__box">
        <slot :close="close"> </slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  currentPopupController: null,
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    open() {
      let resolve;
      let reject;

      const popupPromise = new Promise((ok, fail) => {
        resolve = ok;
        reject = fail;
      });

      this.$options.currentPopupController = { resolve, reject };
      this.isOpen = true;

      return popupPromise;
    },
    close() {
      this.$options.currentPopupController.resolve(false);
      this.isOpen = false;
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixins";

.popup {
  cursor: pointer;
  width: 100%;
  min-height: 100%;
  background-color: rgba(53, 53, 53, 0.8);
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-popup);
  display: flex;
  align-items: center;
  justify-content: center;

  &__box {
    cursor: default;
    width: 80%;
    max-width: 500px;
    height: auto;
    padding: 3rem 1.5rem;
    background: var(--neu-bg-gd);
    backdrop-filter: blur(2px);
    border-top: 2px solid var(--green);
    border-bottom: 2px solid var(--green);
    border-radius: 5px;
    box-shadow: 0px 0px 10px var(--bg-header);
    color: var(--white--light);
  }

  &__title {
    border-bottom: 2px solid var(--green);
    padding: 15px 0 30px;
    font-size: 3rem;
    text-align: center;
  }

  &__text {
    padding: 10px 0;
    margin-top: 10px;
    font-size: 2rem;
    text-align: center;
  }

  @include phones {
    .text {
      font-size: 1.4rem;

      &--big {
        font-size: 2rem;
      }
    }
  }
}
</style>

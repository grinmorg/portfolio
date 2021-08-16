<template>
  <div class="popup" v-if="isOpen" @click.self="close">
    <div class="popup__box">
      <slot :close="close"> </slot>
    </div>
  </div>
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
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-popup);

  &__box {
    cursor: default;
    margin: 150px auto 0px auto;
    width: 80%;
    max-width: 500px;
    height: auto;
    padding: 1.5rem;
    background-color: var(--white--light);
    backdrop-filter: blur(2px);
    border-top: 2px solid var(--green);
    border-bottom: 2px solid var(--green);
    border-radius: 5px;
    box-shadow: 0px 0px 10px var(--bg-header);
    color: var(--bg-header);
  }

  &__title {
    border-bottom: 2px solid var(--green);
    padding-bottom: 15px;
    font-size: 3rem;
    text-align: center;
  }

  &__text {
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

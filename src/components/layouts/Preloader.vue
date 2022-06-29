<template>
  <div class="preloader">
    <VueTextGlitch text="< G />"></VueTextGlitch>
  </div>
</template>

<script>
import VueTextGlitch from "vue-text-glitch";

export default {
  components: {
    VueTextGlitch
  }
};
</script>

<style lang="scss">
.preloader {
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #000;
  z-index: 999999;

  .vue-glitch {
    font-size: 4rem;
    font-weight: 700;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }
}
</style>

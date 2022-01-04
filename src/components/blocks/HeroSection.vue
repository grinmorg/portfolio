<template>
  <section class="hero">
    <ThreeBg />
    <div class="container">
      <div class="hero__box">
        <VueTextGlitch class="hero__text" :text="$t('base.hello.1')">
        </VueTextGlitch>
        <VueTextGlitch class="hero__text" :text="$t('base.hello.2')">
        </VueTextGlitch>
      </div>
    </div>
  </section>
</template>

<script>
import VueTextGlitch from "vue-text-glitch";

export default {
  data: () => ({}),
  components: {
    ThreeBg: () => import("@/components/layouts/ThreeBg"),
    VueTextGlitch,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/mixins";

.hero {
  position: relative;
  width: 100%;

  &__box {
    display: flex;
    flex-direction: column;
    max-width: min(100%, 600px);
    margin: 0 auto;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
  }

  &__text {
    font-size: clamp(24px, 5vw, 60px);
    font-weight: 500;
    text-shadow: 5px 5px var(--links-color);
  }
}
</style>

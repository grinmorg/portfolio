<template>
  <div class="three-bg">

  </div>
</template>

<script>
import { noisyLinesBackground } from 'threejs-toys'

export default {
  name: "ThreeBg",
  data: () => ({

  }),

  mounted() {
    noisyLinesBackground({
      el: document.querySelector('.three-bg'),
      colors: [0x000000, 0xAB6CF6],
      minStroke: 0.5,
      maxStroke: 2,
      timeCoef: 0.0002,
      coordScale: 2,
      displacementScale: 0.02
    })
  },
};
</script>

<style lang="scss">
.three-bg {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  outline: none;
  z-index: -1;
  opacity: 0.3;

  canvas {
    background: transparent;
  }
}
</style>

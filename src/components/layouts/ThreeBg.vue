<template>
  <div class="three-bg">

  </div>
</template>

<script>
import { swarmBackground } from 'threejs-toys'

export default {
  name: "ThreeBg",
  data: () => ({
    bg: undefined,
  }),

  methods: {
    onClick() {
      this.bg.setColors([Math.random() * 0xffffff, Math.random() * 0xffffff])
    }
  },

  mounted() {
    this.bg = swarmBackground({
      el: document.querySelector('.three-bg'),
      eventsEl: null,
      gpgpuSize: 256,
      color: [Math.random() * 0xffffff, Math.random() * 0xffffff],
      geometry: 'default'
    })

    document.body.addEventListener('click', this.onClick)
  },

  destroyed() {
    document.body.removeEventListener('click', this.onClick);
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

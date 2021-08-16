<template>
  <canvas class="three-bg"></canvas>
</template>

<script>
import * as THREE from "three";

export default {
  name: "ThreeBg",
  data: () => ({
    camera: null,
    scene: null,
    renderer: null,
    mesh: null,
    windowHeight: window.innerHeight,
    sizes: {
      width: window.innerWidth,
      height: window.innerHeight,
    },
    clock: null,
    particle: null
  }),
  methods: {
    init() {
      let canvas = document.querySelector(".three-bg");

      /**
       * Camera
       */
      // Base camera
      this.camera = new THREE.PerspectiveCamera(
        75,
        this.sizes.width / this.sizes.height,
        0.1,
        500
      );
      this.camera.position.z = 200;
      

      // Scene
      this.scene = new THREE.Scene();

      /**
       * Lights
       */

      const hemisphereLight = new THREE.HemisphereLight(0xAB6CF6, 0x40b07f, 1)
      this.scene.add(hemisphereLight)

      /**
       * Objects
       */

      // particles marshmellow
      this.particle = new THREE.Object3D();
      this.scene.add(this.particle);

      var geometry = new THREE.SphereGeometry(5, 5, 8, 12);
      var material = new THREE.MeshStandardMaterial();

      for (var i = 0; i < 600; i++) {
        let mesh = new THREE.Mesh(geometry, material);
        mesh.position
          .set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5)
          .normalize();
        mesh.position.multiplyScalar(90 + Math.random() * 700);
        mesh.rotation.set(
          Math.random() * 2,
          Math.random() * 2,
          Math.random() * 2
        );
        this.particle.add(mesh);
      }

      // let geometry = new THREE.BoxGeometry(0.5, 0.25, 0.5);
      // let material = new THREE.MeshNormalMaterial();

      // this.mesh = new THREE.Mesh(geometry, material);
      // this.scene.add(this.mesh);

      // Renderer
      this.renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
      this.renderer.setSize(this.sizes.width, this.sizes.height);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      this.renderer.setClearColor(0x121212);

      // Clock
      this.clock = new THREE.Clock();
    },

    // Animations
    animate() {
      requestAnimationFrame(this.animate);
      // const elapsedTime = this.clock.getElapsedTime();
      // this.mesh.rotation.x += 0.01;
      // this.mesh.rotation.y += 0.02;

      // Анимация для маршмелок
      this.particle.rotation.y +=.001;

      this.renderer.render(this.scene, this.camera);
    },

    onResize() {
      // обновляем данные
      this.sizes = {
        width: window.innerWidth,
        height: window.innerHeight,
      };

      // Update camera
      this.camera.aspect = this.sizes.width / this.sizes.height;
      this.camera.updateProjectionMatrix();

      // Update renderer
      this.renderer.setSize(this.sizes.width, this.sizes.height);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    },
  },
  mounted() {
    this.init();
    this.animate();

    // слушатель на изменение размера окна браузера
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },

  beforeDestroy() {
    //   убираем слушатель на изменение размера окна браузера
    window.removeEventListener("resize", this.onResize);
  },
};
</script>

<style lang="scss">
.three-bg {
  position: fixed;
  top: 0;
  left: 0;
  outline: none;
  z-index: -1;
}
</style>

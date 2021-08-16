<template>
  <div class="skills-status">
    <span :style="{ width: progress }" class="progress"></span>
    <span class="count">{{ progress }}</span>
  </div>
</template>

<script>
export default {
  props: {
    progress: {
      type: [String, Number],
      required: true,
    },
  },
};
</script>

<style lang="scss">
.skills-status {
  margin-top: 5px;
  height: 25px;
  background: var(--bg-light-gray);
  max-width: 300px;
  border-radius: 20px;

  position: relative;
  span.progress {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: var(--gd-l-main);
    border-radius: 20px;
    animation: gd-wave ease 2s infinite reverse;
  }
  span.count {
    font-size: 1.6rem;
    width: 30px;
    position: absolute;
    top: 0;
    left: calc(50% - 15px);
  }
}
</style>

<template>
  <li class="cases__item case" style="grid-row: span 6" ref="case" @mouseover="showDesc = true"
    @mouseleave="showDesc = false">
    <a :href="item.url" target="_blank" class="case__link">
      <div v-if="!item.ready" class="case__dev">
        {{ $t("base.indev") }}
      </div>
      <div v-if="item.img" class="case__img">
        <img :src="item.img" alt="photo" />
      </div>
      <div v-else class="case__preview">
        <span>{{ item.name }}</span>
      </div>
      <p class="case__name" v-if="item.name">{{ item.name }}</p>
      <Popper :is-open="showDesc" :anchor-el="$refs.tags" placement="top">
        <div id="popper-content">
          {{ item.desc }}
        </div>
      </Popper>
      <ul class="tags" ref="tags">
        <li class="tags__item" v-for="(tag, idxTag) in item.tags" :key="idxTag">
          <span v-if="tag === 'Многостраничный сайт'">{{
              $t("base.multipage")
          }}</span>
          <span v-else-if="tag === 'Сайт-каталог'">{{
              $t("base.catalog")
          }}</span>
          <span v-else-if="tag === 'Сайт-сервис'">{{
              $t("base.service")
          }}</span>
          <span v-else>{{ tag }}</span>
        </li>
      </ul>
    </a>
  </li>
</template>

<script>
export default {
  props: ['item'],
  data: () => ({
    showDesc: false,
  })
}
</script>

<style lang="scss" scoped>
#popper-content {
  box-shadow: -1px -3px 6px rgba(0, 0, 0, 0.5), 4px 6px 10px rgba(255, 255, 255, 0.2);
}
</style>
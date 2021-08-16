<template>
  <div class="cases">
    <div class="container">
      <h2 class="title">Портфолио</h2>
      <ul class="cases__list">
        <li
          class="cases__item case"
          style="grid-row: span 6"
          ref="case"
          v-for="(item, idx) in cases"
          :key="idx"
          v-tilt="{
            perspective: 1200,
            scale: 1.05,
          }"
        >
          <a :href="item.url" target="_blank" class="case__link">
            <div class="case__img">
              <img :src="item.img" alt="photo" />
            </div>
            <p class="case__desc">{{ item.name }}</p>
            <ul class="tags">
              <li
                class="tags__item"
                v-for="(tag, idxTag) in item.tags"
                :key="idxTag"
              >
                {{ tag }}
              </li>
            </ul>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import emptyImg from '@/assets/img/sidebarHeader.jpeg'
import workVzamke24 from "@/assets/img/works/vzamke24.png";
import workExpertDoors from "@/assets/img/works/expertDoors.png";
import workInrosFirst from "@/assets/img/works/inrosFirst.png";

export default {
  name: "Cases",
  data: () => ({
    emptyImg,
    cases: [
      {
        img: workVzamke24,
        name: "VZAMKE24",
        tags: ["Многостраничный сайт", "WordPress", "JQuery", "SASS", "Gulp"],
        url: "https://vzamke24.ru/"
      },
      {
        img: workExpertDoors,
        name: "Expert Doors",
        tags: ["Сайт-каталог", "WordPress", "JQuery", "SASS", "Gulp"],
        url: "https://expert-doors.ru/"
      },
      {
        img: workInrosFirst,
        name: "INROS Окна",
        tags: ["Многостраничный сайт", "WordPress", "JQuery", "SASS", "Gulp"],
        url: "https://msk1.inros-gk.ru/"
      },
      {
        img: emptyImg,
        name: "Новый сайт",
        tags: ["Сайт-сервис", "Vue.js", "Laravel", "SASS"],
        url: "https://placeholder.com/"
      },
      
    ],
  }),
};
</script>

<style lang="scss">
@import "@/assets/scss/mixins";

.cases {
  overflow: hidden;
  padding-bottom: 50px;
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-auto-rows: 50px;
    grid-auto-flow: dense;
    gap: 25px;
  }
}

.case {
  max-width: 520px;
  margin: 3rem auto 0;
  background: var(--bg-case--light);
  border-radius: 25px;
  border-top: 1px solid var(--white);
  border-bottom: 1px solid var(--white);
  backdrop-filter: blur(4px);
  background-clip: padding-box;
  &__desc {
    font-size: 2rem;
    padding: 1rem;
    text-transform: uppercase;
    text-align: center;
  }
  &__link {
    color: var(--white);
  }
  &__img {
    overflow: hidden;
    height: 250px;
    width: 100%;
    border-radius: 25px 25px 0px 0px;
    border-bottom: 2px solid var(--green);

    img {
      width: 100%;
      height: 100%;
      transition: 1s;
      border-radius: 25px 25px 0 0;
      object-fit: cover;
    }
  }
}

.tags {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 15px;
  padding: 1rem 1rem 2rem;

  &__item {
    display: flex;
    align-items: center;
    background: var(--white);
    color: var(--bg-case);
    font-size: 1.4rem;
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    border-radius: 5px;

    &::before {
      content: "";
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: var(--bg-case);
      display: block;
      margin-right: 0.5rem;
    }
  }
}

@include tablets {
  .title {
    text-align: center;
  }
}
</style>

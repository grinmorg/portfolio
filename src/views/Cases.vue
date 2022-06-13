<template>
  <div class="cases">
    <div class="container">
      <h2 class="title">Портфолио</h2>
      <ul class="cases__list">
        <li class="cases__item case" style="grid-row: span 6" ref="case" v-for="(item, idx) in cases" :key="idx" v-tilt="{
          perspective: 1200,
          scale: 1.05,
        }">
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
            <p class="case__desc" v-if="item.desc">{{ item.desc }}</p>
            <ul class="tags">
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
      </ul>
    </div>
  </div>
</template>

<script>
import emptyImg from "@/assets/img/sidebarHeader.jpeg";
import workVzamke24 from "@/assets/img/works/vzamke24.png";
import workExpertDoors from "@/assets/img/works/expertDoors.png";
import workInrosFirst from "@/assets/img/works/inrosFirst.png";
import workRemont24 from "@/assets/img/works/remontgeneratorov.png";
import sovfinLand from "@/assets/img/works/sovfin.png";
import RemontP from "@/assets/img/works/remontP.png";
import IT159 from "@/assets/img/works/it159.png";
import DetailingRoom from "@/assets/img/works/DetailingRoom.png";

export default {
  name: "Cases",
  data: () => ({
    emptyImg,
    cases: [
      {
        img: DetailingRoom,
        name: "Detailing Room",
        desc: "Небольшой сайт для автомобильного детейлинга, выполненый в темных тонах. На сайте релизована различная анимацию, например при скролле до блоков и при открытии/закрытии модальных окон",
        tags: [
          "Многостраничный сайт",
          "WordPress",
          "SASS",
          "Gulp",
          "ScrollReveal",
        ],
        url: "https://detailing-rooms.ru/",
        ready: true,
      },
      {
        img: IT159,
        name: "IT 159",
        desc: "Интернет-магазин для провайдера интеренета. Реализован функционал корзины и оформления заказа с онлайн-оплатой",
        tags: [
          "Интернет-магазин",
          "WordPress",
          "WooCommerce",
          "JQuery",
          "SASS",
          "Gulp",
        ],
        url: "https://it.159.ru/",
        ready: true,
      },
      {
        img: workExpertDoors,
        name: "Expert Doors",
        desc: "Большой многостраничный сайт-каталог для производителя дверей. На сайте большое кол-во товара, поэтому реализован удобный фильтр на странице каталога",
        tags: ["Сайт-каталог", "WordPress", "JQuery", "SASS", "Gulp"],
        url: "https://expert-doors.ru/",
        ready: true,
      },
      {
        img: RemontP,
        name: "Moscow Remont",
        desc: "Лендинг для компании предоставляющей услуги по ремонту и отделки квартир в Москве. Для увеления конверсии на сайт было решено внедрить квиз с динамической настройкой вопросов из админ-панели.",
        tags: ["Лендинг", "WordPress", "JQuery", "SASS", "Gulp"],
        url: "https://remont-p.com/",
        ready: true,
      },
      {
        img: sovfinLand,
        name: "СОВФИН.РФ",
        desc: "Лендинг для компании предоставляющей цифровые услуги в сфере IT",
        tags: ["Лендинг", "SASS", "Gulp"],
        url: "https://xn--b1ampbou.xn--p1ai/",
        ready: true,
      },
      {
        img: workVzamke24,
        name: "VZAMKE24",
        desc: "Лендинг с системой мультилендинга для предоставления услуг в разных городах",
        tags: ["Многостраничный сайт", "WordPress", "JQuery", "SASS", "Gulp"],
        url: "https://vzamke24.ru/",
        ready: true,
      },
      {
        img: workInrosFirst,
        name: "INROS Окна",
        desc: "Многостраничник для компании предоставляющей услуги по остеклению",
        tags: ["Многостраничный сайт", "WordPress", "JQuery", "SASS", "Gulp"],
        url: "https://msk1.inros-gk.ru/",
        ready: true,
      },
      {
        img: workRemont24,
        name: "REMONT24",
        desc: "Лендинг с системой мультилендинга для предоставления услуг в разных городах",
        tags: ["Многостраничный сайт", "WordPress", "JQuery", "SASS", "Gulp"],
        url: "https://remontgenerator.ru/",
        ready: true,
      },
    ],
  }),
};
</script>

<style lang="scss">
@import "@/assets/scss/mixins";

.cases {
  margin-top: 150px;
  overflow: hidden;
  padding-bottom: 50px;

  &__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }
}

.case {
  width: 100%;
  margin: 3rem auto 0;
  background: var(--bg-case--light);
  border-radius: 25px;
  border-top: 1px solid var(--white);
  border-bottom: 1px solid var(--white);
  backdrop-filter: blur(4px);
  background-clip: padding-box;
  position: relative;
  overflow: hidden;

  &__name {
    font-size: 2rem;
    padding: 1rem;
    text-transform: uppercase;
    text-align: center;
  }

  &__desc {
    padding-left: 1rem;
    font-size: 1.6rem;
    color: var(--neu-text);
  }

  &__link {
    width: 100%;
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

  &__preview {
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      font-size: 4rem;
      text-transform: uppercase;
    }
  }

  &__dev {
    width: 200px;
    text-align: center;
    position: absolute;
    top: 50px;
    right: -50px;
    transform: rotate(45deg);
    text-transform: uppercase;
    font-size: 1.2rem;
    background: var(--green);
  }
}

@include tablets {
  .cases {
    &__list {
      grid-template-columns: 1fr;
    }
  }

  .title {
    text-align: center;
  }
}

@include phones {
  .case {
    &__img {
      img {
        object-position: left;
      }
    }
  }
}
</style>

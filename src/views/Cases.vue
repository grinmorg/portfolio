<template>
  <div class="cases">
    <div class="container">
      <h2 class="title">Портфолио</h2>
      <ul class="cases__list">
        <CaseItem v-for="(item, idx) in cases" :key="idx" :item="item" />
      </ul>
    </div>
  </div>
</template>

<script>
import CaseItem from '@/components/atoms/CaseItem.vue'

// Imgs
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
  components: {
    CaseItem
  },
  data: () => ({
    emptyImg,
    cases: [
      {
        img: DetailingRoom,
        name: "Detailing Room",
        desc: "Небольшой сайт для автомобильного детейлинга, выполненый в темных тонах. На сайте релизована различная анимация (например при скролле)",
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
        desc: "Интернет-магазин для провайдера. Реализован функционал корзины и оформления заказа с онлайн-оплатой",
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

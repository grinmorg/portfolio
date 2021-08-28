<template>
  <div class="container">
    <div class="gray-block">
      <h1 class="title">{{ $t("home.title") }}</h1>
      <p class="text mt-20">
        {{ $t("home.text") }}<span>{{ $t("home.textSpans.1") }}</span
        >, <span>{{ $t("home.textSpans.2") }}</span
        >,<span> {{ $t("home.textSpans.3") }}</span
        >, <span>{{ $t("home.textSpans.4") }}</span> {{ $t("base.and") }}
        <span>{{ $t("home.textSpans.5") }}</span
        >.
      </p>
      <h2 class="subtitle mt-20 text-align-center">
        {{ $t("home.stackTech.title") }}:
      </h2>
      <div class="skills">
        <div class="skills__left">
          <p class="skills__title">{{ $t("home.stackTech.vars.1") }}</p>
          <ul class="skills__list">
            <li
              class="skills__item"
              v-for="(skill, idx) in skillsStandartTranslate"
              :key="idx"
            >
              <p class="skills__name">{{ skill.name }}</p>
              <ul class="tags">
                <li
                  class="tags__item"
                  v-for="(tag, tagID) in skill.tags"
                  :key="tagID"
                >
                  {{ tag }}
                </li>
              </ul>
            </li>
          </ul>
          <p
            class="skills__desc"
            v-html="$t('home.stackTech.standartDesc')"
          ></p>
        </div>
        <div class="skills__right">
          <p class="skills__title">{{ $t("home.stackTech.vars.2") }}</p>
          <ul class="skills__list">
            <li
              class="skills__item"
              v-for="(skill, idx) in skillsModernTranslate"
              :key="idx"
            >
              <p class="skills__name">{{ skill.name }}</p>
              <ul class="tags">
                <li
                  class="tags__item"
                  v-for="(tag, tagID) in skill.tags"
                  :key="tagID"
                >
                  {{ tag }}
                </li>
              </ul>
            </li>
          </ul>
          <p class="skills__desc" v-html="$t('home.stackTech.modernDesc')"></p>
        </div>
      </div>
      <p class="text mt-20">
        <span>{{ $t("base.htmlCoding") }}:</span><br />
        Верстаю по БЭМ методологии. Владею Flexbox и Grid версткой.
        Автоматизирую свою работу с помощью Gulp
      </p>
      <p class="text mt-20">
        <span>{{ $t("base.tools") }}:</span><br />
        Для быстрой разработки интерфейсов: <span>Bootstrap</span>,
        <span>Material-UI</span>, <span>Vuetify</span> и другие. <br />
        Для создание красивой анимации: <span>Three.js</span>,
        <span>GSAP</span>, <span>WOW.js</span>
      </p>
      <p class="text mt-20">
        <span>CMS:</span><br />
        Уверенно владею такими CMS как <span>WordPress</span> и
        <span>Modx Revo</span>. <br />Сданные проекты "под ключ" с этими CMS вы
        можете посмотреть у меня в
        <router-link to="/cases">портфолио</router-link>
      </p>
      <p class="text mt-20">
        <span>{{ $t("base.others") }}:</span><br />
        Работаю с Git. Придерживаюсь БЭМ методологии в коде. Пишу чистый и
        валидный код.
      </p>
    </div>
    <div class="gray-block mt-20">
      <h2 class="subtitle">Как работаю:</h2>
      <p class="text mt-20">
        Работаю через любой мессенджер, по предоплате в 30%. <br />
        Но вы можете<button @click="$emit('openPopupCallback')">
          написать мне
        </button>
        и предложить свои условия сотруднечества. <br />Из бирж работаю на
        <a href="https://kwork.ru/user/gr1nmorg" target="_blank">Kwork</a> и
        <a href="https://www.weblancer.net/users/GrinMorg/" target="_blank"
          >Weblancer</a
        >
      </p>
    </div>
    <div class="gray-block mt-20">
      <h2 class="subtitle text-align-center">Сертификаты:</h2>
      <p class="text mt-20 text-align-center">
        При изучении необходимых мне инструментов в основоном руководствуюсь
        оффициальной документацией и не приобретаю платные курсы.<br />
        Поэтому сертификатов о прохождении у меня немного 😃<br />
        Тем не менее в начале своего пути я проходил уроки на
        <a href="https://www.freecodecamp.org/grinmorg" target="_blank"
          >FREECODECAMP</a
        >, заложив уверенную базу и получив там несколько сертификатов. <br />
        Могу с уверенностью посоветовать данную площадку каждому, кто начинает
        осваивать веб-технологии.
      </p>
      <div class="serificates">
        <silent-box :gallery="gallery"></silent-box>
      </div>
    </div>
  </div>
</template>

<script>
import imgSertif1 from "@/assets/img/sertificates/sertif_web.png";
import imgSertif2 from "@/assets/img/sertificates/sertif_js.png";

export default {
  name: "Home",
  data: () => ({
    settingsSlider: {
      arrows: true,
      dots: true,
      slidesToShow: 2,
      centerMode: true,
    },
    gallery: [
      {
        src: imgSertif1,
        description: 'Сертификат за прохождение курса "Responsiv Web Design" ',
        alt: 'Сертификат за прохождение курса "Responsiv Web Design" ',
        thumbnailWidth: "100%",
        thumbnailHeight: "380px",
      },
      {
        src: imgSertif2,
        description:
          'Сертификат за прохождение курса "JavaScript Algorithms and Data Structures" ',
        alt: 'Сертификат за прохождение курса "JavaScript Algorithms and Data Structures" ',
        thumbnailWidth: "100%",
        thumbnailHeight: "380px",
      },
    ],
  }),
  components: {},
  computed: {
    skillsStandartTranslate() {
      return [
        {
          id: 1,
          name: this.$t("home.stackTech.list.standart.1.name"),
          tags: {
            1: this.$t("home.stackTech.list.standart.1.tags.1"),
            2: this.$t("home.stackTech.list.standart.1.tags.2"),
          },
        },
        {
          id: 2,
          name: this.$t("home.stackTech.list.standart.2.name"),
          tags: {
            1: this.$t("home.stackTech.list.standart.2.tags.1"),
            2: this.$t("home.stackTech.list.standart.2.tags.2"),
          },
        },
        {
          id: 3,
          name: this.$t("home.stackTech.list.standart.3.name"),
          tags: {
            1: this.$t("home.stackTech.list.standart.3.tags.1"),
          },
        },
        {
          id: 4,
          name: this.$t("home.stackTech.list.standart.4.name"),
          tags: {
            1: this.$t("home.stackTech.list.standart.4.tags.1"),
            2: this.$t("home.stackTech.list.standart.4.tags.2"),
            3: this.$t("home.stackTech.list.standart.4.tags.3"),
            4: this.$t("home.stackTech.list.standart.4.tags.4"),
          },
        },
      ];
    },
    skillsModernTranslate() {
      return [
        {
          id: 1,
          name: this.$t("home.stackTech.list.modern.1.name"),
          tags: {
            1: this.$t("home.stackTech.list.modern.1.tags.1"),
          },
        },
        {
          id: 2,
          name: this.$t("home.stackTech.list.modern.2.name"),
          tags: {
            1: this.$t("home.stackTech.list.modern.2.tags.1"),
            2: this.$t("home.stackTech.list.modern.2.tags.2"),
          },
        },
        {
          id: 3,
          name: this.$t("home.stackTech.list.modern.3.name"),
          tags: {
            1: this.$t("home.stackTech.list.modern.3.tags.1"),
          },
        },
        {
          id: 4,
          name: this.$t("home.stackTech.list.modern.4.name"),
          tags: {
            1: this.$t("home.stackTech.list.modern.4.tags.1"),
            2: this.$t("home.stackTech.list.modern.4.tags.2"),
          },
        },
        {
          id: 5,
          name: this.$t("home.stackTech.list.modern.5.name"),
          tags: {
            1: this.$t("home.stackTech.list.modern.5.tags.1"),
            2: this.$t("home.stackTech.list.modern.5.tags.2"),
            3: this.$t("home.stackTech.list.modern.5.tags.3"),
          },
        },
      ];
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/mixins";

.text {
  a {
    color: var(--links-color);
  }
}

.skills {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  &__left,
  &__right {
    flex: 0 0 50%;
  }

  &__right {
    border-left: 2px solid var(--green);

    .skills__title {
      border-left: 2px solid var(--white);
      margin-left: -2px;
    }
  }
  &__title {
    font-size: 2rem;
    text-transform: uppercase;
    text-align: center;
    padding: 1rem 0;
    background: var(--green);
  }
  &__item {
    display: flex;
    align-items: center;
    flex-direction: column;
    border-top: 2px solid var(--green);
    padding-left: 2rem;
    &:not(:first-child) {
      margin-top: 10px;
    }
  }
  &__name {
    padding: 1rem;
    font-size: 1.8rem;
  }
  &__desc {
    font-size: 1.5rem;
    text-align: center;
    padding: 0 1rem;
  }
  @include phones {
    &__left,
    &__right {
      flex: 0 0 100%;
    }

    &__right {
      margin-top: 50px;
      border-left: none;

      .skills__title {
        border-left: none;
        margin-left: 0;
      }
    }
  }
}

.serificates {
  display: flex;
  justify-content: center;
  #silentbox-gallery {
    margin-top: 30px;
    display: flex;
    gap: 20px;

    #silentbox-overlay__description {
      font-size: 1.8rem;
    }
  }
}

@include laptop {
  .serificates {
    .silentbox-item {
      img {
        height: 200px;
      }
    }
  }
}

@include tablets {
  .serificates {
    #silentbox-gallery {
      // flex-direction: column;
    }
    .silentbox-item {
      img {
        height: 200px;
      }
    }
  }
}

@include phones {
  .serificates {
    #silentbox-gallery {
      flex-direction: column;
    }
  }
}
</style>

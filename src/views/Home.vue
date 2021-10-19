<template>
  <div class="container">
    <div class="gray-block">
      <h1 class="title">{{ $t("home.title") }}</h1>
      <p class="text mt-20">
        <strong v-html="$t('home.text')"></strong>
        <span>{{ $t("home.textSpans.1") }}</span
        >, <span>{{ $t("home.textSpans.2") }}</span
        >,<span> {{ $t("home.textSpans.3") }}</span
        >, <span>{{ $t("home.textSpans.4") }}</span> {{ $t("base.and") }}
        <span>{{ $t("home.textSpans.5") }}</span
        >.
      </p>
      <h2 class="subtitle mt-20">{{ $t("home.skillsTitle") }}:</h2>
      <p class="text mt-20">
        <span>{{ $t("base.htmlCoding") }}:</span><br />
        <strong v-html="$t('home.p.htmlCoding')"></strong>
      </p>
      <p class="text mt-20">
        <span>{{ $t("base.tools") }}:</span><br />
        {{ $t("home.p.tools.1") }}: <span>Bootstrap</span>,
        <span>Material-UI</span>, <span>Vuetify</span>
        {{ $t("home.p.tools.2") }} <br />
        {{ $t("home.p.tools.3") }}: <span>Three.js</span>, <span>GSAP</span>,
        <span>WOW.js</span>
      </p>
      <p class="text mt-20">
        <span>CMS:</span><br />
        {{ $t("home.p.cms.1") }} <span>WordPress</span> и
        <span>Modx Revo</span>. <br />{{ $t("home.p.cms.2") }}
        <router-link to="/cases">{{ $t("header.portfolio") }}</router-link>
      </p>
      <p class="text mt-20">
        <span>{{ $t("base.others") }}:</span><br />
        {{ $t("home.p.others") }}
      </p>
    </div>
    <div class="gray-block mt-20">
      <h2 class="subtitle">{{ $t("home.howIwork.title") }}:</h2>
      <p class="text mt-20">
        {{ $t("home.howIwork.p.1") }} <br />
        {{ $t("home.howIwork.p.2")
        }}<button @click="$emit('openPopupCallback')">
          {{ $t("home.howIwork.span.1") }}
        </button>
        {{ $t("home.howIwork.p.3") }} <br />{{ $t("home.howIwork.p.4") }}
        <a href="https://kwork.ru/user/gr1nmorg" target="_blank">Kwork</a>
        <!--  и
        <a href="https://www.weblancer.net/users/GrinMorg/" target="_blank"
          >Weblancer</a
        > -->
      </p>
    </div>
    <div class="gray-block mt-20">
      <h2 class="subtitle text-align-center">{{ $t("home.certif.title") }}:</h2>
      <p class="text mt-20 text-align-center">
        {{ $t("home.certif.p.1") }}<br />
        {{ $t("home.certif.p.2") }} 😃<br />
        {{ $t("home.certif.p.3") }}
        <a href="https://www.freecodecamp.org/grinmorg" target="_blank"
          >FREECODECAMP</a
        >{{ $t("home.certif.p.4") }}<br />
        {{ $t("home.certif.p.5") }}
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
    markdown: "# Hello World",
  }),
  components: {},
  computed: {
    
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

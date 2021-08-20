<template>
  <div class="container">
    <div class="gray-block">
      <h1 class="title">Давайте знакомиться</h1>
      <p class="text mt-20">
        Меня зовут Григорий. В данный момент работаю на фрилансе.<br />
        Занимаюсь созданием сайтов, как версткой, так и посадкой на CMS. Берусь за
        сайты различной сложности, такие как: <span>Landing page</span>,
        <span>сайты-визитки</span>,<span> корпоративные сайты</span>,
        <span>сайты каталоги</span> и <span>инернет магазины</span>.
      </p>
      <h2 class="subtitle mt-20">Мои навыки:</h2>
      <ul class="skills">
        <li class="skills__item" v-for="(skill, idx) in skills" :key="idx">
          <p class="skills__name">{{ skill.name }}</p>
          <skills-status :progress="skill.status" />
        </li>
      </ul>
      <p class="text mt-20">
        <span>Верстка:</span><br />
        Верстаю по БЭМ методологии. Владею Flexbox и Grid версткой.
        Автоматизирую свою работу с помощью Gulp
      </p>
      <p class="text mt-20">
        <span>Инструменты:</span><br />
        Для быстрой разработки интерфейсов: <span>Bootstrap</span>,
        <span>Material-UI</span>, <span>Vuetify</span> и другие. <br />
        Для создание красивой анимации: <span>Three.js</span>,
        <span>GSAP</span>, <span>WOW.js</span>
      </p>
      <p class="text mt-20">
        <span>CMS:</span><br />
        Уверенно владею такими CMS как <span>WordPress</span> и
        <span>Modx Revo</span>. <br />Законченные проекты с этими CMS вы можете
        посмотреть у меня в <router-link to="/cases">портфолио</router-link>
      </p>
      <p class="text mt-20">
        <span>Остальное:</span><br />
        Работаю с Git. Придерживаюсь БЭМ методологии в коде. Пишу чистый и валидный код.
      </p>
    </div>
    <div class="gray-block mt-20">
      <h2 class="subtitle">Где работаю:</h2>
      <p class="text mt-20">
        Работаю в основном на биржах
        <a href="https://kwork.ru/user/gr1nmorg" target="_blank"
          >Kwork</a> и <a href="https://www.weblancer.net/users/GrinMorg/" target="_blank"
          >Weblancer</a
        >
      </p>
    </div>
    <div class="gray-block mt-20">
      <h2 class="subtitle">Сертификаты:</h2>
      <p class="text mt-20">
        При изучении необходимых мне инструментов в основоном руководствуюсь
        оффициальной документацией и не приобретаю платные курсы.<br />
        Поэтому сертификатов о прохождении у меня немного 😃<br />
        Тем не менее в начале своего пути я проходил уроки на
        <a href="https://www.freecodecamp.org/grinmorg" target="_blank"
          >FREECODECAMP</a
        >, заложив уверенную базу и получив там несколько сертификатов. <br />
        Могу с уверенностью посоветовать данную площадку каждому, кто начинает осваивать веб-технологии.
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
    skills: [
      {
        name: "HTML5, CSS3 (SASS), JavaScript (ES6 и Jquery)",
        status: "85%",
      },
      {
        name: "Vue.js",
        status: "35%",
      },
      {
        name: "Node.js",
        status: "15%",
      },
      {
        name: "Laravel",
        status: "5%",
      }
    ],
  }),
  components: {
    SkillsStatus: () => import("@/components/other/SkillsStatus"),
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
  &__item {
    &:not(:first-child) {
      margin-top: 10px;
    }
  }
  &__name {
    font-size: 1.6rem;
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

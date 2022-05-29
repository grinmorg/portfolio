<template>
  <header class="header" ref="header">
    <div class="header__burger" :class="{ active: activeMobileNav }" @click="addActiveClassMobileNav">
      <span></span>
    </div>
    <router-link to="/" class="logo">
      <VueTextGlitch text="< G />"></VueTextGlitch>
    </router-link>
    <nav class="nav" :class="{ active: activeMobileNav }">
      <ul class="nav__list">
        <li class="nav__item">
          <router-link class="nav__link" to="/" @click.native="closeMobileNav">
            {{ $t("header.aboutMe") }}
          </router-link>
        </li>
        <li class="nav__item">
          <router-link class="nav__link" to="/cases" @click.native="closeMobileNav">
            {{ $t("header.portfolio") }}
          </router-link>
        </li>
        <!-- <li class="nav__item">
          <router-link class="nav__link" to="/calcs" @click.native="closeMobileNav">
            {{ $t("header.calcs") }}
          </router-link>
        </li> -->
        <li class="nav__item">
          <router-link class="nav__link" to="/contacts" @click.native="closeMobileNav">
            {{ $t("header.contacts") }}
          </router-link>
        </li>
        <li class="nav__item">
          <a href="https://grinmorg-blog.web.app/" class="nav__link">{{ $t("base.blog") }}</a>
        </li>
      </ul>
    </nav>
    <div class="lang">
      <button v-if="$i18n.locale === 'ru'" @click="setLocale('en')">
        <flag iso="us"></flag>
      </button>
      <button v-if="$i18n.locale === 'en'" @click="setLocale('ru')">
        <flag iso="ru"></flag>
      </button>
    </div>
  </header>
</template>

<script>
import VueTextGlitch from "vue-text-glitch";

export default {
  name: "Header",
  data: () => ({
    activeMobileNav: false
  }),
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
    },
    handleScroll() {
      if (window.scrollY > 100) {
        this.$refs.header.classList.add("header--active");
      } else {
        this.$refs.header.classList.remove("header--active");
      }
    },
    addActiveClassMobileNav() {
      this.activeMobileNav = !this.activeMobileNav;
    },
    closeMobileNav() {
      this.activeMobileNav = false;
    }
    
  },
  components: {
    VueTextGlitch,
  },
  created() {
    // слушаю скролл
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    // удаляю слушатель скролла
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/mixins";

.header {
  display: flex;
  align-items: center;
  width: 100%;
  background-color: transparent;
  box-shadow: 0 5px 22px rgb(0 0 0 / 25%);
  position: fixed;
  top: 0;
  right: 0;
  z-index: var(--z-header);

  &__burger {
    display: none;
  }

  &--active {
    background: var(--bg-sidebar);
  }

  #text-glitch.vue-glitch {
    font-size: 60px;
  }
}

.nav {
  margin: 0 auto;
  &__list {
    display: flex;
  }
  &__item {
    position: relative;

    &:hover {
      .nav__link {
        background: var(--green);
        color: var(--bg-header);
      }
    }
  }

  &__link {
    display: block;
    padding: 1.35rem;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.2;
    text-transform: uppercase;
    color: var(--white);
    font-family: var(--f_Play);

    transition: 0.2s;
  }
}

.lang {
  margin-right: 50px;
  display: flex;
  align-items: center;
  button {
    width: 50px;
    height: 32px;
    span {
      width: 100% !important;
      height: 100%;
      background-size: cover;
    }
  }
}

.logo {
  text-align: center;
  font-weight: 700;
  font-size: 50px;
  margin-left: 50px;
}

@include tablets {
  .logo {
    display: none;
  }
  .header {
    width: 100%;
  }
}

@include phones {
  .logo {
    margin-left: 0;
    display: block;
    #text-glitch.vue-glitch {
      font-size: 30px;
    }
  }
  .header {
    justify-content: space-between;
    &__burger {
      z-index: 999;
      margin-left: 20px;
      width: 30px;
      height: 24px;
      display: block;

      position: relative;
      &::before,
      &::after,
      span {
        content: "";
        position: absolute;
        height: 4px;
        background-color: var(--white--light);
        width: 100%;
        transition: 0.1s linear;
      }
      &::before {
        top: 0;
      }
      &::after {
        bottom: 0;
      }

      span {
        top: 50%;
        transform: translateY(-50%);
      }

      &.active {
        span {
          display: none;
        }

        &::before {
          top: auto;
          bottom: 50%;
          transform: translateY(-50%) rotate(45deg);
        }
        &::after {
          bottom: 50%;
          transform: translateY(-50%) rotate(-45deg);
        }
      }
    }
  }
  .nav {
    display: none;
    &__link {
      font-size: 1.2rem;
    }

    &.active {
      z-index: 99;
      display: flex;
      align-self: center;
      justify-content: center;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: var(--neu-bg-gd);

      .nav__list {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
  }

  .lang {
    z-index: 999;
    margin-right: 20px;
  }
}
</style>

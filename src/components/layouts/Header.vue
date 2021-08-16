<template>
  <header class="header">
    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__item">
          <router-link class="nav__link" to="/">Обо мне</router-link>
        </li>
        <li class="nav__item">
          <router-link class="nav__link" to="/cases">Портфолио</router-link>
        </li>
        <li class="nav__item">
          <router-link class="nav__link" to="/calcs">Калькуляторы</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  
};
</script>

<style lang="scss">
@import "@/assets/scss/mixins";

.header {
  display: flex;
  width: calc(100% - 300px);
  background-color: var(--bg-header);
  box-shadow: 0 5px 22px rgb(0 0 0 / 25%);
  position: fixed;
  top: 0;
  right: 0;
  z-index: var(--z-header);
}

.nav {
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

    transition: .2s;
  }
}

@include tablets {
  .header {
    width: 100%;
  }
}

@include phones {
  .nav {
    &__link {
      font-size: 1.3rem;
    }
  }
}

</style>

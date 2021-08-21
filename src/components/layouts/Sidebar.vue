<template>
  <aside
    class="sidebar"
    :class="{
      active: showSideBar,
    }"
  >
    <div class="sidebar__header">
      <img :src="imgHeader" alt="header img" />
    </div>

    <div class="sidebar__content">
      <div class="profile">
        <img
          class="profile__avatar"
          :src="imgAvatar"
          alt="avatar img"
          v-tilt="{
            perspective: 1200,
            scale: 1.5,
          }"
        />
        <p class="profile__name">{{ $t('base.fullname') }}</p>
        <p class="profile__prof">{{ $t('base.work') }}</p>
        <p class="profile__text">
          {{ $t('base.whatDo') }}
        </p>
      </div>

      <div class="social">
        <p class="social__title">{{ $t('base.myContacts') }}</p>
        <ul class="social__list">
          <li class="social__item">
            <a
              class="social__link"
              href="https://vk.com/gr1nmorg"
              target="_blank"
            >
              <img :src="imgIconVk" alt="vk icon" />
            </a>
          </li>
          <li class="social__item">
            <a
              class="social__link"
              href="https://t.me/gr1nmorg"
              target="_blank"
            >
              <img :src="imgIconTelegram" alt="telegram icon" />
            </a>
          </li>
        </ul>
      </div>

      <button class="btn" @click="$emit('openPopupCallback')">
        Связаться со мной
      </button>
    </div>
  </aside>
</template>

<script>
import imgHeader from "@/assets/img/sidebarHeader.jpeg";
import imgAvatar from "@/assets/img/avatar.jpg";
import imgIconVk from "@/assets/img/vk.svg";
import imgIconTelegram from "@/assets/img/telegram.svg";

export default {
  name: "Sidebar",
  data: () => ({
    imgHeader,
    imgIconVk,
    imgIconTelegram,
    imgAvatar,
  }),
  props: ["showSideBar"],
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixins";

.sidebar {
  width: 300px;
  height: 100vh;
  background-color: var(--bg-sidebar);
  box-shadow: 5px 0 15px rgb(5 5 5 / 10%);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  z-index: var(--z-sidebar);
  backdrop-filter: blur(4px);

  &__header {
    height: 180px;
    background-color: var(--bg-sidebar-header);
    border-bottom: 2px solid var(--green);

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__content {
    padding: 0 2rem;
    margin-top: -5rem;
  }
}

.profile {
  p {
    color: var(--white);
    text-align: center;
  }
  &__avatar {
    display: block;
    width: 10rem;
    height: 10rem;
    margin: 0 auto 2rem;
    position: relative;
    border: 2px solid var(--green);
    box-shadow: 0 7px 20px rgb(0 0 0 / 25%);
    border-radius: 50%;
  }

  &__name {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  &__prof {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  &__text {
    font-size: 1.4rem;
    margin-bottom: 2rem;
    line-height: 1.8rem;
  }
}
.social {
  &__title {
    text-align: center;
    font-size: 1.6rem;
  }
  &__list {
    margin: 1rem 0;
    display: flex;
    justify-content: center;
  }
  &__item {
    &:not(:first-child) {
      margin-left: 1rem;
    }
  }
  &__link {
    img {
      width: 30px;
      height: 30px;
    }
  }
}

.btn {
  display: block;
  margin: 20px auto 0;
}

@include tablets {
  .sidebar {
    display: none;
    &.active {
      display: block;
    }
  }
}

@include phones {
  .sidebar {
    width: 220px;
  }
}
</style>

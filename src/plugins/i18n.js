import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: "ru",
  fallbackLocale: "en",
  messages: {
    en: {
      base: {
        fullname: "Grigory Morgachev",
        work: "Web-developer",
        whatDo:
          "I am engaged in the development of sites. I work as a freelancer.",
        myContacts: "My contacts:",
        and: "and",
        ContactWithMe: "Contact with me",
      },
      header: {
        aboutMe: "About me",
        portfolio: "Portfolio",
        calcs: "Calculates",
      },
      home: {
        title: "Let's get acquainted",
        text: "My name is Grigory. At the moment I am working as a freelancer. I am engaged in the creation of sites, both layout and landing on the CMS. I take on sites of varying complexity, such as: ",
        textSpans: {
          1: "Landing page",
          2: "business sites",
          3: "corporate sites",
          4: "sites catalogs",
          5: "online stores",
        },
        stackTech: {
          title: "Technology stack",
          vars: {
            1: "Standard",
            2: "Modern"
          }
        },
      },
    },
    ru: {
      base: {
        fullname: "Григорий Моргачев",
        work: "Веб-разработчик",
        whatDo: "Занимаюсь разработкой сайтов. Работаю на фрилансе.",
        myContacts: "Мои контакты:",
        and: "и",
        ContactWithMe: "Связаться со мной",
      },
      header: {
        aboutMe: "Обо мне",
        portfolio: "Портфолио",
        calcs: "Калькуляторы",
      },
      home: {
        title: "Давайте знакомиться",
        text: "Меня зовут Григорий. В данный момент работаю на фрилансе. Занимаюсь созданием сайтов, как версткой, так и посадкой на CMS. Берусь за сайты различной сложности, такие как: ",
        textSpans: {
          1: "Landing page",
          2: "сайты-визитки",
          3: "корпоративные сайты",
          4: "сайты каталоги",
          5: "инернет магазины",
        },
        stackTech: {
          title: "Стек технологий",
          vars: {
            1: "Стандартный",
            2: "Совеременный"
          }
        },
      },
    },
  },
});

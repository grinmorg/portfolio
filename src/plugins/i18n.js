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
        htmlCoding: "HTML-Coding",
        tools: "Tools",
        others: "Others",
        multipage: "multi-page site",
        catalog: "site-catalog",
        service: "site-service",
        indev: "in developing",
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
            2: "Modern",
          },
          list: {
            standart: {
              1: {
                name: "Programming languages",
                tags: {
                  1: "PHP",
                  2: "JavaScript",
                },
              },
              2: {
                name: "CMS",
                tags: {
                  1: "WordPress",
                  2: "MODX Revo",
                },
              },
              3: {
                name: "Database",
                tags: {
                  1: "MySQL",
                },
              },
              4: {
                name: "Interactive elements",
                tags: {
                  1: "Bootstrap",
                  2: "JQuery",
                  3: "GSAP",
                  4: "WOW.js",
                },
              },
            },
            modern: {
              1: {
                name: "Programming languages",
                tags: {
                  1: "JavaScript",
                },
              },
              2: {
                name: "Front-end",
                tags: {
                  1: "Vue.js",
                  2: "Nuxt.js",
                },
              },
              3: {
                name: "CMS",
                tags: {
                  1: "strapi",
                },
              },
              4: {
                name: "Database",
                tags: {
                  1: "MongoDB",
                  2: "PostgreSQL",
                },
              },
              5: {
                name: "Interactive elements",
                tags: {
                  1: "Vuetify",
                  2: "Three.js",
                  3: "GSAP",
                },
              },
            },
          },
          standartDesc: `Quite a common stack on which most sites operate.
          Of the advantages, a large number of ready-made solutions and the speed of development can be noted. And of the minuses - the complexity of the implementation of service sites, and indeed high-load sites.
          Suitable for landing pages, small multi-page sites or online stores with less than 5,000 items.`,
          modernDesc: `On this stack, you can build a site with the most ambitious scaling possible.
          One of the advantages is the speed of loading, since the necessary pages, and indeed parts of the code are loaded as needed, one might even say "on the fly". Also, the ability to implement complex projects without "crutches". Well, of the minuses, this is the speed of development and, accordingly, the budget for such a project will need more.
          If you have a complex project, for example, a large online store or a multi-user service, then this option will be better.`,
        },
        p: {
          htmlCoding:
            "For CTML coding I use BEM methodology. Use Flexbox and Grid. Automating my work with task-manager Gulp",
          tools: {
            1: "For quick interface development",
            2: "and others.",
            3: "To create beautiful animations",
          },
          cms: {
            1: "I confidently use such CMS as",
            2: "Turnkey projects with these CMS you can look at in my",
          },
          others:
            "I work with Git. I adhere to the BEM methodology in the code. I write clean and valid code.",
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
        htmlCoding: "Верстка",
        tools: "Инструменты",
        others: "Другое",
        multipage: "многостраничный сайт",
        catalog: "сайт-каталог",
        service: "сайт-сервис",
        indev: "в разработке",
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
            2: "Совеременный",
          },
          list: {
            standart: {
              1: {
                name: "Языки программирования",
                tags: {
                  1: "PHP",
                  2: "JavaScript",
                },
              },
              2: {
                name: "CMS",
                tags: {
                  1: "WordPress",
                  2: "MODX Revo",
                },
              },
              3: {
                name: "Базы данных",
                tags: {
                  1: "MySQL",
                },
              },
              4: {
                name: "Интерактивные элементы",
                tags: {
                  1: "Bootstrap",
                  2: "JQuery",
                  3: "GSAP",
                  4: "WOW.js",
                },
              },
            },
            modern: {
              1: {
                name: "Языки программирования",
                tags: {
                  1: "JavaScript",
                },
              },
              2: {
                name: "Фронтенд",
                tags: {
                  1: "Vue.js",
                  2: "Nuxt.js",
                },
              },
              3: {
                name: "CMS",
                tags: {
                  1: "strapi",
                },
              },
              4: {
                name: "Базы данных",
                tags: {
                  1: "MongoDB",
                  2: "PostgreSQL",
                },
              },
              5: {
                name: "Интерактивные элементы",
                tags: {
                  1: "Vuetify",
                  2: "Three.js",
                  3: "GSAP",
                },
              },
            },
          },
          standartDesc: `Вполне обычный стек на котором функционирует большинство сайтов.<br>
          Из плюсов можно отметить большое количество готовых решений и скорость разработки. А из минусов - сложность реализации сайтов-сервисов, да и вообще высоконагруженных сайтов.
          Подойдет для лендингов, небольших многостраничных сайтов или интернет-магазов с количеством товара меньше 5 000 шт.`,
          modernDesc: `На данном стеке можно отстроить сайт с возможностью самого амбициозного масштабирования.<br>
          Из плюсов можно выделить скорость загрузки, так как небходимые страницы, да и вообще части кода загружаются по мере необходимости, можно даже сказать "налету". Так же возможность реализации сложных проектов без "костылей". Ну а из минусов, это скорость разработки и соотственно бюджета на такой проект понадобиться больше.
          Если у вас сложный проект, например большой интернет-магазин или многопользовательский сервис, то этот вариант будет лучше.`,
        },
        p: {
          htmlCoding:
            "Верстаю по БЭМ методологии. Владею Flexbox и Grid версткой. Автоматизирую свою работу с помощью таск-менеджера Gulp",
          tools: {
            1: "Для быстрой разработки интерфейсов",
            2: "и другие.",
            3: "Для создание красивой анимации",
          },
          cms: {
            1: "Уверенно владею такими CMS как",
            2: 'Сданные проекты "под ключ" с этими CMS вы можете посмотреть у меня в',
          },
          others:
            "Работаю с Git. Придерживаюсь БЭМ методологии в коде. Пишу чистый и валидный код.",
        },
      },
    },
  },
});

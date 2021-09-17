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
        skillsTitle: "What i use",
        p: {
          htmlCoding:
            "For CTML coding I use BEM methodology. Use Flexbox and Grid.<br> I understand how to write HTML code for Vue/Nuxt. Automating my work with task-manager Gulp",
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
        howIwork: {
          title: "How i work",
          p: {
            1: "I work through any messenger, on a prepaid basis in 30%.",
            2: "But you can",
            3: "and offer your terms of cooperation.",
            4: "From exchanges I work mainly on",
          },
          span: {
            1: "write me",
          },
        },
        certif: {
          title: "Certificates",
          p: {
            1: "When studying the tools I need, I am mainly guided by the official documentation and do not purchase paid courses.",
            2: "Therefore, I have few certificates of completion",
            3: "Nevertheless, at the beginning of my journey, I took lessons on",
            4: ", having laid a confident base and received several certificates there.",
            5: "I can recommend this site to anyone who starts to master web technologies."
          },
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
        title: "Обо мне",
        text: "Меня зовут Григорий. <br> В основном занимаюсь версткой сайтов и созданием небольших сайтов на таких CMS, как WordPress и Modx Revo.<br> Берусь за: ",
        textSpans: {
          1: "Landing page",
          2: "сайты-визитки",
          3: "корпоративные сайты",
          4: "сайты каталоги",
          5: "инернет магазины",
        },
        skillsTitle: "Технологии которые использовал",
        p: {
          htmlCoding:
            "Верстаю по БЭМ методологии. Владею Flexbox и Grid версткой.<br> Понимаю как верстать под фреймворк Vue/Nuxt. Автоматизирую свою работу с помощью таск-менеджера Gulp",
          tools: {
            1: "Для быстрой разработки интерфейсов использую",
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
        howIwork: {
          title: "Как работаю",
          p: {
            1: "Работаю через любой мессенджер, по предоплате в 30%.",
            2: "Но вы можете",
            3: "и предложить свои условия сотруднечества.",
            4: "Из бирж работаю в основном на",
          },
          span: {
            1: "написать мне",
          },
        },
        certif: {
          title: "Сертификаты",
          p: {
            1: "При изучении необходимых мне инструментов в основоном руководствуюсь оффициальной документацией и не приобретаю платные курсы.",
            2: "Поэтому сертификатов о прохождении у меня немного",
            3: "Тем не менее в начале своего пути я проходил уроки на",
            4: ", заложив уверенную базу и получив там несколько сертификатов.",
            5: "Могу посоветовать данную площадку каждому, кто начинает осваивать веб-технологии."
          },
        },
      },
    },
  },
});

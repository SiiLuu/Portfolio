export default {
  nav: {
    logo: "✌",
    links: [
      { text: "Projets", to: "mywork" },
      { text: "Préférences", to: "mypref" },
      { text: "Contact", to: "mycontact" },
    ],
  },
  header: {
    img: process.env.PUBLIC_URL + "/assets/profil.png",
    text: ["Bienvenue !", "Moi c'est Lucas.", "Je suis "],
    typical: ["développeur web. 🖥", 2000, "étudiant à EPITECH.", 2000],
    btnText: "Découvrir",
  },
  work: {
    title: "Mes Projets",
    cards: [
      {
        img: process.env.PUBLIC_URL + "/assets/netflwishh.png",
        projectName: "NETFLWISH",
        desc:
          "Create a Netflix clone with Reactjs (Tailwind, React Hooks, TMDB API, Firebase Hosting).",
        web: true,
        link1: "https://netflwish.web.app",
        link2: "https://github.com/SiiLuu/NetflWish",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/spotiwish.png",
        projectName: "SPOTIWISH",
        desc:
          "Create a Spotify clone with Reactjs (Tailwind, Hooks, Context API, Spotify API, Youtube API, Firebase Hosting).",
        web: true,
        link1: "https://spotiwishh.web.app",
        link2: "https://github.com/SiiLuu/SpotiWish",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/dashboard.png",
        projectName: "MY_DASHBOARD",
        desc:
          "Create a Full-stack dashboard with MERN stack (Tailwind, React Hooks, Nodejs, Express, MongoDb).",
        web: false,
        link1: null,
        link2: "https://github.com/SiiLuu/My_Dashboard",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/epicture.png",
        projectName: "EPICTURE",
        desc:
          "Create a pictures app with Flutter and Imgur API (Flutter, Imgur API).",
        web: false,
        link1: null,
        link2: "https://github.com/SiiLuu/Epicture",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/arcade.png",
        projectName: "ARCADE",
        desc:
          "Reproduce an arcade machine with 3 switchable graphics and 2 video games (PACMAN and NIBBLER).",
        web: false,
        link1: null,
        link2: "https://github.com/SiiLuu/Arcade",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/island.png",
        projectName: "ISLAND_OF_ALIRIS",
        desc:
          "2D video games, inspired by the old fantasy final. Developed in C thanks to the CSFML lib.",
        web: false,
        link1: null,
        link2: "https://github.com/SiiLuu/ISLAND-OF-ALIRIS",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/myresto.png",
        projectName: "MY_RESTO",
        desc:
          "Quick HTML / CSS website for represent a restaurant online using Bulma",
        web: false,
        link1: null,
        link2: "https://github.com/SiiLuu/MyResto",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/bubuche.png",
        projectName: "BUBUCHE",
        desc:
          "Create a Reactjs / Bulma website for present the services of a woodcutter.",
        web: false,
        link1: null,
        link2: "https://github.com/SiiLuu/BuBuche",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/zappy.png",
        projectName: "ZAPPY",
        desc:
          "Create a litle zappy game with C and C++. The project have 3 parts; the graphic, the AI and the core.",
        web: false,
        link1: null,
        link2: "https://github.com/SiiLuu/Zappy",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/fish.png",
        projectName: "THE FISH",
        desc:
          "Sheets for the A2 permit using JAVA. Mobile app for learn the A2 permit sheets",
        web: false,
        link1: null,
        link2: "https://github.com/SiiLuu/THE-FISH",
      },
    ],
  },
  stack: {
    tech: [
      {
        img: process.env.PUBLIC_URL + "/assets/mongo.png",
        alt: "mongodb",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/express.png",
        alt: "express",
      },
      {
        img: process.env.PUBLIC_URL + "/logo512.png",
        alt: "react",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/node.png",
        alt: "node",
      },
    ],
    desc: `Étudiant à EPITECH depuis 3 ans maintenant, j'ai eu l'occasion de toucher à beaucoup
    de technos et langages différents, que se soit orienté web, mobile ou logiciel. Je peux
    bien sur citer le C qui a forgé toutes mes bases en algorithmie, le C++ son grand frère et
    le Python qui a toujours était avec moi pour des projets de maths. Aujourd'hui je
    m'intéresse beaucoup aux nouvelles technologies Web et ces quatres ci-dessus son mes préférées`,
  },
  contact: {
    title: "Contact",
    desc:
      "Retrouvez-moi sur mes réseaux sociaux ou envoyez moi un petit message ici.",
    socials: [
      {
        alt: "github",
        img: process.env.PUBLIC_URL + "/assets/github.png",
        link: "https://github.com/SiiLuu",
      },
      {
        alt: "link",
        img: process.env.PUBLIC_URL + "/assets/link.png",
        link: "https://www.linkedin.com/in/lucas-simao-925b1b185/",
      },
    ],
    img: process.env.PUBLIC_URL + "/assets/footer.png",
  },
};

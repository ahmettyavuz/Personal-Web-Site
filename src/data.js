import redux from "./assets/Skills/reduxLogo.png";
import figma from "./assets/Skills/figmaLogo.png";
import js from "./assets/Skills/jsLogo.png";
import node from "./assets/Skills/nodeLogo.png";
import react from "./assets/Skills/reactLogo.png";
import vs from "./assets/Skills/vsLogo.png";

import laptop from "./assets/Projects/laptop.png";
import right from "./assets/Projects/right.png";
import left from "./assets/Projects/left.png";
import axios from "axios";

export const skillsData = {
  en: {
    title: "Skills",
  },
  tr: {
    title: "Yetenekler",
  },
  skills: [
    {
      name: "javascript",
      img: {
        src: js,
        alt: "javascript",
      },
    },
    {
      name: "react",
      img: {
        src: react,
        alt: "react",
      },
    },
    {
      name: "redux",
      img: {
        src: redux, //"./assets/Skills/Redux",
        alt: "redux",
      },
    },
    {
      name: "node",
      img: {
        src: node,
        alt: "node",
      },
    },
    {
      name: "vs code",
      img: {
        src: vs,
        alt: "vs code",
      },
    },
    {
      name: "figma",
      img: {
        src: figma,
        alt: "figma",
      },
    },
  ],
};

export const profileData = {
  en: {
    information: {
      birthday: { name: "Birth Date", value: "24.03.1996" },
      city: { name: "City", value: "Ankara" },
      education: {
        name: "Education",
        value: "Hacettepe Unv. Biology Licence, 2016",
      },
      preferred: { name: "Preferred Role", value: "Frontend,UI" },
    },
    about: {
      title: "About me",
      content: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniamaut, odit laborum aliquam voluptatum nisi mollitia.",
        " Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quoddeserunt quam temporibus cumque magnam!",
      ],
    },
    titles: ["Profile", "Basic Information"],
  },
  tr: {
    information: {
      birthday: { name: "Doğum Tarihi", value: "24.03.1996" },
      city: { name: "İkamet Şehri", value: "Ankara" },
      education: {
        name: "Eğitim Durumu",
        value: "Hacettepe Ünv. Biyoloji Lisans, 2016",
      },
      preferred: { name: "Tercih Ettiği Rol", value: "Frontend,UI" },
    },
    about: {
      title: "Hakkımda",
      content: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniamaut, odit laborum aliquam voluptatum nisi mollitia.",
        " Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quoddeserunt quam temporibus cumque magnam!",
      ],
    },
    titles: ["Profil", "Temel Bilgiler"],
  },
};
export const projectsData = {
  en: {
    title: "Projects",
    projects: [
      {
        title: "Random Jokes",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
        skills: ["react", "vercel", "axios", "router"],
        images: [
          { src: laptop, alt: "laptop" },
          { src: left, alt: "left" },
        ],
      },
      {
        title: "Are you bored?",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
        skills: ["react", "redux", "axios", "router", "vercel"],
        images: [
          { src: laptop, alt: "laptop" },
          { src: right, alt: "right" },
        ],
      },
    ],
    links: ["View on Github", "Go to app"],
  },
  tr: {
    title: "Projeler",
    projects: [
      {
        title: "Rastgele Şakalar",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
        skills: ["react", "vercel", "axios", "router"],
        images: [
          { src: laptop, alt: "laptop" },
          { src: left, alt: "left" },
        ],
      },
      {
        title: "Sıkıldın mı?",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
        skills: ["react", "redux", "axios", "router", "vercel"],
        images: [
          { src: laptop, alt: "laptop" },
          { src: right, alt: "right" },
        ],
      },
    ],
    links: ["Github'ta görüntüle", "Uygulamaya git"],
  },
};

export const headerData = {
  en: {
    title: "Hi!",
    content: `I’m Almila. I’m a full-stack developer. I can craft solid and
        scalable frontend products. Let’s meet!`,
    text: [
      "Currently",
      "Freelancing",
      "for",
      "UX, UI, & Web Design",
      "Project .",
      "Invite me to join your team",
    ],
    selections: { mode: ["dark mode", "light mode"], language: "türkçe" },
  },

  tr: {
    title: "Merhaba!",
    content: `Ben Almila. Ben tam kapsamlı bir geliştiriciyim. Sağlam işler yapabilirim ve
      ölçeklenebilir ön uç ürünleri. Tanışalim!`,
    text: [
      "Şu anda",
      "UX, UI, & Web Dizayn",
      "Projesinde",
      "Serbest",
      "Çalışıyorum.",
      "Beni ekibinize katılmaya davet edin",
    ],
    selections: {
      mode: ["karanlık mod", "aydınlık mode"],
      language: "english",
    },
  },
};

export const footerData = {
  en: ["Let’s work together on", "your next product.", "Personal Blog"],
  tr: ["Bir sonraki projende", "birlikte çalışalım.", "Kişisel Blog"],
};
/*
const url = "https://6647084651e227f23ab0c91f.mockapi.io/api/TR";

axios
  .post(url, {
    id: "1",
    headerData: { ...headerData.tr },
    projectsData: { ...projectsData.tr },
    profileData: { ...profileData.tr },
    skillsData: { ...skillsData.tr, skills: [...skillsData.skills] },
    footerData: [...footerData.tr],
  })
  .then((res) => console.log(res.data))
  .catch((err) => console.error());

const url2 = "https://6647084651e227f23ab0c91f.mockapi.io/api/EN";

axios
  .post(url2, {
    id: "1",
    headerData: { ...headerData.en },
    projectsData: { ...projectsData.en },
    profileData: { ...profileData.en },
    skillsData: { ...skillsData.en, skills: [...skillsData.skills] },
    footerData: [...footerData.en],
  })
  .then((res) => console.log(res.data))
  .catch((err) => console.error());
*/

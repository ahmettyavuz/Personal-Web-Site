import redux from "./assets/Skills/reduxLogo.png";
import figma from "./assets/Skills/figmaLogo.png";
import js from "./assets/Skills/jsLogo.png";
import node from "./assets/Skills/nodeLogo.png";
import react from "./assets/Skills/reactLogo.png";
import vs from "./assets/Skills/vsLogo.png";

export const skillsData = [
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
];

export const profileData = {
  birthday: {
    en: { name: "Birth Date", value: "24.03.1996" },
    tr: { name: "Doğum Tarihi", value: "24.03.1996" },
  },
  city: {
    en: { name: "City", value: "Ankara" },
    tr: { name: "İkamet Şehri", value: "Ankara" },
  },
  education: {
    en: { name: "Education", value: "Hacettepe Ünv. Biyoloji Lisans, 2016" },
    tr: {
      name: "Eğitim Durumu",
      value: "Hacettepe Ünv. Biyoloji Lisans, 2016",
    },
  },
  preferred: {
    en: { name: "Preferred Role", value: "Frontend,UI" },
    tr: { name: "Tercih Ettiği Rol", value: "Frontend,UI" },
  },
};

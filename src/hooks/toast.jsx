import { Slide, Zoom, toast } from "react-toastify";

export const toastFunc = (type, lang, darkMode) => {
  if (type == "success") {
    return toast.success(
      `${
        lang === "TR"
          ? "Türkçe dil desteğine geçildi."
          : "Switched to English language support."
      }`,
      {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: `${darkMode ? "dark" : "light"}`,
        transition: Zoom,
      }
    );
  } else {
    return toast.error(
      `${
        lang === "TR"
          ? "Türkçe dil desteğine geçilemedi."
          : "Failed to Switched to English language support."
      }`,
      {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: `${darkMode ? "dark" : "light"}`,
        transition: Zoom,
      }
    );
  }
};

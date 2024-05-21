import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import useLocalStorage from "../hooks/useLocalStorage";
import { useContext, useEffect } from "react";
import { Context } from "../context/context";

import { toastFunc } from "../hooks/toast";

const Header = () => {
  const [darkMode, setDarkMode] = useLocalStorage("Theme", false);
  const [lang, setLang] = useLocalStorage("language", "TR");
  const { data, sendRequest, METHODS } = useContext(Context);

  useEffect(() => {
    sendRequest({ url: `${lang}`, method: METHODS.GET });
  }, []);

  useEffect(() => {
    sendRequest({
      url: `${lang}`,
      method: METHODS.GET,
      callbackSuccess: () => toastFunc("success", lang, darkMode),
      callbackError: () => toastFunc("error", lang, darkMode),
    });
    console.log(data);
  }, [lang]);

  const toogle = (e) => {
    const name = e.target.name;
    if (name === "mode") {
      setDarkMode(!darkMode);
    } else if (name === "language") {
      setLang(lang === "TR" ? "EN" : "TR");
    } else {
      setDarkMode(!darkMode);
      e.stopPropagation();
    }
  };

  return (
    <>
      <header
        id="top"
        className="bg-gray flex js-center padding-top-3 padding-bottom-3 position-relative"
        value={`${darkMode ? "dark" : ""}`}
      >
        <div className="polo-gray position-absolute"></div>
        <div className="circle position-absolute"></div>
        <div className="diglet-pink position-absolute"></div>
        <div className="flex column alg-center gap-3 flex-container padding-bottom-3">
          <div className="flex mode alg-center js-center gap-1 padding-top-3 padding-bottom-3 uppercase padding-right-2">
            <button
              data-cy="theme-toggle"
              id="mode"
              className="radio-btn"
              name="mode"
              onClick={toogle}
            >
              <div
                htmlFor="mode"
                className={`radio-inner ${darkMode ? "active" : ""}`}
                onClick={toogle}
              ></div>
            </button>
            <label
              htmlFor="mode"
              className="fw-700 lh-1 tx-gray uppercase point"
            >
              {data[0]?.headerData?.selections?.mode[darkMode ? 1 : 0]}{" "}
            </label>
            <span>|</span>
            <button
              data-cy="language-toggle"
              className="tx-red bg-gray fw-700 lh-1 uppercase point"
              name="language"
              onClick={toogle}
            >
              {data[0]?.headerData?.selections?.language}
            </button>
          </div>

          <div className="flex space-between alg-center js-center gap-3 wrap-reverse padding-right-2 padding-left-2">
            <div
              style={{ flexBasis: "95%" }}
              className="flex column gap-3 position-relative"
            >
              <div className="fs-700 fw-400">
                {data[0]?.headerData?.title}👋
              </div>
              <h1 className="text-pink fs-800 fw-500 lh-4 z-index-2">
                {data[0]?.headerData?.content}
              </h1>
              <div className="flex gap-2 padding-top-1">
                <FontAwesomeIcon className="fa-3x" icon={faLinkedin} />
                <FontAwesomeIcon className="fa-3x" icon={faGithub} />
                <i></i>
              </div>
              <div className="fs-500 fw-400 lh-2">
                <p>
                  {data[0]?.headerData?.text[0]}{" "}
                  <span className="tx-red">{data[0]?.headerData?.text[1]}</span>{" "}
                  {data[0]?.headerData?.text[2]}{" "}
                  <span className="tx-red">{data[0]?.headerData?.text[3]}</span>{" "}
                  {data[0]?.headerData?.text[4]}
                </p>
                <p>
                  {data[0]?.headerData?.text[5]} {"-> "}
                  <a
                    href="mailto:pratamaiosi@gmail.com"
                    className="tx-red underline"
                  >
                    pratamaiosi@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div
              className="padding-top-1 padding-bottom-1"
              style={{ flexBasis: "35%" }}
            >
              <div className="profileimg"></div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

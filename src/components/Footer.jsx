import { footerData } from "../data";
import { useContext } from "react";
import { Context } from "../context/context";

const Footer = () => {
  const { lang } = useContext(Context);

  const direction = (e) => {
    e.prevent.default();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className=" flex js-center bg-white padding-bottom-3 ">
        <div className="flex js-center alg-center gap-4  padding-bottom-3 position-relative flex-container ">
          <div className="flex column  alg-end fs-800 fw-500 lh-4 padding-bottom-3 ">
            <p className="text-blue-big z-index-2">{footerData[lang][0]}</p>
            <p>{footerData[lang][1]}</p>
          </div>

          <div className="flex column fs-600 fw-500 lh-2 padding-bottom-3">
            <a href="/" className="" target="_blank">
              Github
            </a>
            <a href="#top" className="tx-black" onClick={direction}>
              {footerData[lang][2]}
            </a>
            <a href="/" className="" target="_blank">
              {" "}
              Linkedin
            </a>
            <a href="/" className="" target="_blank">
              Email
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

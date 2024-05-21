import { useContext } from "react";
import { Context } from "../context/context";

const Footer = () => {
  const { data } = useContext(Context);

  const direction = (e) => {
    document.documentElement.scrollTop = 0;
    e.prevent.default();
  };

  return (
    <>
      <footer className=" flex js-center bg-white padding-bottom-3 padding-top-4 ">
        <div className="flex js-center alg-center gap-4  padding-bottom-3 position-relative flex-container padding-top-3  ">
          <div className="flex column  alg-end fs-800 fw-500 lh-4 padding-bottom-3 ">
            <p className="text-blue-big z-index-2">{data[0]?.footerData[0]}</p>
            <p>{data[0]?.footerData[1]}</p>
          </div>

          <div className="flex column fs-500 fw-500 lh-2 padding-bottom-3">
            <a
              href="https://github.com/Workintech"
              className=""
              target="_blank"
            >
              Github
            </a>
            <a href="#top" className="tx-black" onClick={direction}>
              {data[0]?.footerData[2]}
            </a>
            <a
              href="https://github.com/Workintech"
              className=""
              target="_blank"
            >
              {" "}
              Linkedin
            </a>
            <a
              href="https://github.com/Workintech"
              className=""
              target="_blank"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

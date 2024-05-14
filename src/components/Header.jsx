import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <>
      <header className="bg-gray flex js-center padding-top-3 padding-bottom-3">
        <div className="flex column alg-center gap-3 flex-basis-80 padding-bottom-3 ">
          <div className="flex mode alg-center gap-1 padding-top-3 padding-bottom-3 uppercase ">
            <div className="radio-btn">
              <div className="radio-inner active"></div>
            </div>
            <div className="fw-700 lh-1 tx-gray">
              Dark mode | <span className="tx-red fw-700 lh-1">Türkçe</span>`ye
              geç{" "}
            </div>
          </div>

          <div className="flex  space-between alg-center gap-3 ">
            <div style={{ flexBasis: "65%" }} className=" flex column gap-3  ">
              <p className="fs-700 fw-400">Hi! 👋</p>
              <p className="fs-800 fw-500 lh-4">
                I’m Almila. I’m a full-stack developer. I can craft solid and
                scalable frontend products. Let’s meet!
              </p>
              <div className="flex gap-2 padding-top-1">
                <FontAwesomeIcon className="fa-3x" icon={faLinkedin} />
                <FontAwesomeIcon className="fa-3x" icon={faGithub} />
                <i></i>
              </div>
              <div className="fs-500 fw-400 lh-2">
                <p>
                  Currently <span className="tx-red">Freelancing</span>{" "}
                  <span className="tx-red">for UX, UI, & Web Design</span>{" "}
                  Project .
                </p>
                <p>
                  Invite me to join your team -{" "}
                  <a href="pratamaiosi@gmail.com" className="tx-red">
                    pratamaiosi@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div
              className="padding-top-1 padding-bottom-1 "
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

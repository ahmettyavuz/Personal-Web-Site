import { useContext } from "react";
import { Context } from "../context/context";
import { projectsData } from "../data";

const Projects = () => {
  const { lang } = useContext(Context);
  return (
    <section className="flex js-center bg-white  padding-top-3">
      <div className="flex column flex-container alg-center  gap-2">
        <h2 className="fs-800 fw-500 lh-3">{projectsData[lang].title}</h2>
        <div className="flex js-center gap-4 wrap ">
          {projectsData[lang].projects.map((item, index) => (
            <div className="flex column flex-profile " key={item.title}>
              <article
                className={`flex column gap-2 padding-top-2 padding-bottom-2 padding-left-1 padding-right-1 flex-basis-100  ${
                  index % 2 == 0 ? "bg-blue" : "bg-green"
                }`}
                style={{
                  paddingBottom: "15rem",
                  position: "relative",
                  borderRadius: "1rem",
                }}
              >
                <h3 className="ff-play fw-700 fs-700 lh-3">{item.title}</h3>
                <p className="fw-400 fs-500 ">{item.content}</p>
                <ul className="flex wrap gap-1">
                  {item.skills.map((skill) => (
                    <li
                      className=" bg-white ff-play fw-700 fs-500 lh-1"
                      key={skill}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
                <div className="flex js-between fw-600 fs-550 lh-2">
                  <a href="https://github.com/Workintech" target="_blank">
                    View on Github
                  </a>
                  <a href="/">Go to app -</a>
                </div>
              </article>
              <picture className="padding-bottom-3">
                <img src={item.images[0].src} alt={item.images[0].alt} />
                <img src={item.images[1].src} alt={item.images[1].alt} />
              </picture>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

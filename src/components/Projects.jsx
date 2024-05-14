import { projectsData } from "../data";

const Projects = () => {
  return (
    <section className="flex js-center bg-white">
      <div className="flex column flex-basis-80 alg-center">
        <h2>Projects</h2>
        <div className="flex">
          {projectsData.en.map((item) => (
            <article className="flex-basis-30" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
              <ul>
                {item.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
              <div>
                <a href="/">View on Github</a>
                <a href="/">Go to app -</a>
              </div>
              <picture>
                <img src={item.images[0].src} alt={item.images[0].alt} />
                <img src={item.images[1].src} alt={item.images[1].alt} />
              </picture>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

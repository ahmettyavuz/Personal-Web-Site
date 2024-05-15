import { skillsData } from "../data";

const Skills = () => {
  return (
    <section className="bg-white flex js-center padding-top-3 padding-bottom-3">
      <div className="flex column alg-center  flex-basis-80  gap-3">
        <h2 className="flex-basis-40 fw-500 lh-4 fs-900">Skills</h2>
        <div className="flex js-center flex-basis-60 gap-2">
          {skillsData.map((item) => (
            <figure
              key={item.name}
              className="flex column alg-center gap-1 fs-600 uppercase "
              style={{ width: "100%" }}
            >
              {" "}
              <div>
                <img src={item.img.src} alt={item.img.alt} />
              </div>{" "}
              <figcaption>{item.name}</figcaption>{" "}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

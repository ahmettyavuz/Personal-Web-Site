import { skillsData } from "../data";

const Skills = () => {
  return (
    <section className="bg-white flex js-center padding-top-3 padding-bottom-3">
      <div className="flex column alg-center  flex-basis-80  gap-3">
        <h1 className="fw-500 lh-4 fs-900" style={{ flexBasis: "40%" }}>
          Skills
        </h1>
        <div className="flex js-center gap-2" style={{ flexBasis: "60%" }}>
          {skillsData.map((item) => (
            <div
              key={item.name}
              className="flex column alg-center gap-1 fs-600 uppercase "
              style={{ width: "100%" }}
            >
              {" "}
              <div>
                <img src={item.img.src} alt={item.img.alt} />
              </div>{" "}
              <p>{item.name}</p>{" "}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

import { useContext } from "react";
import { Context } from "../context/context";

const Skills = () => {
  const { data } = useContext(Context);

  return (
    <section className="bg-white flex js-center padding-top-3 padding-bottom-3 position-relative">
      <div
        className="relative flex column alg-center flex-container gap-3 padding-top-3 padding-bottom-3"
        style={{ width: "100%", overflow: "hidden" }}
      >
        <div className="diglet-gray position-absolute"></div>
        <h2 className="fw-500 lh-4 fs-900">{data[0]?.skillsData.title}</h2>
        <div
          className="flex js-around gap-1 padding-bottom-3"
          style={{
            maxWidth: "60vw",
            overflowX: "auto",
            whiteSpace: "nowrap",
            display: "flex",
            scrollBehavior: "smooth",
            padding: "0 10px",
          }}
        >
          {data[0]?.skillsData.skills.map((item) => (
            <figure
              key={item.name}
              className="flex column alg-center gap-1 fs-600 uppercase"
              style={{
                display: "inline-block",
                flexShrink: 0,
                textAlign: "center",
              }}
            >
              <div>
                <img
                  style={{ borderRadius: "8px", minWidth: "120px" }}
                  src={item.img.src}
                  alt={item.img.alt}
                />
              </div>
              <figcaption>{item.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

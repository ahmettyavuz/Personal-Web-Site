import { useContext } from "react";
import { Context } from "../context/context";

const Profile = () => {
  const { data } = useContext(Context);

  return (
    <section className="bg-gray flex js-center  padding-top-3 padding-bottom-3 position-relative">
      <div className="bg-gray flex column js-center alg-center gap-2 flex-container padding-bottom-3">
        <div className="polo-pink position-absolute"></div>
        <h2 className="fs-800 fw-500 lh-3">{data[0]?.profileData.titles[0]}</h2>
        <div className="flex js-around alg-center gap-1 wrap">
          <article className="flex-basis-40 profile-card bg-card flex column gap-1 padding-top-2 padding-bottom-2 padding-left-1">
            <h3 className="ff-play fs-600 tx-red">
              {data[0]?.profileData.titles[1]}
            </h3>{" "}
            {data[0]?.profileData.information &&
              Object.entries(data[0]?.profileData.information).map(
                ([key, value]) => (
                  <div className="flex" key={key}>
                    <p className="flex-basis-40 fw-600">{value.name}</p>
                    <p className="flex-basis-40 fw-400">{value.value}</p>
                  </div>
                )
              )}
          </article>
          <article className="flex column gap-2 flex-profile position-relative">
            <h3 className="text-blue fs-600 fw-400 lh-2 ff-play z-index-2">
              {data[0]?.profileData.about.title}
            </h3>
            <p className="fs-500 fw-400 lh-2">
              {data[0]?.profileData.about.content[0]}
            </p>
            <p className="fs-500 fw-400 lh-2">
              {data[0]?.profileData.about.content[1]}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Profile;

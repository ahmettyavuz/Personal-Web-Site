import { useContext } from "react";
import { profileData } from "../data";
import { Context } from "../context/context";

const Profile = () => {
  const { lang } = useContext(Context);

  return (
    <section className="bg-gray flex js-center  padding-top-3 padding-bottom-3 position-relative">
      <div className="bg-gray flex column js-center alg-center gap-2 flex-container padding-bottom-3">
        <div className="polo-pink position-absolute"></div>
        <h2 className="fs-800 fw-500 lh-3">{profileData[lang].titles[0]}</h2>
        <div className="flex js-center alg-center gap-4 wrap">
          <article className="profile-card bg-card flex column gap-1 padding-top-2 padding-bottom-2 padding-left-1">
            <h3 className="ff-play fs-600 tx-red">
              {profileData[lang].titles[1]}
            </h3>{" "}
            {Object.entries(profileData[lang].information).map(
              ([key, value]) => (
                <div className="flex" key={key}>
                  <p className="flex-basis-40 fw-600">{value.name}</p>
                  <p className="flex-basis-40 fw-400">{value.value}</p>
                </div>
              )
            )}
          </article>
          <article className=" flex column gap-2 flex-profile position-relative">
            <h3 className="text-blue fs-600 fw-400 lh-2 ff-play z-index-2">
              {profileData[lang].about.title}
            </h3>
            <p className="fs-500 fw-400 lh-2">
              {profileData[lang].about.content[0]}
            </p>
            <p className="fs-500 fw-400 lh-2">
              {profileData[lang].about.content[1]}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Profile;

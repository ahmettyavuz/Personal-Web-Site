import { profileData } from "../data";

const Profile = () => {
  return (
    <section className="bg-gray flex js-center  padding-top-3 padding-bottom-3">
      <div className="bg-gray flex column js-center alg-center gap-2 flex-basis-80 padding-bottom-3">
        <h2 className="fs-800 fw-500 lh-3">Profile</h2>
        <div className="flex js-center alg-center gap-4 ">
          <article className="profile-card bg-white  flex column  gap-1  flex-basis-40 padding-top-2 padding-bottom-2 padding-left-1">
            <h3 className="ff-play fs-600 tx-red">Basic Information</h3>{" "}
            {Object.entries(profileData).map(([key, value]) => (
              <div className="flex" key={key}>
                <p className="flex-basis-40 fw-600">{value.en.name}</p>
                <p className="flex-basis-40 fw-400">{value.en.value}</p>
              </div>
            ))}
          </article>
          <article className=" flex column gap-2 flex-basis-40 ">
            <h3 className="fs-600 fw-400 lh-2 ff-play">About me</h3>
            <p className="fs-500 fw-400 lh-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              aut, odit laborum aliquam voluptatum nisi mollitia.
            </p>
            <p className="fs-500 fw-400 lh-2">
              Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod
              deserunt quam temporibus cumque magnam!{" "}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Profile;

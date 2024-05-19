import { useContext } from "react";
import Profile from "./Profile";
import Projects from "./Projects";
import Skills from "./Skills";
import { Context } from "../context/context";

const Container = () => {
  const { data } = useContext(Context);

  if (!data || data.length === 0) {
    return <div></div>;
  }

  return (
    <main className="flex column">
      <Skills />
      <Profile />
      <Projects />
    </main>
  );
};

export default Container;

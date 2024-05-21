import Profile from "./Profile";
import Projects from "./Projects";
import Skills from "./Skills";

const Container = () => {
  return (
    <main className="flex column">
      <Skills />
      <Profile />
      <Projects />
    </main>
  );
};

export default Container;

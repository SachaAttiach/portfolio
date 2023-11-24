import Typewriter from "typewriter-effect";
import "../pages/style.css";

function Text() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Engineer",
          "React Js Developer",
          "Front End Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
      }}
    />
  );
}

export default Text;

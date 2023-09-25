import { Player } from "@lottiefiles/react-lottie-player";

export default function AboutMe() {

  const isMobile = window.innerWidth <= 1024;
  const imge = require("../../data/Animation - arrow1.json");
  // const imge2 = require("../../data/Animation - 1695212715580.json");
  
  
  
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <Player
        autoplay
        loop
        src={imge } />
      </div>
      <div className="hero--section--content--boxabout--section--box">
        <div className="hero--section--content">
          <p className="section--title"></p>
          <h1 className="skills--section--heading">About Me</h1>
          <p className="hero--section--description">
            I'm Khalid, a passionate learner currently undergoing professional
            training at Intec-Brussels in Web Development
          </p>
          <p className="hero--section--description">
            I'm a passionate web
            developer dedicated to creating user-friendly digital experiences.
            With a creative mindset and a commitment to lifelong learning, I
            turn ideas into engaging websites and applications. I'm excited to
            contribute to the dynamic world of web development.
          </p>
        </div>
      </div>
    </section>
  );
}

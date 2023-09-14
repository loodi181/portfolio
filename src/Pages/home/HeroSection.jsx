import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-scroll";

export default function HeroSection() {
  const photoSection = require("../../data/Animation - 1694678286166.json");
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="sectoin--title" id="MyName">
            Hey, I'm Khalid
          </p>
          <h1 className="hero--section--title">
            <span className="hero--section--title--color">Front End</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section--description">
            use technologies like HTML, CSS, JavaScript and Reactjs to bring web
            designs to life and ensure a seamless and engaging user experience.
            <br />I have a foundational understanding of backend development,
            and I'm actively working to enhance my expertise in this area.
          </p>
        </div>

        <a href="mailto:khalid181ali@gmail.com" className="btn btn-primary">
          Send an Email
        </a>
      </div>
      <div className="hero--section--img">
        <Player autoplay loop src={photoSection} />
      </div>
    </section>
  );
}

export default function AboutMe() {
    const imge = require('../../data/about-me.png')
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src={imge} alt="About Me" />
      </div>
      <div className="hero--section--content--boxabout--section--box">
        <div className="hero--section--content">
          <p className="section--title"></p>
          <h1 className="skills--section--heading">About Me</h1>
          <p className="hero--section--description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            suscipit quod adipisci nam aperiam nihil, cupiditate deserunt
            dolorum placeat corrupti!
          </p>
          <p className="hero--section--description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            esse expedita cum culpa quibusdam, obcaecati eius eum, minus
            repellendus, placeat ut libero nam! Accusantium, laborum!
          </p>
        </div>
      </div>
    </section>
  );
}

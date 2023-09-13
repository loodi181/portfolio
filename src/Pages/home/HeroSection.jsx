export default function HeroSection() {
    const photoSection = require('../../data/ai.png')
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="sectoin--title">Hey, I'm Khalid</p>
          <h1 className="hero--section--title">
            <span className="hero--section--title--color">Front End</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section--description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eum
            nulla atque impedit ducimus!<br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <button className="btn btn-primary">Get in Touch</button>
      </div>
      <div className="hero--section--img">
        <img src={photoSection} alt="tree" className='img-hero'/>
      </div>
    </section>
  );
}

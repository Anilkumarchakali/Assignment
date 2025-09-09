import nike from "../assets/nike.png";
import reebok from "../assets/reebok.png";
import puma from "../assets/puma.png";
import iphone from "../assets/iphone.png";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-visual">
          <div className="visual-box"></div>
        </div>

        <div className="hero-text">
          <h1 className="hero-title">
            Design
            Transform
            Accelerate
          </h1>
          <p className="hero-subtitle">
            Redefining user experiences through Behavioural Science & AI
          </p>
        </div>
      </div>

      <div className="hero-clients-scroll">
        <div className="scroll-track">
          <img className="hero-section-images" src={nike} alt="Nike" />
          <img className="hero-section-images" src={reebok} alt="Reebok" />
          <img className="hero-section-images" src={puma} alt="Puma" />
          <img className="hero-section-images" src={iphone} alt="iPhone" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

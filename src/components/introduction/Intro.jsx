import "./Intro.css"
import Olzhas from "../../img/olzhas.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Sagyndyk Olzhas</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">Photographer</div>
              <div className="i-title-item">Student IITU</div>
              <div className="i-title-item">Psychologist</div>
            </div>
          </div>
          <p className="i-desc">
            A student of the direction of "Information Security" specializing in
            network protection. Diligent, diligent and responsible. I show these
            qualities in everything I do.
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Olzhas} alt="me" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
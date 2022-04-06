import "./About.css";
import Award from "../../img/wreath.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/3439095/pexels-photo-3439095.jpeg?cs=srgb&dl=pexels-alan-ferreira-3439095.jpg&fm=jpg"
            alt="aboutbg"
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">

          "If you want to be somebody, somebody really special, be yourself"
        </p>
        <p className="a-desc">
          I am studying at IITU in Almaty, 2nd year, specialty "Information Security". I am interning at DS Tech, Frontend developer.
          I learned Website Design from them. I can work with React, Angular and study programming languages such as C++, Java, Python.
          Recently I started getting involved in creating Apps for iOS.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">You can't work on a project you hate</h4>
            <p className="a-award-desc">
              You can't work on a project you hate
              The field of design is not fast food, and the customer is not always right.
              It is more difficult to build communication in this case,
              but the designer needs to learn not to love, but at least to respect the client's business.
              A professional designer is distinguished by the ability to set himself up in a positive way and get carried away with the project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
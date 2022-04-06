import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/gmail.png";
import Address from "../../img/map.png";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">My contacts</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="myphone" className="c-icon" />
              +7 771 615 8005
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="gmail" />
              oljywhite@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="home" />
              Kazakhstan, Almaty city, Bostandyk district, Manasa 31 street 
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>A life is a moment.</b> Man is least himself when he talks in his own person. Give him a mask, and he will tell you the truth.
          </p>
          <form>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
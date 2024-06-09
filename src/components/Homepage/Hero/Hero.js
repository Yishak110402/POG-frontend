import { useNavigate } from "react-router-dom";
import heroVideo from "./../../../assets/herovideo.MOV";
import "./Hero.css";
export default function Hero() {
  const navigate = useNavigate();
  return (
    <div className="hero">
      <div className="hero-media">
        <video src={heroVideo} loop muted autoPlay />
      </div>
      <div className="hero-text">
        <div className="hero-header">
          <h1>Providence of Grace</h1>
        </div>
        <div className="hero-content">
          <p>
            At Providence of Grace Inc, we are committed to providing medical
            equipment and supplies to East African countries in need. We believe
            that access to medical equipment is a fundamental human right, and
            we are striving to make a difference in the lives of those who lack
            access to these resources.
          </p>
        </div>
        <div className="hero-cta-btns">
          <button onClick={() => navigate("/who-we-are")}>Learn More</button>
        </div>
      </div>
    </div>
  );
}

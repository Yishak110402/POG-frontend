import { Link } from "react-router-dom";
import missionsImage from './../../../assets/missionsimage.jpg'
import "./OurMission.css";

export default function OurMission() {
  return (
    <div className="our-mission">
      <div className="mission-text">
        <h1>Our Mission</h1>
        <p>
          Providence of Grace is a Christ-centered non-profit organization
          dedicated to improving healthcare access in East Africa by providing
          donated medical equipment to hospitals and clinics, while sharing the
          love and hope of Jesus Christ. Providence of Grace Inc. relies on the
          generosity of our donors to make a difference in the lives of people
          in underserved communities in East Africa. Our organization collects
          gently used medical equipment to distribute to hospitals and clinics,
          as well as educational materials and books for schools in these areas.
          By delivering these resources, we are helping improve the quality of
          life of patients and students who otherwise may not have access to
          these vital resources.
        </p>
        <Link to="/who-we-are">Read More</Link>
      </div>
      <div className="missions-image">
        <img src={missionsImage}/>

      </div>
    </div>
  );
}

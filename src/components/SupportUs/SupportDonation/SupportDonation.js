import "./SupportDonation.css";
import donateImage from "./../../../assets/donateimage.jpg";
import { Link } from "react-router-dom";
export default function SupportDonation() {
  return (
    <div className="support-donation">
      <div className="support-donation-txt">
        <h3>Support Us and Make a Difference Today</h3>
        <p>
          Your generous donations help us continue our mission of providing
          grace and support to those in need. Choose from our one-time or
          recurring donation options and make a lasting impact.
        </p>
        <div className="cta-container">
          <button>Donate</button>
          <Link to={"/who-we-are"}>Learn More</Link>
        </div>
      </div>
      <img src={donateImage} alt="" />
    </div>
  );
}

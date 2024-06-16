import "./Footer.css";
import logo from "./../../assets/providenceofgracelogo.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { GeneralContext } from "../../hooks/GeneralContext";
export default function Footer() {
  const { handleSubscription, setSubData } = useContext(GeneralContext);
  return (
    <footer className="footer">
      <img src={logo} alt="" />
      <div className="footer-subscribe">
        <p>Subscribe to our newsletter</p>
        <div>
          <label>Email : </label>
          <input onChange={(e) => setSubData(e.target.value)} type="email" />
        </div>
        <button onClick={handleSubscription}>Subscribe</button>
      </div>
      <nav>
        <ul className="footer-links">
          <Link to={"/"}>Home</Link>
          <Link to={"/who-we-are"}>Who We Are</Link>
          <Link to={"support-us"}>Support Us</Link>
          <Link to={"/events"}>Events</Link>
          <Link to={"/news"}>News</Link>
          <Link to={"/contact"}>Contact</Link>
        </ul>
      </nav>
    </footer>
  );
}

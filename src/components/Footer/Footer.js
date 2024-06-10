import "./Footer.css";
import logo from "./../../assets/providenceofgracelogo.png";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="" />
      <div className="footer-subscribe">
        <p>Subscribe to our newsletter</p>
        <div>
          <label>Email : </label>
          <input type="email" />
        </div>
        <button>Subscribe</button>
      </div>
      <nav>
        <ul className="footer-links">
          <Link>Home</Link>
          <Link>Who We Are</Link>
          <Link>Support Us</Link>
          <Link>Events</Link>
          <Link>News</Link>
          <Link>Contact</Link>
        </ul>
      </nav>
    </footer>
  );
}

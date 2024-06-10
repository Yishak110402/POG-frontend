import "./ContactUs.css";
import contactImage from "./../../../assets/contactImage.jpg";

export default function ContactUs() {
  return (
    <div className="contact-us">
      <div className="options">
        <h1>
          For more information about our organization, please contact us with the following options
        </h1>
        <p>
          E-mail:{" "}
          <a href="mailto:information@providenceofgrace.org">
            information@providenceofgrace.org
          </a>
        </p>
        <p>Registered Charity Number: 32-0670679</p>
      </div>
      <img src={contactImage} alt="" />
    </div>
  );
}

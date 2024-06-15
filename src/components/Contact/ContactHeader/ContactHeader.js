import { useEffect } from "react";
import "./ContactHeader.css";
export default function ContactHeader() {
    useEffect(function(){
        document.title = "Contact | Providence of Grace"
    })
  return (
    <div className="contact-header">
      <h1>Connect with us today</h1>
      <p>
        Thank you for reaching out to us. We would love to hear from you. Please
        feel free to contact us via email, phone or leave us a note. we will get
        back to you as as possible
      </p>
    </div>
  );
}

import { useEffect } from "react";
import ContactHeader from "../components/Contact/ContactHeader/ContactHeader";
import ContactMethodsContainer from "../components/Contact/ContactMethodsContainer/ContactMethodsContainer";

export default function Contact() {
  useEffect(function () {
    document.title = "Contact | Providence of Grace";
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  });
  return (
    <div>
      <ContactHeader />
      <ContactMethodsContainer />
    </div>
  );
}

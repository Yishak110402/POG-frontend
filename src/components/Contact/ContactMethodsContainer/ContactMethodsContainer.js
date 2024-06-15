import "./ContactMethodsContainer.css"
import MessageForm from "../MessageForm/MessageForm";
import ContactMethods from "../ContactMethods/ContactMethods";

export default function ContactMethodsContainer(){
    return(
        <div className="contact-methods-container">
            <MessageForm/>
            <ContactMethods/>
        </div>
    )

}
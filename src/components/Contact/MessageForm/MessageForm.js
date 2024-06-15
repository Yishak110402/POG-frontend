import { useContext } from "react"
import "./MessageForm.css"
import { GeneralContext } from "../../../hooks/GeneralContext"
export default function MessageForm(){
    const {sendMessage} = useContext(GeneralContext)
    return(
        <div className="message-form">
           <form onSubmit={sendMessage}>
            <section>
            <div>
                <label>Name</label>
                <input type="text"/>
            </div>
            <div>
                <label>Email</label>
                <input type="text"/>
            </div>
            <div>
                <label>Subject</label>
                <input type="text"/>
            </div>
            <div>
                <label>Phone</label>
                <input type="number"/>
            </div>
            <div>
                <label>Message</label>
                <textarea />
            </div>
            </section>
            <button type="submit">Send</button>
           </form>
        </div>
    )
}
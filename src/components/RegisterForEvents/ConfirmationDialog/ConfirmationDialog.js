import { useNavigate } from "react-router-dom"
import "./ConfirmationDialog.css"
import { RegisterContext } from "../../../hooks/RegisterContext"
import { useContext } from "react"
export default function ConfirmationDialog(){
    const navigate = useNavigate()
    const {dialogOpen} = useContext(RegisterContext)
    return(
        <div className={`confirmation-dialog ${dialogOpen ? "open" : "closed"}`}>
           <div>
           <p>Dear Yishak, You have successfully registered for the event. Thank you for your cooperation</p>
           <button onClick={()=>(navigate("/events"))} type="button">Back to events</button>
           </div>
        </div>
    )
}
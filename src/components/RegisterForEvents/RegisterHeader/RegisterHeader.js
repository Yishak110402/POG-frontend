import { useParams } from "react-router-dom"
import { useContext } from "react"
import { GeneralContext } from "../../../hooks/GeneralContext"
import './RegisterHeader.css'

export default function RegisterHeader(){
    const {events} = useContext(GeneralContext)
    const {id} = useParams()
    return(
        <div className="register-header">
            <h1>Register for event: {events[id].name}</h1>
        </div>
    )
}
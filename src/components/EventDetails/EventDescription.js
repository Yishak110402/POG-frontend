import { useContext } from "react"
import { useParams } from "react-router-dom"
import { GeneralContext } from "../../hooks/GeneralContext"
import './EventDescription.css'

export default function EventDescription(){
    const {id} = useParams()
    const {events} = useContext(GeneralContext)
    return(
        <div className="event-description">
            <p>{events[id].description}</p> 
            <h3>Time and Location</h3>
            <p>{events[id].time} | {events[id].location}</p>
            <button>Register Now</button>
        </div>
    )
}
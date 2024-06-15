import { useNavigate } from "react-router-dom"
import eventImage from "./../../../assets/medicalequipment.jpg"
import './Event.css'
 export default function Event({event, index}){
    const navigate = useNavigate()
    let name = null
    if(event.name.length > 35){
        name = event.name.substring(0,34) + "..."
    }else{
        name = event.name
    }
    
    return(
        <div className="event">
            <img src={eventImage} alt=""/>
            <h3>{name}</h3>
            <h4>{event.location} | {event.time}</h4>
            <button className="event-detail-btn" onClick={()=>(navigate(`/events/${index}`))}>See Details</button>
        </div> 
    )
}
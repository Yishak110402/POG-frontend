import { useNavigate } from "react-router-dom"
import eventImage from "./../../../assets/medicalequipment.jpg"
import './AllEvent.css'
export default function AllEvent({event, index}){
    const navigate = useNavigate()
    let name
    if(event.name.length>= 25){
        name = event.name.slice(0,24)+"..."
    }else{
        name = event.name
    }
    return(
        <div className="events-event">
           <img alt="" src={eventImage}  />
           <h2>{name}</h2>
           <p>Time is TBD | Location is TBD</p>
           <div className="date">
            <h2>{event.date.date}</h2>
            <h3>{event.date.month}</h3>
            <h4>{event.date.year}</h4>
           </div>
           <button onClick={()=>(navigate(`/events/${index}`))}>See details</button>
        </div>
    )
}
import eventImage from "./../../../assets/medicalequipment.jpg"
import './Event.css'
 export default function Event({name = "Event name", location = "Location is TBD", time ="Time is TBD"}){
    if(name.length > 35){
        name = name.substring(0,34) + "..."
    }
    return(
        <div className="event">
            <img src={eventImage} alt=""/>
            <h3>{name}</h3>
            <h4>{location} | {time}</h4>
        </div>
    )
}
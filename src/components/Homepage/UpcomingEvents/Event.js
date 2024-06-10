import eventImage from "./../../../assets/medicalequipment.jpg"
import './Event.css'
 export default function Event({name = "Event name", location = "Location is TBD", time ="Time is TBD"}){
    if(name.length > 40){
        name = name.substring(0,39) + "..."
    }
    console.log(name);
    return(
        <div className="event">
            <img src={eventImage} alt=""/>
            <h3>{name}</h3>
            <h4>{location} | {time}</h4>
        </div>
    )
}
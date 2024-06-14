import { useNavigate } from "react-router-dom";
import Event from "./Event";
import './UpcomingEvents.css'
import { useContext } from "react";
import { GeneralContext } from "../../../hooks/GeneralContext";

export default function UpcomingEvents(){
    const navigate = useNavigate()
    const {events} = useContext(GeneralContext)
    const trimmedEvents = events.slice(0,3)
    return(
        <div className="upcoming-events">
            <h1>Our Upcoming Events</h1>
            <h3>Please mark your calendar for our upcoming exciting events</h3>
            <div className="events-container">
                {
                    trimmedEvents.map((event)=>(
                        <Event event={event}/>
                    ))
                }
            </div>
            <button onClick={()=>(navigate("/events"))}>See all events</button>
        </div>
    )
}
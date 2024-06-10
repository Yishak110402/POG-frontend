import Event from "./Event";
import './UpcomingEvents.css'

export default function UpcomingEvents(){
    return(
        <div className="upcoming-events">
            <h1>Our Upcoming Events</h1>
            <h3>Please mark your calendar for our upcoming exciting events</h3>
            <div className="events-container">
                <Event name="Dinner Event for Butajira Hospital"/>
                <Event name="Collecting Used Equipments From Hospitals In Dallas" location="Dallas"/>
                <Event name="Fundraising in the Coming Summer"/>
            </div>
        </div>
    )
}
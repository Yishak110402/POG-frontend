import eventImage from "./../../../assets/medicalequipment.jpg"
import './AllEvent.css'
export default function AllEvent(){
    return(
        <div className="events-event">
           <img alt="" src={eventImage}  />
           <h2>Event Name</h2>
           <p>Time is TBD | Location is TBD</p>
           <div className="date">
            <h2>14</h2>
            <h3>June</h3>
            <h4>2024</h4>
           </div>
           <button>See details</button>
        </div>
    )
}
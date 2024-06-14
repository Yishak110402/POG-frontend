import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GeneralContext } from "../../hooks/GeneralContext";
import "./EventDescription.css";

export default function EventDescription() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { events } = useContext(GeneralContext);
  return (
    <div className="event-description">
      <h4>
        Date: {events[id].date.date}/{events[id].date.month}/
        {events[id].date.year}
      </h4>
      <p className="description">{events[id].description}</p>
      <h3>Time and Location</h3>
      <p>
        {events[id].time} | {events[id].location}
      </p>
      <button onClick={() => navigate(`/events/${id}/register`)}>
        Register Now
      </button>
    </div>
  );
}

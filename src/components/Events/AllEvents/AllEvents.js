import { useContext } from "react";
import AllEvent from "./AllEvent";
import './AllEvents.css'
import { GeneralContext } from "../../../hooks/GeneralContext";
export default function AllEvents() {
  const  {events} = useContext(GeneralContext)
  return (
    <div className="all-events">
      {
        events.map((event, index)=>(
          <AllEvent key={index} event={event} index={index}/>
        ))
      }
    </div>
  );
}

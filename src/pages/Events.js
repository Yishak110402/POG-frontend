import { useEffect } from "react"
import EventsHeader from "../components/Events/EventsHeader/EventsHeader"
import AllEvents from "../components/Events/AllEvents/AllEvents"

export default function Events(){
    useEffect(function(){
        document.title = "Events | Providence of Grace"
    },[])
    return(
        <div>
           <EventsHeader/>
           <AllEvents/>
        </div>
    )
}
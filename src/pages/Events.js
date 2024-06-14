import { useContext, useEffect } from "react"
import EventsHeader from "../components/Events/EventsHeader/EventsHeader"
import AllEvents from "../components/Events/AllEvents/AllEvents"
import { RegisterContext } from "../hooks/RegisterContext"

export default function Events(){
    const {setDialogOpen} = useContext(RegisterContext)
    useEffect(function(){
        document.title = "Events | Providence of Grace"
        setDialogOpen(false)
    },[])
    return(
        <div>
           <EventsHeader/>
           <AllEvents/>
        </div>
    )
}
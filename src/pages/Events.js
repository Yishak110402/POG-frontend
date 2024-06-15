import { useContext, useEffect } from "react"
import EventsHeader from "../components/Events/EventsHeader/EventsHeader"
import AllEvents from "../components/Events/AllEvents/AllEvents"
import { RegisterContext } from "../hooks/RegisterContext"

export default function Events(){
    const {setDialogOpen} = useContext(RegisterContext)
    useEffect(function(){
        document.title = "Events | Providence of Grace"
        setDialogOpen(false)
        window.scrollTo({
            top:0,
            behavior:"instant"
        })
    })
    return(
        <div>
           <EventsHeader/>
           <AllEvents/>
        </div>
    )
}
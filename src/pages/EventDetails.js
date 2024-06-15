import { useEffect } from "react";
import EventDescription from "../components/EventDetails/EventDescription";
import EventHeader from "../components/EventDetails/EventHeader";

export default function EventDetails(){
    useEffect(function(){
        window.scrollTo({
            top:0,
            behavior:"instant"
        })
    },[])
    return(
        <div>
            <EventHeader/>
            <EventDescription/>
        </div>
    )
}
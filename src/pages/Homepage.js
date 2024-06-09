import { useEffect } from "react";
import Hero from "../components/Homepage/Hero/Hero";
import OurMission from "../components/Homepage/OurMission/OurMission";

export default function Homepage(){
    useEffect(function(){
        document.title = "Home | Providence of Grace"
    },[])
    return(
       <div>
        <Hero/>
        <OurMission/>
       </div>
    )
}
import { useEffect } from "react";
import Hero from "../components/Homepage/Hero/Hero";
import OurMission from "../components/Homepage/OurMission/OurMission";
import Subscription from "../components/Homepage/Subscription/Subscription";

export default function Homepage(){
    useEffect(function(){
        document.title = "Home | Providence of Grace"
    },[])
    return(
       <div>
        <Hero/>
        <OurMission/>
        <Subscription/>
       </div>
    )
}
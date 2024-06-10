import { useEffect } from "react";
import Hero from "../components/Homepage/Hero/Hero";
import OurMission from "../components/Homepage/OurMission/OurMission";
import Subscription from "../components/Homepage/Subscription/Subscription";
import Projects from "../components/Homepage/Projects/Projects";

export default function Homepage(){
    useEffect(function(){
        document.title = "Home | Providence of Grace"
    },[])
    return(
       <main>
        <Hero/>
        <OurMission/>
        <Subscription/>
        <Projects/>
       </main>
    )
}
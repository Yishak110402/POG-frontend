import { useEffect } from "react";
import SupportUsHeader from "../components/SupportUs/SupportUsHeader/SupportUsHeader";
import SupportMethods from "../components/SupportUs/SupportMethods/SupportMethods";
import SupportDonation from "../components/SupportUs/SupportDonation/SupportDonation";

export default function SupportUs(){
    useEffect(function(){
        document.title = "Support Us | Providence of Grace"
        window.scrollTo({
            top:0,
            behavior:"instant"
        })
    })
    return(
        <div>
            <SupportUsHeader/>
            <SupportMethods/>
            <SupportDonation/>
        </div>
    )
}
import { useEffect } from "react";
import RegisterContactUs from "../components/RegisterForEvents/RegisterContactUs/RegisterContactUs";
import RegisterForm from "../components/RegisterForEvents/RegisterForm/RegisterForm";
import RegisterHeader from "../components/RegisterForEvents/RegisterHeader/RegisterHeader";

export default function RegisterForEvent(){
    useEffect(function(){
        window.scrollTo({
            top:0,
            behavior:"instant"
        })
    })
    return(
        <div style={{minHeight:"65vh"}}>
        <RegisterHeader/>
        <RegisterForm/>
        <RegisterContactUs/>
        </div>
    )
   
}
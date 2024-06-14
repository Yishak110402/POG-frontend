import RegisterContactUs from "../components/RegisterForEvents/RegisterContactUs/RegisterContactUs";
import RegisterForm from "../components/RegisterForEvents/RegisterForm/RegisterForm";
import RegisterHeader from "../components/RegisterForEvents/RegisterHeader/RegisterHeader";

export default function RegisterForEvent(){
    return(
        <div style={{minHeight:"65vh"}}>
        <RegisterHeader/>
        <RegisterForm/>
        <RegisterContactUs/>
        </div>
    )
   
}
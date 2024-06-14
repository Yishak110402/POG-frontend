import { useContext } from "react";
import "./RegisterForm.css";
import { RegisterContext } from "../../../hooks/RegisterContext";
import ConfirmationDialog from "../ConfirmationDialog/ConfirmationDialog";
export default function RegisterForm() {
  const { handleRegister } = useContext(RegisterContext);
  return (
    <div className="register-form">
      <span>Please fill out the form and complete the registration</span>
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname" />
        </div>
        <div>
          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <button type="submit">Register</button>
        <ConfirmationDialog/>
      </form>
    </div>
  );
}

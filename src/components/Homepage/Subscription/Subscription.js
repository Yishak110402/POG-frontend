import './Subscription.css'
import subImage from './../../../assets/subImage.jpg'
import { useNavigate } from 'react-router-dom';
export default function Subscription() {
  const navigate = useNavigate()
  return (
    <div className="subscription">
      <div className="support-section">
        <div className='sub-shade'></div>
        <img src={subImage} alt='Doctors working together'/>
        <h1>"Transforming Lives Through the Gift of Medical Care"</h1>
        <p>
          We have recently secured $500,000.00 worth of medical equipment to
          ship to Butajira General Hospital and are now raising funds for the
          shipping and processing fees. Our goal is to raise $60,00.00 to make
          this possible. Please Help us by donating today.
        </p>
        <button onClick={()=>(navigate("/support-us"))}>Support Us</button>
      </div>
      <div className='subscription-section'>
        <h3>Subscribe to our newsletter</h3>
        <label htmlFor='subscription-email'>Enter your email</label>
        <input type='email' placeholder='john.doe@example.com' id='subscription-email'/>
        <button>Join</button>
      </div>
    </div>
  );
}

import { useContext } from 'react'
import './RegisterContactUs.css'
import { GeneralContext } from '../../../hooks/GeneralContext'
export default function RegisterContactUs(){
    const {sendMessage} = useContext(GeneralContext)
    return(
        <div className='register-contact'>
            <div className='shade'/>
            <h2>If you have any questions regarding our organization, please send us a message and we'll reply as soon as possible</h2>
            <form onSubmit={sendMessage}>
                <div>
                    <label>Name</label>
                    <input type='text'/>
                </div>
                <div>
                    <label>Email</label>
                    <input type='email'/>
                </div>
                <div>
                    <label>Message</label>
                    <textarea/>
                </div>
                <button type='submit'>Send Message</button>
            </form>
        </div>
    )
}
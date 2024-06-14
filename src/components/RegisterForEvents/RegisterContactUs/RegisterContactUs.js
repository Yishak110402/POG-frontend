import './RegisterContactUs.css'
export default function RegisterContactUs(){
    return(
        <div className='register-contact'>
            <h2>If you have any questions regarding our organization, please send us a message and we'll reply as soon as possible</h2>
            <form>
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
            </form>
        </div>
    )
}
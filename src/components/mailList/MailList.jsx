import st from './mailList.module.css'

export default function MailList(){
    return (
        <div className={st.mail}>
            <h1 className={st.mailTitle}>Save time, save money!</h1>
            <span className={st.mailDesc}>Sign up and we´ll send the best deals to you</span>
            <div className={st.mailInputContainer}>
                <input type="text" className="" placeholder='Your Email'/>
                <button>Subscribe</button>
            </div>
        </div>
    )
}
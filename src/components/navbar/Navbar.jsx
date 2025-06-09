import st from './navbar.module.css'

export default function Navbar(){
    return (
        <div className={st.navbar}>
            <div className={st.navContainer}>
                <span className={st.logo}>lamabooking</span>
                <div className={st.navItems}>
                    <button className={st.navButton}>Register</button>
                    <button className={st.navButton}>Login</button>
                </div>
            </div>
        </div>
    )
}
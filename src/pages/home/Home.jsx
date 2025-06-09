import st from "./home.module.css"
import Featured from "../../components/featured/Featured";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

export default function Home() {
    return (
        <div>
            <Navbar/>
            <Header/>
            <div className={st.homeContainer}>
                <Featured/>
                <h1 className={st.homeTitle}>Browse by property type</h1>  
                <PropertyList/> 
                <h1 className={st.homeTitle}>Homes guests love</h1>
                <FeaturedProperties/> 
                <MailList/>
            </div>
            <Footer/>
        </div>
    )
}
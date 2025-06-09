import st from "./hotel.module.css"
import Navbar from '../../components/navbar/Navbar'
import Header from  '../../components/header/Header'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import { useState } from "react"


export default function Hotel(){
    const [slideNum,setSlideNum] = useState(0)
    const [open, setOpen] = useState(false)
    const photos = [
        {src: 'https://www.atorus.ru/sites/default/files/styles/head_carousel/public/2021-09/6477e1.jpg.webp?itok=FkvaZf0S' },
        {src: 'https://www.atorus.ru/sites/default/files/styles/head_carousel/public/2021-09/6477e1.jpg.webp?itok=FkvaZf0S' },
        {src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/592699263.jpg?k=37178fbbaadcc5ca458b61f724b7085481bb9c3f335273b1c02bce279eab40e1&o=&hp=1' },
        {src: 'https://www.atorus.ru/sites/default/files/styles/head_carousel/public/2021-09/6477e1.jpg.webp?itok=FkvaZf0S' },
        {src: 'https://www.atorus.ru/sites/default/files/styles/head_carousel/public/2021-09/6477e1.jpg.webp?itok=FkvaZf0S' },
        {src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/592695480.jpg?k=caf397614917b4be66b3dc0b2d5cf809afc88ae5eec01c1e3534986bb48c4472&o=&hp=1' },
    ]

    function handleOpen(i) {
        setSlideNum(i)
        setOpen(true)
    }

    const handleMove = (direction)=> {
        let newSlideNumber;

        if (direction === 'l') {
            newSlideNumber = slideNum === 0 ? 5 : slideNum -1
        }else {
            newSlideNumber = slideNum === 5 ? 0 : slideNum +1
        }

        setSlideNum(newSlideNumber)
    }

    return (
        <div>
            <Navbar/>   
            <Header type='list'/>  
            <div className={st.hotelContainer}>
                {open && <div className={st.slider}>
                            <FontAwesomeIcon icon={faCircleXmark} className={st.close} onClick={()=>setOpen(false)}/>
                            <FontAwesomeIcon icon={faCircleArrowLeft} onClick={()=>handleMove('l')} className={st.arrow}/>
                            <div className={st.sliderWrapper}>
                                <img src={photos[slideNum].src} alt="" className={st.sliderImg} />
                            </div>
                            <FontAwesomeIcon icon={faCircleArrowRight} onClick={()=>handleMove('r')} className={st.arrow}/>
                        </div>
                }
                <div className={st.hotelWrapper}>
                    <button className={st.bookNow}>Reserve or Book Now!</button>
                    <h1 className={st.hotelTitle}>Grand Hotel</h1>
                    <div className={st.hotelAddress}>
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span>Elton St 125, New York</span>
                    </div>
                    <span className={st.hotelDistance}>
                        Excellent location - 500m from center
                    </span>
                    <span className={st.hotelPriceHighlight}>
                        Book a stay over $114 at this property and get a free airport taxi
                    </span>
                    <div className={st.hotelImages}>
                        {photos.map((photo,i)=>(
                            <div className={st.hotelImgWrapper}>
                                <img src={photo.src} onClick={()=>handleOpen(i)} alt="" className={st.hotelImg}/>
                            </div>
                        ))}
                    </div>
                    <div className={st.hotelDetails}>
                        <div className={st.hotelDetailsText}>
                            <h1 className={st.hotelTitle}>Stay in the heart of Krakow</h1>
                            <p className={st.hotelDesc}>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum voluptates optio exercitationem distinctio nostrum reprehenderit. Dicta modi, quam nemo libero quae doloribus cum. Laborum mollitia iusto dolorum natus provident optio.
                            </p>
                        </div>
                        <div className={st.hotelDetailsPrice}>
                            <h1>Perfect for a 9-night stay!</h1> 
                            <span>
                                Located in the real heart of Krakow, this property has an excellent location score of 9.8!    
                            </span> 
                            <h2>
                                <b>$945</b> (9 nights)
                            </h2>
                            <button>Reserve or Book Now!</button>
                        </div>
                    </div>
                </div> 
                <MailList/>
                <Footer/>
            </div>
        </div>
    )
}
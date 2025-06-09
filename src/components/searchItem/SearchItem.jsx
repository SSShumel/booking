import st from './searchItem.module.css'

export default function SearchItem() {
    return (
        <div className={st.searchItem}>
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/44146554.webp?k=2b0fd82f2d6230cc7c3d20f4a19f141da3f14c25fc8402a8f9334e8bc0c98508&o=" alt="" className={st.siImg} />
            <div className={st.siDesc}>
                <h1 className={st.siTitle}>Tower street apartments</h1>
                <span className={st.siDistance}>500m from center</span>
                <span className={st.siTaxiOp}>Free airport taxi</span>
                <span className={st.siSubtitle}>
                    Studio Apartment with Air conditioning
                </span>
                <span className={st.siFeatures}>Entire studio • 1 bathroom • 21m 1 full bed</span>
                <span className={st.siCancelOp}>Free cancellation</span>
                <span className={st.siCancelOpSubtitle}>You can cancel later, so lock in this great price today!</span>
            </div>
            <div className={st.siDetails}>
                <div className={st.siRating}>
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className={st.siDetailTexts}>
                    <span className={st.siPrice}>$123</span>
                    <span className={st.siTaxOp}>Includes taxes and fees</span>
                    <button className={st.siCheckButton}>See availability</button>
                </div>
            </div>
        </div>
    )
}
import st from "./featured.module.css"

export default function Featured() {
    return (
        <div className={st.featured}>
            <div className={st.featuredItem}>
                <img src="https://www.pufikhomes.com/wp-content/uploads/2023/11/stilnyi-dizayn-s-uvazheniem-k-proshlomu-gostevoi-dom-v-portugalii-pufikhomes-17-1.jpg" alt="" className={st.featuredImg} />
                <div className={st.featuredTitles}>
                  <h1>Dublin</h1>  
                  <h2>123 properties</h2>
                </div>
            </div>
            <div className={st.featuredItem}>
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/132452060.webp?k=f9cd3042175e0da40abf6d3988b9f3ac91aaeaefd9941081dbadfd0875c8ab27&o=" alt="" className={st.featuredImg} />
                <div className={st.featuredTitles}>
                  <h1>Dublin</h1>  
                  <h2>123 properties</h2>
                </div>
            </div>
            <div className={st.featuredItem}>
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/132452060.webp?k=f9cd3042175e0da40abf6d3988b9f3ac91aaeaefd9941081dbadfd0875c8ab27&o=" alt="" className={st.featuredImg} />
                <div className={st.featuredTitles}>
                  <h1>Dublin</h1>  
                  <h2>123 properties</h2>
                </div>
            </div>
        </div>
    )
}
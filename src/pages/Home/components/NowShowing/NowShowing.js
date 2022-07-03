import React from 'react'
import { Link } from 'react-router-dom'
import m3_1 from '../../../../assets/movies/m3.1.png'
import m2 from '../../../../assets/movies/m2.png'
import m1 from '../../../../assets/movies/m1.png'
import "./styles.css" 
import "./mobile.css"
const NowShowing = () => {
  return (
    <section className="now-showing">
      <div className="container">
        <div className="nw-title">
          <h2>Now Showing</h2>
          <Link to = "/">View All</Link>
        </div>
        <div className="nw-box">
          <div className="nw-box-items">
          
              <img src={m3_1} alt="spiderman" />
            </div>
            <div className="nw-box-items">
               <img src={m2} alt="lion king" />
            </div>
            <div className="nw-box-items">
              <img src={m1} alt="john wick 3" />
            </div>
            <div className="nw-box-items">
              <img src={m3_1} alt="spiderman" />
            </div>
            <div className="nw-box-items">
              <img src={m2} alt="lion king" />
            </div>
          </div>
        </div>
      
    </section>
  )
}

export default NowShowing
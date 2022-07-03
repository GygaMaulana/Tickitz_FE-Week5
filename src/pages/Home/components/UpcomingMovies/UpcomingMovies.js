import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import m4 from "../../../../assets/movies/m4.png";
import m5 from "../../../../assets/movies/m5.png";
import m6 from "../../../../assets/movies/m6.png";
import Slider from "react-slick";


const UpcomingMovies = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 468,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
 
  return (
    <>
      <section className="upcoming-movies">
        <div className="container">
          <div className="um-title">
            <h2>Upcoming Movies</h2>
            <Link to="/">view all</Link>
          </div>

          <Slider {...settings}>
            <div className="month active">September</div>
            <div className="month">October</div>
            <div className="month">November</div>
            <div className="month">December</div>
            <div className="month">January</div>
            <div className="month">February</div>
            <div className="month">March</div>
            <div className="month">April</div>
            <div className="month">May</div>
            <div className="month">June</div>
            <div className="month">July</div>
            <div className="month">August</div>
          </Slider>

          <div className="card-wrapper d-flex">
            <div className="um-card-items">
              <img src={m5} alt="black widow" />
              <div className="um-details">
                <div className="m-title">Black Widow</div>
                <div className="um-genre">Action, Adventure, Scifi</div>
                <button>Details</button>
              </div>
            </div>
            <div className="um-card-items">
              <img src={m6} alt="the witches" />
              <div className="um-details">
                <div className="m-title">Black Widow</div>
                <div className="um-genre">Action, Adventure, Scifi</div>
                <button>Details</button>
              </div>
            </div>
            <div className="um-card-items">
              <img src={m4} alt="tenet" />
              <div className="um-details">
                <div className="m-title">Black Widow</div>
                <div className="um-genre">Action, Adventure, Scifi</div>
                <button>Details</button>
              </div>
            </div>
            <div className="um-card-items">
              <img src={m6} alt="the witches" />
              <div className="um-details">
                <div className="m-title">Black Widow</div>
                <div className="um-genre">Action, Adventure, Scifi</div>
                <button>Details</button>
              </div>
            </div>
            <div className="um-card-items">
              <img src={m6} alt="black widow" />
              <div className="um-details">
                <div className="m-title">Black Widow</div>
                <div className="um-genre">Action, Adventure, Scifi</div>
                <button>Details</button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default UpcomingMovies
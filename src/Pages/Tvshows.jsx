import '../App.css'
import { useState,useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel';
 import "react-responsive-carousel/lib/styles/carousel.min.css";
const Tvshows=()=>{
    const [ popularshows, setpopularshows ] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/tv/airing_today?api_key=6ed750137b293f21a188d18ce55ec9e0&language=en-US")
        .then(res => res.json())                                //6ed750137b293f21a188d18ce55ec9e0
        .then(data => setpopularshows(data.results))
    }, [])
    return(
        <Carousel
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
      >
        {popularshows.map((movie) => (
          <>
            <div className="posterImage">
              <img
                src={`https://image.tmdb.org/t/p/original${
                  movie && movie.backdrop_path
                }`}
              />
            </div>
            <div className="posterImage__overlay">
              <div className="posterImage__title">
                {movie ? movie.original_name : ""}
              </div>
              <div className="posterImage__runtime">
                {movie ? movie.first_air_date : ""}
                <span className="posterImage__rating">
                  {movie ? movie.vote_average : ""}
                  <i className="fas fa-star yellow" />{" "}
                </span>
              </div>
              <div className="posterImage__description">
                {movie ? movie.overview : ""}
              </div>
            </div>
          </>
        ))}
      </Carousel>
  
    )
}
export default Tvshows
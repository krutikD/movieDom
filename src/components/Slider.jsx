import "../App.css";
import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
function Slider() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((res) => res.json()) //6ed750137b293f21a188d18ce55ec9e0
      .then((data) => setPopularMovies(data.results));
  }, []);
  return (
    <Carousel
      autoPlay={true}
      transitionTime={3}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
    >
      {popularMovies.map((movie) => (
        <>
        <Link style={{textDecoration:"none",color:"white"}} to={`/Details/${movie.id}`} >
          <div className="posterImage">
            <img
              src={`https://image.tmdb.org/t/p/original${
                movie && movie.backdrop_path
              }`}
            />
          </div>
          <div className="posterImage__overlay">
            <div className="posterImage__title">
              {movie.original_title
                ? movie.original_title
                : movie.original_name}
            </div>
            <div className="posterImage__runtime">
              {movie ? movie.release_date : ""}
              <span className="posterImage__rating">
                {movie ? movie.vote_average : ""}
                <i className="fas fa-star yellow" />{" "}
              </span>
            </div>
            <div className="posterImage__description">
              {movie ? movie.overview : ""}
            </div>
          </div>
          </Link>
        </>
      ))}
    </Carousel>
  );
}
export default Slider;

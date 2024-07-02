import { useEffect, useState } from "react";
import "../App.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWQ3NTAxMzdiMjkzZjIxYTE4OGQxOGNlNTVlYzllMCIsIm5iZiI6MTcxOTMzNTM4OC45NTE5NzYsInN1YiI6IjY2NzljYzExNDZlNmUzMTcxNDlmNGMwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IHgQmvD_dHXRs0stFkUtqMCRHtjNCf7VfYb2QDWxCQU",
  },
};

const Movies = () => {
  const [moviedata, setmoviedata] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US",
      options
    )
      .then((response) => response.json())
      .then((data) => setmoviedata(data.results))
      .catch((err) => console.error(err));
  });
  return (
    <Carousel
      autoPlay={true}
      transitionTime={3}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
    >
      {moviedata.map((movie) => (
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
              {movie ? movie.original_title : ""}
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
        </>
      ))}
    </Carousel>
  );
};
export default Movies;

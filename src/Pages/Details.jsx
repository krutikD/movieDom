import "./details.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Details() {
  const [currentMovieDetail, setMovieDetail] = useState();
  const [similarmovie,setSimilarMovie]=useState([])
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=6ed750137b293f21a188d18ce55ec9e0&language=en-US`
    )
      .then((res) => res.json()) //6ed750137b293f21a188d18ce55ec9e0
      .then((data) => setMovieDetail(data));
      console.log(1)
  }, []);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/1086747/similar?api_key=6ed750137b293f21a188d18ce55ec9e0&language=en-US`
    )
      .then((res) => res.json()) //6ed750137b293f21a188d18ce55ec9e0
      .then((data) => setSimilarMovie(data.results))
      console.log(similarmovie)
  }, [similarmovie]);
  return (
    <>
      <div className="movie-info">
        <img
          className="movie_banner"
          src={`https://image.tmdb.org/t/p/original${
            currentMovieDetail ? currentMovieDetail.backdrop_path : ""
          }`}
        />

        <div className="movie-details">
          <div className="movie-detailleft">
            <img
              className="movie-poster"
              src={`https://image.tmdb.org/t/p/original${
                currentMovieDetail ? currentMovieDetail.poster_path : ""
              }`}
              alt=""
            />
          </div>
          <div className="movie-detailright">
            <h1 className="movie-title">
              {currentMovieDetail ? currentMovieDetail.original_title : ""}
            </h1>
            <div className="movie__tagline">
              {currentMovieDetail ? currentMovieDetail.tagline : ""}
            </div>
            <div className="movie__rating">
              {currentMovieDetail ? currentMovieDetail.vote_average : ""}{" "}
              <i class="fas fa-star" />
              <span className="movie__voteCount">
                {currentMovieDetail
                  ? "(" + currentMovieDetail.vote_count + ") votes"
                  : ""}
              </span>
            </div>
            <div className="movie__runtime">
              {currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}
            </div>
            <div className="movie__releaseDate">
              {currentMovieDetail
                ? "Release date: " + currentMovieDetail.release_date
                : ""}
            </div>

            <div className="movie__genres">
              {currentMovieDetail && currentMovieDetail.genres
                ? currentMovieDetail.genres.map((genre) => (
                    <>
                      <span className="movie__genre" id={genre.id}>
                        {genre.name}
                      </span>
                    </>
                  ))
                : ""}
            </div>
            <div className="movie__overview">
              <h2>
                Overview
              </h2>
              <p className="movie-overview">{currentMovieDetail?currentMovieDetail.overview:""}</p>

            </div>
          </div>
        </div>
      </div>

      <div className="similar-container">
      {
        similarmovie.map((movie)=>{
          return(
           <div className="movie__similar" key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/original${
                similarmovie.backdrop_path ? similarmovie.backdrop_path : similarmovie.poster_path
              }`} alt="" />
            
           </div>
          )
        })
      }
      </div>
    </>
  );
}
export default Details;

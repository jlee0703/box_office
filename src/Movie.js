import React from "react";
import "./Movie.css";

function Movie({ rank, movieNm, openDt }) {
  return (
    <div class="movie">
      <h5 class="movie_ranking commom_m">순위 : {rank}</h5>
      <h4 class="movie_title commom_m">{movieNm}</h4>
      <h5 class="movie_openDate commom_m">개봉일 : {openDt}</h5>
    </div>
  );
}
export default Movie;

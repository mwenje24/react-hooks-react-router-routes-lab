import React from "react";
import { movies } from "../data";

function Movies() {

  let Items = movies.map((movie, index) => (
    <div key={index}>
      Title :{movie.title}<br/>
      Time :{movie.time}<br/>
      Genre:
      <ul>
        {movie.genres.map((genre, index) =>
         { return (
              <li key={index}>{genre}</li>
            );}
        )}
      </ul>
      <hr/>
    </div>
  ));

  return (
  <div>
    <h1>Movies Page</h1>
    {Items}
  </div>);
}

export default Movies;

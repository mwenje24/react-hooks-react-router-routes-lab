import React from "react";
import { directors } from "../data";

function Directors() {
  // console.log(directors)
  let Items = directors.map((director, index) => (
        <div key={index}>
          Name :{director.name}<br/>
          Movie:
          <ul>
            {director.movies.map((movie, index) =>
             { return (
                  <li key={index}>{movie}</li>
                );}
            )}
          </ul>
          <hr/>
        </div>
  ));
  return (
    <div>
      <h1>Directors Page</h1>
      {Items}
    </div>);
}

export default Directors;

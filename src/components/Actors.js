import React from "react";
import { actors } from "../data";

function Actors() {

  let Items = actors.map((actor, index) => (
    <div key={index}>
      Name :{actor.name}<br/>
      Movie:
      <ul>
        {actor.movies.map((movie, index) =>
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
      <h1>Actors Page</h1>
      {Items}
    </div>
  )
}

export default Actors;

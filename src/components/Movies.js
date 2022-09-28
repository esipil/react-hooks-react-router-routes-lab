import React from "react";
import { movies } from "../data";

function Movies() {

  const theMovies = movies.map(item => {

    const theGenres = item.genres.map(item => {
      return (
        <ul key={item}>
          <li key={item}>{item}</li>
        </ul>
      )
    })
    return ( 
    <div key={item.title}>
      {item.title}:
      {item.time} minutes
      <p>Genre</p>
      {theGenres}
    </div>)
  })
  return  (
  <> 
    <h1> Movies Page</h1>
    {theMovies}
  </>
  )

}

export default Movies;

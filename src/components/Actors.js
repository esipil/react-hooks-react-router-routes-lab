import React from "react";
import { actors } from "../data";

function Actors() {

  const theActors = actors.map(item => {

    const moviesActed = item.movies.map(item => {
      return (
        <ul key={item}>
          <li key={item}>{item}</li>
        </ul>
      )
    })
    return( 
      <div key={item.name}>
        {item.name}
        {moviesActed}
      </div>
    )
  })
  return (
    <>
    <h1>Actors Page</h1>
    {theActors}
    </>
  )
}



export default Actors;

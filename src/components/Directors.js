import React from "react";
import  {directors} from "../data";

function Directors() {

  const theDirectors = directors.map(item => {
    const theirWork = item.movies.map(item => {
      return (
        <ul key={item}>
          <li key={item}>{item}</li>
        </ul>
      )
    }) 
    return (
      <div key={item.name}>
        {item.name}
        {theirWork}
      </div>
    )
  })
  return (
  <>
    <h1>Directors Page</h1>
    {theDirectors}
  </>)
}

export default Directors;

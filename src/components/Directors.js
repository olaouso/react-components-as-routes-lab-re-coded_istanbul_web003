import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
     <h1>Directors Page</h1>
<<<<<<< HEAD
      {directors.map(director => (
        <div className="director">
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map(movie => <li>{movie}</li>)}
          </ul>
        </div>
=======
      {directors.map((director, index) => (
          <div key={index}>
              <h3>Name: {director.name}</h3>
              <p>Movies:</p>
              <ul>
                  {director.movies.map((movie, index) => (
                      <li key={index}>{movie}</li>
                  ))}
              </ul>
          </div>
>>>>>>> 9a74993fae46dbe37d308f4b67b0f5c79fdf003a
      ))}
    </div>
  );
}

export default Directors

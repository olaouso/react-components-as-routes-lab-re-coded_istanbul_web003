import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
    <h1>Actors Page</h1>
<<<<<<< HEAD
      {actors.map(actor => (
        <div className="actor">
          <h3>{actor.name}</h3>
          <ul>
            {actor.movies.map(movie => <li>{movie}</li>)}
          </ul>
        </div>
=======
      {actors.map((actor, index) => (
          <div key={index}>
              <h3>Name: {actor.name}</h3>
              <p>Movies:</p>
              <ul>
                  {actor.movies.map((movie, index) => (
                      <li key={index}>{movie}</li>
                  ))}
              </ul>
          </div>
>>>>>>> 9a74993fae46dbe37d308f4b67b0f5c79fdf003a
      ))}
      </div>
  );
};

export default Actors;

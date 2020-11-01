import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
<<<<<<< HEAD
            <h1>Movies Page</h1>
      {movies.map(movie => (
        <div className="movie">
          <h2>{movie.title}</h2>
          <h4>{movie.time}</h4>
          <ul>
            {movie.genres.map(genre => <li>{genre}</li>)}
          </ul>
        </div>
=======
        {/*{code here}*/}
         <h1>Movies Page</h1>
      {movies.map((movie, index) => (
          <div key={index}>
              <h3>Name: {movie.title}</h3>
              <p>Time: {movie.time}</p>
              <p>Genres:</p>
              <ul>
                  {movie.genres.map((genre, index) => (
                      <li key={index}>{genre}</li>
                  ))}
              </ul>
          </div>
>>>>>>> 9a74993fae46dbe37d308f4b67b0f5c79fdf003a
      ))}
    </div>
  );
};

export default Movies;

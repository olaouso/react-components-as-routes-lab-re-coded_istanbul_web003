import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
<<<<<<< HEAD
    <div className="navbar">
      <ul>
      <li><NavLink to="/" exact>Home</NavLink></li>
      <li><NavLink to="/movies" exact>Movies</NavLink></li>
      <li><NavLink to="/directors" exact>Directors</NavLink></li>
      <li><NavLink to="/actors" exact>Actors</NavLink></li>
      </ul>
=======
    <div>
      {/*{code here}*/}
      <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
      <NavLink to="/directors">Directors</NavLink>
      <NavLink to="/actors">Actors</NavLink>
>>>>>>> 9a74993fae46dbe37d308f4b67b0f5c79fdf003a
    </div>
  );
};

export default NavBar;

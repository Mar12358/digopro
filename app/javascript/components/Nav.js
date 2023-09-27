import './Nav.css';
import React from 'react';
import { NavLink } from 'react-router-dom';


function Nav() {
  return (
    <div className="TabListContainer">
      <img src="/images/planet.jpg" alt="My Image" className="logo" />
      <NavLink
          to="/lectures"
          className={({ isActive }) => (isActive ? 'StyledNavLink' : 'StyledNavLink active')}
        >
        Lectures
      </NavLink>
      <NavLink
          to="/reserve"
          className={({ isActive }) => (isActive ? 'StyledNavLink' : 'StyledNavLink active')}
        >
        Reserve form
      </NavLink>
      <NavLink
          to="/my_reservation"
          className={({ isActive }) => (isActive ? 'StyledNavLink' : 'StyledNavLink active')}
        >
        My Reservations
      </NavLink>
      <NavLink
          to="/add_lecture"
          className={({ isActive }) => (isActive ? 'StyledNavLink' : 'StyledNavLink active')}
        >
        Add Lecture
      </NavLink>
      <NavLink
          to="/delete_lecture"
          className={({ isActive }) => (isActive ? 'StyledNavLink' : 'StyledNavLink active')}
        >
        Delete Lecture
      </NavLink>

      <div className="social-group">
        <ul>
          <li class="social">
            <a href="https://twitter.com/edahigure">
              <img src="./images/twitter.png" alt="twitter icon"/> 
            </a> 
          </li> 
          <li class="social">
            <a href="https://www.facebook.com/profile.php?id=61551901379880&is_tour_dismissed=true">
              <img src="./images/facebook.png" alt="facebook icon"/> 
            </a> 
          </li> 

          <li class="social">
            <a href="https://www.flaticon.com/free-icons/google-plus" title="google plus icons">
              <img src="./images/google-plus-logo.png" alt="google icon"/> 
            </a> 
          </li> 

          <li class="social">
             <a href="https://www.flaticon.es/iconos-gratis/letra-v" title="letra v iconos">
              <img src="./images/vimeo.png" alt="vimeo icon"/> 
            </a> 
          </li>

          <li class="social">
             <a href="https://www.flaticon.es/iconos-gratis/letra-v" title="letra v iconos">
              <img src="./images/social.png" alt="pinterest icon"/> 
            </a> 
          </li> 
          
        </ul>
        <p className="tiny">  &copy 2023  Aprendes inc.  </p>

      </div>
    </div>
  );
}

export default Nav;
import './Nav.css';
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LectureService from '../Service/classApi';
import { setAllReservation } from '../redux/reservation/reservationReducer';
import showError from '../Ui/ErrorAlert';
import { setCurrentUser } from '../redux/user/userReducer';
import { setAllLecture } from '../redux/lecture/lectureReducer';
// import notify from '../Ui/SuccesAlert';

const Nav = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.currentUser);

  useEffect(() => {
    const getall = async () => {
      try {
        const response = await LectureService.getAllLectures();
        if (response) {
          dispatch(setAllLecture(response));
          // notify('Lectures loaded successfully');
        } else {
          showError('Something went wrong!, try again');
        }
      } catch (error) {
        showError('Request failed!', error);
      }
      try {
        const response = await LectureService.getCurrentUser();
        if (response) {
          localStorage.setItem('currentUser', response);
          dispatch(setCurrentUser(response));
        } else {
          showError('Something went wrong!, try again');
        }
      } catch (error) {
        showError('Request failed!', error);
      }

      try {
        const response = await LectureService.getReservation(currentUser);
        if (response && response.length > 0) {
          // Sort reservations in descending order based on the created_at date
          response.sort(
            (a, b) => new Date(b.created_at) - new Date(a.created_at),
          );
          dispatch(setAllReservation(response));
        } else {
          showError('No Reservation found');
        }
      } catch (error) {
        // showError('Request failed!', error);
      }
    };
    getall();
  }, [currentUser, dispatch]);

  return (
    <div className="TabListContainer">
      <img src="/images/planet.jpg" alt="My_Image" className="logo" />
      <NavLink
        to="/lectures"
        className={({ isActive }) => (isActive ? 'StyledNavLink' : 'StyledNavLink active')}
      >
        LECTURES
      </NavLink>
      <NavLink
        to="/reserve"
        className={({ isActive }) => (isActive ? 'StyledNavLink' : 'StyledNavLink active')}
      >
        RESERVE FORM
      </NavLink>
      <NavLink
        to="/my-reservations"
        className={({ isActive }) => (isActive ? 'StyledNavLink' : 'StyledNavLink active')}
      >
        MY RESERVATIONS
      </NavLink>
      <NavLink
        to="/add_lecture"
        className={({ isActive }) => (isActive ? 'StyledNavLink' : 'StyledNavLink active')}
      >
        ADD LECTURE
      </NavLink>
      <NavLink
        to="/delete_lecture"
        className={({ isActive }) => (isActive ? 'StyledNavLink' : 'StyledNavLink active')}
      >
        DELETE LECTURE
      </NavLink>

      <div className="social-group">
        <ul>
          <li className="social">
            <a href="https://twitter.com/edahigure">
              <img src="./images/twitter.png" alt="twitter icon" />
            </a>
          </li>
          <li className="social">
            <a href="https://www.facebook.com/profile.php?id=61551901379880&is_tour_dismissed=true">
              <img src="./images/facebook.png" alt="facebook icon" />
            </a>
          </li>

          <li className="social">
            <a
              href="https://www.flaticon.com/free-icons/google-plus"
              title="google plus icons"
            >
              <img src="./images/google-plus-logo.png" alt="google icon" />
            </a>
          </li>

          <li className="social">
            <a
              href="https://www.flaticon.es/iconos-gratis/letra-v"
              title="letra v iconos"
            >
              <img src="./images/vimeo.png" alt="vimeo icon" />
            </a>
          </li>

          <li className="social">
            <a
              href="https://www.flaticon.es/iconos-gratis/letra-v"
              title="letra v iconos"
            >
              <img src="./images/social.png" alt="pinterest icon" />
            </a>
          </li>
        </ul>
        <p className="tiny">
          {' '}
          {`${String.fromCodePoint(0x00a9)}`}
          {' '}
          2023 Aprendes inc.
          {' '}
        </p>
      </div>
    </div>
  );
};

export default Nav;

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

import planetImg from '../images/planet_desktop.jpg';
import facebookImg from '../images/facebook.png';
import googlePlusLogoImg from '../images/google-plus-logo.png';
import socialImg from '../images/social.png';
import twitterImg from '../images/twitter.png';
import vimeoImg from '../images/vimeo.png';
import HamburgerImg from '../images/Hamburger.png';

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
        const getUser = async () => {
          const url = 'http://localhost:3000/api/v1/users';
          return new Promise((resolve, reject) => {
            fetch(url)
              .then((res) => res.json())
              .then((userid) => {
                dispatch(setCurrentUser(userid));
                resolve(userid);
              }).catch((err) => {
                reject(err);
              });
          });
        };
        getUser();
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
    <div className="col-12 col-sm-3 col-xl-2 px-sm-2 px-0 bg-light d-flex sticky-top">
      <div className="white d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start px-3 pt-2 text-white">
        <div className="d-flex align-items-center pb-sm-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <span className="fs-5">
            <img src={planetImg} alt="planet" className="logo" />
            {' '}
          </span>
        </div>
        <ul className="nav nav-pills flex-sm-column flex-row flex-nowrap flex-shrink-1 flex-sm-grow-0 flex-grow-1 mb-sm-auto mb-0 justify-content-center align-items-center align-items-sm-start" id="menu">
          <li className="nav-item">
            <NavLink
              id="hide-1"
              to="/lectures"
              className={({ isActive }) => (isActive ? 'StyledNavLink' : 'StyledNavLink active')}
            >
              LECTURES
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              id="hide-1"
              to="/reserve"
              className={({ isActive }) => (isActive ? 'StyledNavLink' : 'StyledNavLink active')}
            >
              RESERVE FORM
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              id="hide-1"
              to="/my-reservations"
              className={({ isActive }) => (isActive ? 'StyledNavLink' : 'StyledNavLink active')}
            >
              RESERVATIONS
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              id="hide-1"
              to="/add_lecture"
              className={({ isActive }) => (isActive ? 'StyledNavLink' : 'StyledNavLink active')}
            >
              ADD LECTURE
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              id="hide-1"
              to="/delete_lecture"
              className={({ isActive }) => (isActive ? 'StyledNavLink' : 'StyledNavLink active')}
            >
              DELETE LECTURE
            </NavLink>
          </li>
        </ul>
        <div className="social-group">
          <ul>
            <li className="social">
              <a href="https://twitter.com/edahigure">
                <img src={twitterImg} alt="twitter icon" />
              </a>
            </li>
            <li className="social">
              <a href="https://www.facebook.com/profile.php?id=61551901379880&is_tour_dismissed=true">
                <img src={facebookImg} alt="facebook icon" />
              </a>
            </li>

            <li className="social">
              <a
                href="https://www.flaticon.com/free-icons/google-plus"
                title="google plus icons"
              >
                <img src={googlePlusLogoImg} alt="google icon" />
              </a>
            </li>

            <li className="social">
              <a
                href="https://www.flaticon.es/iconos-gratis/letra-v"
                title="letra v iconos"
              >
                <img src={vimeoImg} alt="vimeo icon" />
              </a>
            </li>

            <li className="social">
              <a
                href="https://www.flaticon.es/iconos-gratis/letra-v"
                title="letra v iconos"
              >
                <img src={socialImg} alt="pinterest icon" />
              </a>
            </li>
          </ul>
          <footer className="row bg-light py-4 mt-auto">
            <div className="col">
              <p className="tiny">
                {' '}
                {`${String.fromCodePoint(0x00a9)}`}
                {' '}
                2023 Aprendes inc.
                {' '}
              </p>
            </div>
          </footer>
        </div>

        <div className="dropdown py-sm-4 mt-sm-auto ms-auto ms-sm-0 flex-shrink-1">
          <div className=" d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={HamburgerImg} alt="HamburgerImg" width="60" height="60" />
          </div>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">

            <li className="dropdown-item">
              <NavLink
                to="/lectures"
              >
                LECTURES
              </NavLink>
            </li>

            <li className="dropdown-item">
              <NavLink
                to="/reserve"
              >
                RESERVE FORM
              </NavLink>
            </li>

            <li className="dropdown-item">
              <NavLink
                to="/my-reservations"
              >
                RESERVATIONS
              </NavLink>
            </li>

            <li className="dropdown-item">
              <NavLink
                to="/add_lecture"
              >
                ADD LECTURE
              </NavLink>
            </li>

            <li className="dropdown-item">
              <NavLink
                to="/delete_lecture"
              >
                DELETE LECTURE
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;

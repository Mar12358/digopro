import './Nav.css';
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import ProductService from '../Service/classApi';
import { setAllReservation } from '../redux/reservation/reservationReducer';
import showError from '../Ui/ErrorAlert';
import { setCurrentUser } from '../redux/user/userReducer';
import { setAllProduct } from '../redux/product/productReducer';

const Nav = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.currentUser);

  useEffect(() => {
    const getall = async () => {
      try {
        const response = await ProductService.getAllProducts();
        if (response) {
          dispatch(setAllProduct(response));
        } else {
          showError('Something went wrong!, try again');
        }
      } catch (error) {
        showError('Request failed!', error);
      }
      try {
        const response = await ProductService.getCurrentUser();
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
        const response = await ProductService.getReservation(currentUser);
        if (response) {
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
            <img src="/images/planet_desktop.jpg" alt="planet" className="logo" />
            {' '}
          </span>
        </div>
        <ul className="nav nav-pills flex-sm-column flex-row flex-nowrap flex-shrink-1 flex-sm-grow-0 flex-grow-1 mb-sm-auto mb-0 justify-content-center align-items-center align-items-sm-start" id="menu">
          <li className="nav-item">
            <NavLink
              id="hide-1"
              to="/pictures"
              className={({ isActive }) => (isActive ? 'StyledNavLink' : 'StyledNavLink active')}
            >
              PICTURES
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              id="hide-1"
              to="/products"
              className={({ isActive }) => (isActive ? 'StyledNavLink' : 'StyledNavLink active')}
            >
              PRODUCTS
            </NavLink>
          </li>

          {/* <li className="nav-item">
            <NavLink
              id="hide-1"
              to="/reserve"
              className={({ isActive }) => (isActive ? 'StyledNavLink' : 'StyledNavLink active')}
            >
              RESERVE FORM
            </NavLink>
          </li> */}

          <li className="nav-item">
            <NavLink
              id="hide-1"
              to="/about"
              className={({ isActive }) => (isActive ? 'StyledNavLink' : 'StyledNavLink active')}
            >
              ABOUT US
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              id="hide-1"
              to="/add_product"
              className={({ isActive }) => (isActive ? 'StyledNavLink' : 'StyledNavLink active')}
            >
              ADD PRODUCT ONLY ADMIN
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              id="hide-1"
              to="/delete_product"
              className={({ isActive }) => (isActive ? 'StyledNavLink' : 'StyledNavLink active')}
            >
              DELETE PRODUCT ONLY ADMIN
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              id="hide-1"
              to="/carts"
              className={({ isActive }) => (isActive ? 'StyledNavLink' : 'StyledNavLink active')}
            >
              CARTS ONLY ADMIN
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              id="hide-1"
              to="/users"
              className={({ isActive }) => (isActive ? 'StyledNavLink' : 'StyledNavLink active')}
            >
              USERS ONLY ADMIN
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              id="hide-1"
              to="/my-reservations"
              className={({ isActive }) => (isActive ? 'StyledNavLink' : 'StyledNavLink active')}
            >
              RESERVATIONS ONLY ADMIN
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              id="hide-1"
              to="/cart"
              className={({ isActive }) => (isActive ? 'StyledNavLink' : 'StyledNavLink active')}
            >
              CART
            </NavLink>
          </li>
        </ul>
        <div className="social-group">
          <ul>
            <li className="social">
              <a href="https://twitter.com/edahigure">
                <img src="/images/twitter.png" alt="twitter icon" />
              </a>
            </li>
            <li className="social">
              <a href="https://www.facebook.com/profile.php?id=61551901379880&is_tour_dismissed=true">
                <img src="/images/facebook.png" alt="facebook icon" />
              </a>
            </li>

            <li className="social">
              <a
                href="https://www.flaticon.com/free-icons/google-plus"
                title="google plus icons"
              >
                <img src="/images/google-plus-logo.png" alt="google icon" />
              </a>
            </li>

            <li className="social">
              <a
                href="https://www.flaticon.es/iconos-gratis/letra-v"
                title="letra v iconos"
              >
                <img src="/images/vimeo.png" alt="vimeo icon" />
              </a>
            </li>

            <li className="social">
              <a
                href="https://www.flaticon.es/iconos-gratis/letra-v"
                title="letra v iconos"
              >
                <img src="/images/social.png" alt="pinterest icon" />
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
            <img src="/images/Hamburger.png" alt="HamburgerImg" width="60" height="60" />
          </div>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">

            <li className="dropdown-item">
              <NavLink
                to="/pictures"
              >
                PICTURES
              </NavLink>
            </li>
            <li className="dropdown-item">
              <NavLink
                to="/products"
              >
                PRODUCTS
              </NavLink>
            </li>

            {/* <li className="dropdown-item">
              <NavLink
                to="/reserve"
              >
                RESERVE FORM
              </NavLink>
            </li> */}

            <li className="dropdown-item">
              <NavLink
                to="/about"
              >
                ABOUT US
              </NavLink>
            </li>

            <li className="dropdown-item">
              <NavLink
                to="/add_product"
              >
                ADD PRODUCT ONLY ADMIN
              </NavLink>
            </li>

            <li className="dropdown-item">
              <NavLink
                to="/delete_product"
              >
                DELETE PRODUCT ONLY ADMIN
              </NavLink>
            </li>

            <li className="dropdown-item">
              <NavLink
                to="/carts"
              >
                CARTS ONLY ADMIN
              </NavLink>
            </li>

            <li className="dropdown-item">
              <NavLink
                to="/users"
              >
                USERS ONLY ADMIN
              </NavLink>
            </li>
            <li className="dropdown-item">
              <NavLink
                to="/my-reservations"
              >
                RESERVATIONS ONLY ADMIN
              </NavLink>
            </li>
            <li className="dropdown-item">
              <NavLink
                to="/cart"
              >
                CART
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;

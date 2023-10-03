import React from 'react';
import './Details.css';
import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';
import configIcon from '../images/config.png';
import nextIcon from '../images/next_white.png';
import backIcon from '../images/back.png';
import discoverIcon from '../images/discover.png';
import arrowRight from '../images/arrow_right.png';

function Details() {
  const { currentLectureId } = useSelector((store) => store.currentLecture);
  const { allLecture } = useSelector((state) => state.lecture);

  const { id } = currentLectureId;

  const currentLecture = allLecture.filter((lecture) => lecture.id === id);

  const { description } = currentLecture[0];
  const { imageUrl } = currentLecture[0];
  const { name } = currentLecture[0];
  const { price } = currentLecture[0];
  const { webLink } = currentLecture[0];

  return (

    <div className="container-main-details">

      <div className="container-details">
        <img src={imageUrl} className="imageUrl" alt="next icon" />
        <div className="card">

          <div className="title">
            {name}
            {' '}
          </div>
          <p>
            id
            {id}
          </p>
          <div className="description">
            {description}
          </div>

          <div className="price Text-Style-4">
            <div>Price</div>
            {' '}
            <div>{price}</div>
          </div>

          <div className="web-link">
            <a href={webLink} target="_blank" rel="noreferrer">web link</a>
          </div>

          <div className="discover-more">
            <div>Discover more classes </div>
            <img src={arrowRight} className="arrowRight-icon" alt="arrowRight icon" />
          </div>

          <img src={discoverIcon} className="discover-icon" alt="discover icon" />

          <div className="next-button">
            <img src={configIcon} className="config-icon" alt="config icon" />
            <div className="color-white">Configure</div>

            <NavLink to="/reserve" className="color-white">
              Reserve
            </NavLink>

            <img src={nextIcon} className="next-icon" alt="next icon" />
          </div>
        </div>

      </div>

      <NavLink to="/lectures" className="back-button">
        <img src={backIcon} className="back-icon" alt="back icon" />
      </NavLink>

    </div>
  );
}

export default Details;

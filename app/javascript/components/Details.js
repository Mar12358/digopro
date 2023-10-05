import React from 'react';
import './Details.css';
import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';

import configIcon from '../Assets/config.png';
import nextIcon from '../Assets/next_white.png';
import backIcon from '../Assets/back.png';
import discoverIcon from '../Assets/discover.png';
import arrowRight from '../asseAssetsts/arrow_right.png';

const Details = () => {
  const { currentLectureId } = useSelector((store) => store.currentLecture);
  const { allLecture } = useSelector((state) => state.lecture);

  const currentLecture = allLecture.filter((lecture) => lecture.id === currentLectureId);
  const { description } = currentLecture[0];
  const { image_url: imageUrl } = currentLecture[0];
  const { name } = currentLecture[0];
  const { price } = currentLecture[0];
  const { web_link: webLink } = currentLecture[0];
  const { id } = currentLecture[0];
  return (
    <div className="container-details">
      <img src={imageUrl} className="imageUrl img-big" alt="next icon" />
      <div className="container-extra-1">
        <div className="card">

          <div className="container-extra-2">
            <img src={imageUrl} className="imageUrl img-small" alt="next icon" />

            <div className="container-extra-3">
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
            </div>
          </div>

          <div className="price Text-Style-4">
            <div>Price</div>
            {' '}
            <div>{price}</div>
          </div>

          <div className="web-link">
            <a href={webLink} target="_blank" rel="noreferrer">Visit our Web</a>
          </div>

          <div className="discover-more">
            <div>Discover more classes </div>
            <img src={arrowRight} className="arrowRight-icon" alt="arrowRight icon" />
          </div>

          <img src={discoverIcon} className="discover-icon" alt="discover icon" />

          <NavLink to="/reserve" className="color-white next-button">
            <img src={configIcon} className="config-icon" alt="config icon" />
            <div className="color-white">Reserve</div>
            <img src={nextIcon} className="next-icon" alt="next icon" />
          </NavLink>

        </div>

        <NavLink to="/lectures" className="color-white back-button">
          <img src={backIcon} className="back-icon" alt="back icon" />
        </NavLink>

      </div>
    </div>

  );
};

export default Details;

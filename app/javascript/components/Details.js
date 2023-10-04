import React from 'react';
import './Details.css';
import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';
import discoverIcon from '../images/discover.png';
import arrowRight from '../images/arrow_right.png';

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
            <a href={webLink} target="_blank" rel="noreferrer">Visit our Web</a>
          </div>

          <div className="discover-more">
            <div>Discover more classes </div>
            <img src={arrowRight} className="arrowRight-icon" alt="arrowRight icon" />
          </div>

          <img src={discoverIcon} className="discover-icon" alt="discover icon" />

          <div className="next-button">
            <NavLink to="/reserve" className="color-white">
              Reserve
            </NavLink>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Details;

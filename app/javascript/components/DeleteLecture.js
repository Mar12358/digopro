import React from 'react';
import PropTypes from 'prop-types';
import './DeleteLecture.css';

import LectureService from '../Service/classApi';
import showError from '../Ui/ErrorAlert';

import { useDispatch } from 'react-redux';
import { removeLecture, deleteItemAxios } from '../redux/messages/messagesSlice';



function DeleteLecture(props) {

  const handleDeleteLecture = async (reservationId) => {
  
    try {
      const response = await LectureService.removeLecture(reservationId);
      if (response.message) {
        dispatch(removeLecture({ id }));        
      } else {
        showError('Request failed!');
      }
    } catch (error) {
      showError(`${error}, Please try again`);
    }
  };

  const dispatch = useDispatch();
  const {
    id,
    name,
    imageUrl,
    description,
    webLink,
    price,
  } = props;
  return (
    <div className="Lesson-Panel">

      <div className="container-1">
        <ul className="book-data">
          <li className="lecture-id">
            ID
            {id}
          </li>
          <li className="title">{name}</li>
          <li>
            {' '}
            <a href={webLink} target="_blank" rel="noopener noreferrer">web link</a>
            {' '}
          </li>
        </ul>
      </div>

      <div className="container-2">

        <img src={imageUrl} alt="My_Image" className="logo-lecture" />

        <div className="container-3">
          {description}
        </div>

      </div>

      <div className="container-4">
        <span className="price-label Text-Style-7">
          Price
        </span>
        <span className="price Text-Style-4">
          {price}
        </span>
      </div>

      <div className="actions">
        <button
          type="submit"
          onClick={() => {
            dispatch(removeLecture({ id }));
            dispatch(deleteItemAxios({ id }));
          }}
        >
          Destroy
        </button>
        <button
          type="submit"
          onClick={() => {            
            handleDeleteLecture(id);
          }}
        >
          Remove
        </button>
      </div>

    </div>

  );
}

DeleteLecture.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  description: PropTypes.string,
  webLink: PropTypes.string,
  price: PropTypes.string,
};

DeleteLecture.defaultProps = {
  id: 'none',
  name: 'none',
  imageUrl: 'none',
  description: 'none',
  webLink: 'none',
  price: 'none',

};

export default DeleteLecture;

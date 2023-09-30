import React from 'react';
import PropTypes from 'prop-types';
import './DeleteLecture.css';
import LectureService from '../Service/classApi';
import showError from '../Ui/ErrorAlert';

import { useDispatch } from 'react-redux';
import {removeLecture } from '../redux/lecture/lectureReducer'

function DeleteLecture(props) {

  const dispatch = useDispatch();
  
  const handleDeleteLecture = async (lectureId) => {
  
    try {
      const response = await LectureService.removeLecture(lectureId);
      if (response.message) {
        dispatch(removeLecture(lectureId))
      } else {
        showError('Request failed!');
      }
    } catch (error) {
      showError(`${error}, Please try again`);
    }
  };
  
  const {
    id,
    name,
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
        </ul>
      </div>

      <div className="actions">
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
};

DeleteLecture.defaultProps = {
  id: 'none',
  name: 'none',
};

export default DeleteLecture;

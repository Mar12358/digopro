import React from 'react';
import PropTypes from 'prop-types';
import './DeleteLecture.css';
import LectureService from '../Service/classApi';
import showError from '../Ui/ErrorAlert';

function DeleteLecture(props) {
  const handleDeleteLecture = async (lectureId) => {
    // setLoading(true);
    try {
      const response = await LectureService.removeLecture(lectureId);
      if (response.message) {
        // Update the local state by filtering out the deleted lecture
        // setLoading(false);
      } else {
        showError('Request failed!');
        // setLoading(false);
      }
    } catch (error) {
      showError(`${error}, Please try again`);
      // setLoading(false);
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

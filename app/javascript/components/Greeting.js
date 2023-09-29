import React from 'react';
import PropTypes from 'prop-types';
import './Greeting.css'

import { useDispatch } from 'react-redux';
import { removeLecture, deleteItemAxios } from '../redux/messages/messagesSlice';



function Greeting(props) {
  const dispatch = useDispatch();
  const {
    id,
    name,
    image_url,
    description,
    web_link,
    price,
  } = props;
  return (
    <div className="Lesson-Panel">

      <div className="container-1">
        <ul className="book-data">
          <li className="lecture-id">ID{id}</li>
          <li className="title">{name}</li>
          <li> <a href={web_link} target="_blank" rel="noopener noreferrer">web link</a> </li>
        </ul>
      </div>

      <div className="container-2">
    
        <img src={image_url} alt="My_Image" className="logo-lecture"/>

        <div className="container-3">
          {description}
        </div>

      </div>

      <div className="container-4">
        <span className="Current-Chapter Text-Style-7">
          Price
        </span>
        <span className="Current-Lesson Text-Style-4">
           {price}
        </span>
      </div>

      <div className="actions">
        <button
          type="submit"
          onClick={() => {            
            console.log('id',id);
            dispatch(removeLecture({ id }));
            dispatch(deleteItemAxios({ id }));
          }}
        >
          Remove
        </button> 
      </div>
  </div>
     
  );
}

Greeting.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  image_url: PropTypes.string,
};

Greeting.defaultProps = {
  id: 'none',
  name: 'none',
  image_url: 'none',
};

export default Greeting;

import React from 'react';
import { useSelector } from 'react-redux';
import DeleteLecture from '../components/DeleteLecture';
import './Greetings.css';

import { useDispatch } from 'react-redux';
import {  useEffect } from 'react';

import {fetchMessages } from '../redux/lecture/lectureReducer'

export default function Greetings() {
  const dispatch = useDispatch();
  const { allLecture, status } = useSelector((state) => state.lecture);

  let myLectures = [];


  for (let i = 0; i < allLecture.length; i += 1) {
    const str = `lecture${i}`;
    if (!allLecture[i].removed) {
      myLectures.push(<DeleteLecture
        key={str}
        id={allLecture[i].id}
        name={allLecture[i].name}
      />);
    }
  }
  
  useEffect(() => {
    dispatch(fetchMessages);
    myLectures = [];

    for (let i = 0; i < allLecture.length; i += 1) {
      const str = `lecture${i}`;
      if (!allLecture[i].removed) {
        myLectures.push(<DeleteLecture
          key={str}
          id={allLecture[i].id}
          name={allLecture[i].name}
        />);
      }
    }

  }, [status]);
  

  return (
    <div className="container">
      {myLectures}
    </div>
  );
}

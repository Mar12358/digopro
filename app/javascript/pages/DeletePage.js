import './DeletePage.css';

import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DeleteLecture from '../components/DeleteLecture';
import { fetchMessages } from '../redux/lecture/lectureReducer';

export default function DeletePage() {
  const dispatch = useDispatch();

  const { allLecture, status } = useSelector((state) => state.lecture);

  const [myLectures, setMyLectures] = useState([]);

  const myLecturesRef = useRef();

  useEffect(() => {
    dispatch(fetchMessages);
    myLecturesRef.current = [];

    for (let i = 0; i < allLecture.length; i += 1) {
      const str = `lecture${i}`;
      if (!allLecture[i].removed) {
        myLecturesRef.current.push(<DeleteLecture
          key={str}
          id={allLecture[i].id}
          name={allLecture[i].name}
        />);
      }
    }
    setMyLectures(myLecturesRef.current);
  }, [status, dispatch, allLecture]);

  return (
    <div className="container">
      {myLectures}
    </div>
  );
}

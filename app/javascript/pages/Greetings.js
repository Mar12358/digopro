import React from 'react';
import { useSelector } from 'react-redux';
import DeleteLecture from '../components/DeleteLecture';
import './Greetings.css';

export default function Greetings() {
  const { allLecture } = useSelector((state) => state.lecture);

  const myLectures = [];

  for (let i = 0; i < allLecture.length; i += 1) {
    const str = `lecture${i}`;
    if (!allLecture[i].removed) {
      myLectures.push(<DeleteLecture
        key={str}
        id={allLecture[i].id}
        name={allLecture[i].name}
        imageUrl={allLecture[i].imageUrl}
        description={allLecture[i].description}
        webLink={allLecture[i].webLink}
        price={allLecture[i].price}
      />);
    }
  }

  return (
    <div className="container">
      {myLectures}
    </div>
  );
}

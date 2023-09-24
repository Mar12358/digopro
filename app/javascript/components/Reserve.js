import React, { useEffect, useState } from 'react';
import LectureService from '../Service/classApi';
import '../stylesheets/reservation.css';
import Loader from '../Ui/Loader';
import notify from '../Ui/SuccesAlert';
import showError from '../Ui/ErrorAlert';

const Reserve = () => {
  const [startDate, setStartDate] = useState('');
  const [city, setCity] = useState('');
  const [lectures, setLectures] = useState([]);
  const [selectedLectureId, setSelectedLectureId] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getall = async () => {
      setLoading(true);
      try {
        const response = await LectureService.getAllLectures();
        if (response) {
          setLoading(false);
          notify('Lectures loaded successfully');
          setLectures(response);
        } else {
          showError('Something went wrong!, try again');
        }
      } catch (error) {
        showError('Request failed!', error);
        setLoading(false);
      }
    };
    getall();
  }, []);

  const handleAddReservation = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const obj = {
        lecture_id: selectedLectureId,
        date: startDate,
        city,
      };
      const userId = 1;
      const response = await LectureService.createReservation(userId, obj);
      if (response) {
        setLoading(false);
        notify('Reservation created successfully');
        setStartDate('');
        setCity('');
        setSelectedLectureId('');
      } else {
        showError('Something went wrong!, try again');
      }
    } catch (error) {
      showError('Request failed!', error);
    }
  };

  return (
    <div className="input-container">
      {loading ? (
        <Loader />
      ) : (
        <form className="reservation-form" onSubmit={handleAddReservation}>
          <div className="reservation-form">
            <select
              value={selectedLectureId}
              onChange={(e) => setSelectedLectureId(e.target.value)}
              className="select-option"
            >
              <option value="" className="option">
                Select a Lecture
              </option>
              {lectures.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="second-input">
            <input
              type="date"
              placeholder="Date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button type="submit" className="reservation">
              Make Reservation
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Reserve;

import React, { useEffect, useState } from "react";
import LectureService from "../Service/classApi";
import { useDispatch } from "react-redux";
import { setAllLectures } from "../redux/reservation/reservationReducer";
import "../stylesheets/reservation.css";

const Reserve = () => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState("");
  const [city, setCity] = useState("");
  const [lectures, setLectures] = useState([]);
  const [selectedLectureId, setSelectedLectureId] = useState("");

  useEffect(() => {
    const getall = async () => {
      try {
        const response = await LectureService.getAllLectures();
        if (response) {
          setLectures(response);
          dispatch(setAllLectures(response));
        } else {
          console.log("Request failed with status:", response.status);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getall();
  }, []);

  const handleAddReservation = async () => {
    try {
      const obj = {
        lecture_id: selectedLectureId,
        date: startDate,
        city: city
      };
      const userId = 1;

      const response = await LectureService.createReservation(userId, obj);

      if (response) {
        console.log(response);
      } else {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="input-container">
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
          <button type="submit" className="reservation">Make Reservation</button>
        </div>
      </form>
    </div>
  );
};

export default Reserve;

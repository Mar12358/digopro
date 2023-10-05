import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAllLecture } from '../redux/lecture/lectureReducer';
import { setLectureId } from '../redux/lecture/currentLectureSlice';
import LectureService from '../Service/classApi';
import '../stylesheets/reservation.css';
import Loader from '../Ui/Loader';
// import notify from '../Ui/SuccesAlert';
import showError from '../Ui/ErrorAlert';

const Reserve = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState('');
  const [city, setCity] = useState('');
  const [selectedLectureId, setSelectedLectureId] = useState('');
  const [loading, setLoading] = useState(false);
  const { currentUser } = useSelector((state) => state.currentUser);
  const { allLecture } = useSelector((state) => state.lecture);
  const { currentLectureId } = useSelector((state) => state.currentLecture);

  // Filter out lectures with removed set to true
  const filteredLectures = allLecture.filter((lecture) => !lecture.removed);

  useEffect(() => {
    const getall = async () => {
      setLoading(true);
      try {
        const response = await LectureService.getAllLectures();
        if (response) {
          setLoading(false);
          dispatch(setAllLecture(response));
        } else {
          showError('Something went wrong!, try again');
        }
      } catch (error) {
        showError('Request failed!', error);
        setLoading(false);
      }
    };
    getall();
    setSelectedLectureId(currentLectureId);
  }, [currentLectureId, dispatch]);

  const handleAddReservation = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const obj = {
        lecture_id: selectedLectureId,
        date: startDate,
        city,
      };
      const response = await LectureService.createReservation(currentUser, obj);
      if (response) {
        setLoading(false);
        // notify('Reservation created successfully');
        setStartDate('');
        setCity('');
        setSelectedLectureId('');
        dispatch(setLectureId(null));
        navigate('/my-reservations');
      } else {
        showError('Something went wrong!, try again');
        setLoading(false);
      }
    } catch (error) {
      showError('Request failed!', error);
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-slate-300 h-[100vh] pt-[5rem] px-[2%]">
      <h1 className="text-center text-3xl font-bold py-5">
        Make a Reservation
      </h1>

      {loading ? (
        <div className="flex justify-center items-center h-[100%] w-full">
          <Loader />
        </div>
      ) : (
        <form
          className=" flex flex-col justify-center items-center"
          onSubmit={handleAddReservation}
        >
          <div className=" flex flex-col md:mb-[3rem]">
            <select
              value={selectedLectureId}
              onChange={(e) => setSelectedLectureId(e.target.value)}
              className="px-[1rem] md:border md:h-[5rem] h-[3rem] rounded-[1rem] w-[55vw] sm:w-[55vw] lg:w-[40rem]"
              required
            >
              <option
                value=""
                className=" h-[2rem] w-[5rem]"
              >
                Select a Lecture
              </option>
              {filteredLectures.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className=" flex flex-col mt-[2.5rem] md:mt-[1px] justify-center items-center">
            <input
              type="date"
              placeholder="Date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="mb-[2.5rem] md:h-[5rem] h-[3rem] rounded-[1rem]  w-[55vw] sm:w-[55vw] md:mx-[5%] lg:w-[40rem]"
              required
            />
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className=" md:h-[5rem] h-[3rem]  rounded-[1rem] w-[55vw] sm:w-[55vw] md:mx-[5%] lg:w-[40rem] pb-[2rem]"
              required
            />
            <div className="mt-[0.5rem] flex justify-center w-[100%] md:w-[40rem]">
              <button className="form-button" type="submit" id="btn-submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default Reserve;

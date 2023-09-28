import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAllLecture } from '../redux/lecture/lectureReducer';
import { setCurrentUser } from '../redux/user/userReducer';
import LectureService from '../Service/classApi';
import '../stylesheets/reservation.css';
import Loader from '../Ui/Loader';
import notify from '../Ui/SuccesAlert';
import showError from '../Ui/ErrorAlert';
import BasicButtons from '../Ui/Button';

const Reserve = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState('');
  const [city, setCity] = useState('');
  const [lectures, setLectures] = useState([]);
  const [selectedLectureId, setSelectedLectureId] = useState('');
  const [loading, setLoading] = useState(false);
  const { currentUser } = useSelector((state) => state.currentUser);

  useEffect(() => {
    const getall = async () => {
      setLoading(true);
      try {
        const response = await LectureService.getAllLectures();
        if (response) {
          setLoading(false);
          setLectures(response);
          dispatch(setAllLecture(response));
        } else {
          showError('Something went wrong!, try again');
        }
      } catch (error) {
        showError('Request failed!', error);
        setLoading(false);
      }

      try {
        const response = await LectureService.getCurrentUser();
        if (response) {
          setLoading(false);
          dispatch(setCurrentUser(response));
          notify('Session loaded successfully');
        } else {
          showError('Something went wrong!, try again');
        }
      } catch (error) {
        showError('Request failed!', error);
        setLoading(false);
      }
    };
    getall();
  }, [dispatch]);

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
        // notify("Reservation created successfully");
        setStartDate('');
        setCity('');
        setSelectedLectureId('');
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
    <div className="w-full md:bg-slate-300 h-[100vh] pt-[5rem]">
      <h1 className="text-center text-3xl font-bold py-5">
        Make a Reservation
      </h1>

      {loading ? (
        <div className="flex justify-center items-center h-[100%]  w-full">
          <Loader />
        </div>
      ) : (
        <form
          className=" md:w-[100%] flex flex-col md:justify-center md:items-center"
          onSubmit={handleAddReservation}
        >
          <div className=" flex flex-col md:mb-[3rem]">
            <select
              value={selectedLectureId}
              onChange={(e) => setSelectedLectureId(e.target.value)}
              className="md:w-[50rem] px-[1rem] md:border md:h-[5rem] h-[3rem]  rounded-[1rem] w-full "
            >
              <option
                value=""
                className="md:pl-[5rem] md:w-[20rem] h-[2rem] w-[5rem]"
              >
                Select a Lecture
              </option>
              {lectures.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className=" flex flex-col mt-[2.5rem] md:mt-[1px]">
            <input
              type="date"
              placeholder="Date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="mb-[2.5rem] md:h-[5rem] h-[3rem] rounded-[1rem] pt- w-full md:w-[50rem]"
            />
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className=" md:h-[5rem] h-[3rem]  rounded-[1rem] w-full md:w-[50rem] pb-[2rem]"
            />
            <div className="mt-[0.5rem] flex justify-center md:justify-start">
              <BasicButtons submit={handleAddReservation} />
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default Reserve;

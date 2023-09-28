import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LectureService from '../Service/classApi';
import { setAllReservation } from '../redux/reservation/reservationReducer';
import Loader from '../Ui/Loader';
// import notify from '../Ui/SuccesAlert';
import showError from '../Ui/ErrorAlert';

const MyReservations = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { allLecture } = useSelector((state) => state.lecture);
  const { allReservation } = useSelector((state) => state.reservation);
  const { currentUser } = useSelector((state) => state.currentUser);

  useEffect(() => {
    const allReservation = async () => {
      setLoading(true);
      try {
        const response = await LectureService.getReservation(currentUser);
        if (response && response.length > 0) {
          // Sort reservations in descending order based on the created_at date
          response.sort(
            (a, b) => new Date(b.created_at) - new Date(a.created_at),
          );
          setLoading(false);
          dispatch(setAllReservation(response));
          // notify('Reservation loaded successfully');
        } else {
          setLoading(false);
          showError('No Reservation found');
        }
      } catch (error) {
        setLoading(false);
        // showError('Request failed!', error);
      }
    };
    allReservation();
  }, [currentUser, dispatch]);

  const handleDeleteReservation = () => {
    // Handle delete logic here <<<--- PATCH request removeReservation(id, currentUser)
  };

  return (
    <div className="flex flex-col justify-center items-center w-full bg-slate-300">
      <h2 className="text-center text-3xl font-bold py-[5rem]">
        Reservation List
      </h2>
      {loading ? (
        <div className="flex justify-center items-center h-[100%] w-full">
          <Loader />
        </div>
      ) : (
        <ul className="md:w-[50rem] justify-center items-center flex flex-col">
          {allReservation.map((reservation) => (
            <li
              key={reservation.id}
              className="px-[5rem] my-[1rem] rounded-[1rem] py-[2rem] border-y-4 hover:border-blue-500"
            >
              {/* Find the corresponding lecture by matching lecture_id */}
              {allLecture.map((lecture) => (lecture.id === reservation.lecture_id ? (
                <span className="pl-[1rem] text-2xl font-bold " key={lecture.id}>
                  {lecture.name}
                </span>
              ) : null))}
              <span className="md:text-sm md:pl-[1rem] pl-2px text-xs">{reservation.date}</span>
              <span className="md:text-sm md:pl-[1rem]  pl-2px text-xs">
                Location:
                {' '}
                {reservation.city}
              </span>
              <button
                onClick={() => handleDeleteReservation(reservation.id)}
                className="px-4 py-2 text-white bg-red-500 rounded-full hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
                type="button"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyReservations;

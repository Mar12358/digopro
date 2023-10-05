import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LectureService from '../Service/classApi';
import { setAllReservation } from '../redux/reservation/reservationReducer'; // Import deleteReservation action
import Loader from '../Ui/Loader';
import showError from '../Ui/ErrorAlert';

const MyReservations = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [localReservations, setLocalReservations] = useState([]); // Local state for reservations
  const { allLecture } = useSelector((state) => state.lecture);
  const { currentUser } = useSelector((state) => state.currentUser);

  const handleDeleteReservation = async (reservationId) => {
    setLoading(true);
    try {
      const response = await LectureService.removeReservation(
        currentUser,
        reservationId,
      );
      if (response.message) {
        // Update the local state by filtering out the deleted reservation
        setLocalReservations((prevReservations) => prevReservations.filter(
          (reservation) => reservation.id !== reservationId,
        ));
        setLoading(false);
      } else {
        showError('Request failed!');
        setLoading(false);
      }
    } catch (error) {
      showError(`${error}, Please try again`);
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchAllReservations = async () => {
      try {
        const response = await LectureService?.getReservation(currentUser);
        if (response && response?.length > 0) {
          // Sort reservations in descending order based on the created_at date
          response.sort(
            (a, b) => new Date(b.created_at) - new Date(a.created_at),
          );
          setLoading(false);
          dispatch(setAllReservation(response));
          // Update the local state with the fetched reservations
          setLocalReservations(response);
        } else {
          showError('No Reservation found');
        }
      } catch (error) {
        setLoading(false);
        showError(`${error}, Please try again`);
      }
    };
    fetchAllReservations();
  }, [currentUser, dispatch, loading]);

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
          {localReservations?.map((reservation) => {
            if (reservation.removed) {
              return null;
            }
            return (
              <li
                key={reservation.id}
                className="md:px-[5rem] my-[1rem] rounded-[1rem] py-[2rem] border-y-4 hover:border-blue-500"
              >
                {/* Find the corresponding lecture by matching lecture_id */}
                {allLecture.map((lecture) => (lecture?.id === reservation?.lecture_id ? (
                  <p
                    className="pl-[1rem] md:text-2xl text-1xl font-bold "
                    key={lecture?.id}
                  >
                    {lecture?.name}
                  </p>
                ) : null))}
                <p className="md:text-sm md:pl-[1rem] pl-[1rem] text-xs">
                  {reservation.date}
                </p>
                <p className="md:text-sm md:pl-[1rem]  pl-[1rem] text-xs">
                  Location:
                  {' '}
                  {reservation?.city}
                </p>
                <button
                  onClick={() => handleDeleteReservation(reservation?.id)}
                  className="px-4 py-2 text-white bg-red-500 rounded-full hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
                  type="button"
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default MyReservations;

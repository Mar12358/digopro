import { configureStore } from '@reduxjs/toolkit';
import reservationReducer from './reservation/reservationReducer';
import currentUserReducer from './user/userReducer';
import lectureReducer from './lecture/lectureReducer';
import currentLectureReducer from './lecture/currentLectureSlice';

const store = configureStore({
  reducer: {
    reservation: reservationReducer,
    currentUser: currentUserReducer,
    lecture: lectureReducer,
    currentLecture: currentLectureReducer,
  },
});

export default store;

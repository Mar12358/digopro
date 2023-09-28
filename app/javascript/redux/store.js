import { configureStore } from '@reduxjs/toolkit';
import reservationReducer from './reservation/reservationReducer';
import currentUserReducer from './user/userReducer';
import lectureReducer from './lecture/lectureReducer';

const store = configureStore({
  reducer: {
    reservation: reservationReducer,
    currentUser: currentUserReducer,
    lecture: lectureReducer,
  },
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import reservationReducer from './reservation/reservationReducer';
import lectureReducer from './lecture/lectureReducer';

const store = configureStore({
  reducer: {
    reservation: reservationReducer,
    lecture: lectureReducer,
  },
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import reservationReducer from './reservation/reservationReducer';

const store = configureStore({
  reducer: {
    reservation: reservationReducer,
  },
});

export default store;

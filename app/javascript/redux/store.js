import { configureStore } from '@reduxjs/toolkit';
import reservationReducer from './reservation/reservationReducer';
import currentUserReducer from './reservation/userReducer';

const store = configureStore({
  reducer: {
    reservation: reservationReducer,
    currentUser: currentUserReducer,
  },
});

export default store;

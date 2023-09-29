import { configureStore } from '@reduxjs/toolkit';
import reservationReducer from './reservation/reservationReducer';
import currentUserReducer from './user/userReducer';
import lectureReducer from './lecture/lectureReducer';
import messageReducer from './messages/messagesSlice';

const store = configureStore({
  reducer: {
    reservation: reservationReducer,
    currentUser: currentUserReducer,
    lecture: lectureReducer,
    message: messageReducer,
  },
});

export default store;

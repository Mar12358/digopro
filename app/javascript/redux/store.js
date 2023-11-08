import { configureStore } from '@reduxjs/toolkit';
import reservationReducer from './reservation/reservationReducer';
import currentUserReducer from './user/userReducer';
import productReducer from './product/productReducer';
import currentProductReducer from './product/currentProductSlice';

const store = configureStore({
  reducer: {
    reservation: reservationReducer,
    currentUser: currentUserReducer,
    product: productReducer,
    currentProduct: currentProductReducer,
  },
});

export default store;

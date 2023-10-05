import { createSlice } from '@reduxjs/toolkit';

const reservationSlice = createSlice({
  name: 'reservation',
  initialState: {
    allReservation: [],
  },
  reducers: {
    setAllReservation: (state, action) => ({
      ...state,
      allReservation: action.payload,
    }),
  },
});

export const { setAllReservation } = reservationSlice.actions;

export default reservationSlice.reducer;

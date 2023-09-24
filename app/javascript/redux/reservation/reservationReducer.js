import { createSlice } from '@reduxjs/toolkit';

const reservationSlice = createSlice({
  name: 'reservation',
  initialState: {
    allLectures: [],
  },
  reducers: {
    setAllLectures: (state, action) => ({
      ...state,
      allLectures: action.payload,
    }),
  },
});

export const { setAllLectures } = reservationSlice.actions;

export default reservationSlice.reducer;

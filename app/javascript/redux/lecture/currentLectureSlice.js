import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentLectureId: null,
  status: 'not loaded',
};
/* eslint no-param-reassign: "error" */

const currentLectureSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setLectureId: (state, action) => {
      const id = action.payload;
      const newState = {
        state,
        currentLectureId: id,
        status: 'loaded',
      };
      return newState;
    },
  },
});

export const { setLectureId } = currentLectureSlice.actions;
export default currentLectureSlice.reducer;

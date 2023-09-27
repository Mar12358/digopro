import { createSlice } from '@reduxjs/toolkit';

const lectureSlice = createSlice({
  name: 'lecture',
  initialState: {
    allLecture: [],
  },
  reducers: {
    setAllLecture: (state, action) => ({
      ...state,
      allLecture: action.payload,
    }),
  },
});

export const { setAllLecture } = lectureSlice.actions;

export default lectureSlice.reducer;

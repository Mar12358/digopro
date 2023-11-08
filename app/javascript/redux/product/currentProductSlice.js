import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentProductId: null,
  status: 'not loaded',
};
/* eslint no-param-reassign: "error" */

const currentProductSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setProductId: (state, action) => {
      const id = action.payload;
      const newState = {
        state,
        currentProductId: id,
        status: 'loaded',
      };
      return newState;
    },
  },
});

export const { setProductId } = currentProductSlice.actions;
export default currentProductSlice.reducer;

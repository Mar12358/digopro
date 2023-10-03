import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

const url = 'http://localhost:3000/api/v1/lectures';

export const fetchMessages = createAsyncThunk('messages/fetchMessages', async () => {
  try {
    const response = await axios.get(`${url}`);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

const lectureSlice = createSlice({
  name: 'lecture',
  initialState: {
    allLecture: [],
    status: 'no deleted',
  },
  reducers: {
    setAllLecture: (state, action) => ({
      ...state,
      allLecture: action.payload,
    }),
    removeLecture: (state, action) => {
      const id = action.payload;
      const newState = {
        state,
        allLecture: [...state.allLecture.filter((item) => item.id !== id)],
        status: 'deleted',
      };
      return newState;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchMessages.fulfilled, (state, action) => {
        // Assuming that the action.payload.data contains the fetched message data

        const newMessageList = [];
        Object.keys(action.payload).forEach((el) => {
          const newMessage = {
            id: action.payload[el].id,
            name: action.payload[el].name,
            imageUrl: action.payload[el].image_url,
            description: action.payload[el].description,
            webLink: action.payload[el].web_link,
            price: action.payload[el].price,
          };
          newMessageList.push(newMessage);
        });

        return { allLecture: newMessageList, status: 'succeeded' };
      })
      .addCase(fetchMessages.pending, (state) => ({ ...state, status: 'loading' }))
      .addCase(fetchMessages.rejected, (state, action) => ({ ...state, status: 'failed', error: action.error.message }));
  },
});

export const { setAllLecture, removeLecture } = lectureSlice.actions;

export default lectureSlice.reducer;

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

export const addItemAxios = createAsyncThunk('messages/addItemAxios', async (payload) => {
  const {
    name, imageUrl, description, webLink, price,
  } = payload;
  try {
    const resp = await axios.post(url, {
      name,
      image_url: imageUrl,
      description,
      web_link: webLink,
      price,
    });
    return resp.data;
  } catch (error) {
    return error.message;
  }
});

export const deleteItemAxios = createAsyncThunk('messages/deleteItemAxios', async (payload) => {
  const { id } = payload;
  try {
    const resp = await axios.delete(`${url}/${id}`);
    return resp.data;
  } catch (error) {
    return error.message;
  }
});

const initialState = {
  messageList: [],
  status: 'idle',
  error: null,
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    addLecture: (state, action) => {
      const newState = {
        state,
        messageList: [...state.messageList,
          { ...action.payload }],
      };
      return newState;
    },
    removeLecture: (state, action) => {
      const { id } = action.payload;
      const newState = {
        state,
        messageList: [...state.messageList.filter((item) => item.id !== id)],
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

        return { messageList: newMessageList, status: 'succeeded' };
      })
      .addCase(fetchMessages.pending, (state) => ({ ...state, status: 'loading' }))
      .addCase(fetchMessages.rejected, (state, action) => ({ ...state, status: 'failed', error: action.error.message }));
  },
});

export const { addLecture, removeLecture } = messageSlice.actions;
export default messageSlice.reducer;

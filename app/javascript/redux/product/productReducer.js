import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

const url = 'http://localhost:3000/api/v1/products';

export const fetchMessages = createAsyncThunk('messages/fetchMessages', async () => {
  try {
    const response = await axios.get(`${url}`);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

const productSlice = createSlice({
  name: 'product',
  initialState: {
    allProduct: [],
    status: 'no deleted',
  },
  reducers: {
    setAllProduct: (state, action) => ({
      ...state,
      allProduct: action.payload,
    }),
    removeProduct: (state, action) => {
      const id = action.payload;
      const newState = {
        state,
        allProduct: [...state.allProduct.filter((item) => item.id !== id)],
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

        return { allProduct: newMessageList, status: 'succeeded' };
      })
      .addCase(fetchMessages.pending, (state) => ({ ...state, status: 'loading' }))
      .addCase(fetchMessages.rejected, (state, action) => ({ ...state, status: 'failed', error: action.error.message }));
  },
});

export const { setAllProduct, removeProduct } = productSlice.actions;

export default productSlice.reducer;

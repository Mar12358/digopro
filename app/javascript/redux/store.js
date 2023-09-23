import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    message: 'message',
  },
});

export default store;

import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    // HERE ADD YOUR SLICE (don't forget to export using default .reducer)
  },
});

export default store;

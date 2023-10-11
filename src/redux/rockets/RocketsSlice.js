import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/rockets';

export const fetchRocketsAPI = createAsyncThunk(
  'rockets/fetchRocketsAPI',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  },
);

const initialState = {
  rocketsData: [],
  isLoading: true,
  error: null,
};

const RocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRocketsAPI.pending, (store) => {
        store.isLoading = true;
      })
      .addCase(fetchRocketsAPI.fulfilled, (store, action) => {
        console.log('action.payload: ', action.payload);
        store.rocketsData = action.payload;
        store.isLoading = false;
      })
      .addCase(fetchRocketsAPI.rejected, (store, action) => {
        store.error = action.payload;
        store.isLoading = false;
      });
  },
});

export default RocketsSlice.reducer;

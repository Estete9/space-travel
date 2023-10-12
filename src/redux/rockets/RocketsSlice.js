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
  reducers: {
    reserveRocket: (store, action) => {
      const rocketId = action.payload;
      const updatedList = store.rocketsData.map((rocket) => {
        if (rocket.rocket_id !== rocketId) {
          return rocket;
        }
        return { ...rocket, reserved: true };
      });
      store.rocketsData = updatedList;
    },
    cancelReservation: (store, action) => {
      const rocketId = action.payload;
      const updatedList = store.rocketsData.map((rocket) => {
        if (rocket.rocket_id !== rocketId) {
          return rocket;
        }
        return { ...rocket, reserved: false };
      });
      store.rocketsData = updatedList;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRocketsAPI.pending, (store) => {
        store.isLoading = true;
      })
      .addCase(fetchRocketsAPI.fulfilled, (store, action) => {
        store.rocketsData = action.payload;
        store.isLoading = false;
      })
      .addCase(fetchRocketsAPI.rejected, (store, action) => {
        store.error = action.payload;
        store.isLoading = false;
      });
  },
});

export const { reserveRocket, cancelReservation } = RocketsSlice.actions;

export default RocketsSlice.reducer;

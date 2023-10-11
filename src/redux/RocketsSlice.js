import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  state: 'this state',
};

const RocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase();
  },
});

export default RocketsSlice.reducer;

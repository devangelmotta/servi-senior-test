import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the WeekTemperature container
export const initialState: ContainerState = {
  loadDataAverage: false,
  successDataAverage: [],
  errorDataAverage: {}
};

const weekTemperatureSlice = createSlice({
  name: 'weekTemperature',
  initialState,
  reducers: {
    loadAverage(state, action: PayloadAction<any>) {
      state.loadDataAverage = true;
    },
    successAverage(state, action: PayloadAction<any>) {
      state.loadDataAverage = false;
      state.successDataAverage = action.payload;
    },
    errorAverage(state, action: PayloadAction<any>) {
      state.loadDataAverage = false;
      state.errorDataAverage = action.payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = weekTemperatureSlice;

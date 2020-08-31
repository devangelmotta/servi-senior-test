import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the Home container
export const initialState: ContainerState = {
  loading: false,
  error: 0,
  weatherData: [],
  weatherTheme: ""
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    loadWeatherData(state) {
      state.loading = true;
    },
    loadesWeatherData(state, action: PayloadAction<any>) {
      state.loading = false;
      state.weatherData = action.payload
    },
    loadedWeatherError(state, action: PayloadAction<any>) {
      state.loading = false;
      state.error = action.payload
    },
    setWeatherTheme(state, action: PayloadAction<any>) {
      state.weatherData = action.payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = homeSlice;



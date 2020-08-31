import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the WeatherShape container
export const initialState: ContainerState = {};

const weatherShapeSlice = createSlice({
  name: 'weatherShape',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions, reducer, name: sliceKey } = weatherShapeSlice;

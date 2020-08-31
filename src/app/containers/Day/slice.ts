import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the Day container
export const initialState: ContainerState = {
  loadDayData: false,
  loadedDayData: [],
};

const daySlice = createSlice({
  name: 'day',
  initialState,
  reducers: {
    loadDayData(state, action: PayloadAction<any>) {
      state.loadDayData = true;
    },
    loadedDayData(state, action: PayloadAction<any>) {
      state.loadDayData = false;
      state.loadedDayData = action.payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = daySlice;

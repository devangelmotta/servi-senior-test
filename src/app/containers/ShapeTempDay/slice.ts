import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the ShapeTempDay container
export const initialState: ContainerState = {
  loadShapeData: false,
  loadedShapeData: []
};

const shapeTempDaySlice = createSlice({
  name: 'shapeTempDay',
  initialState,
  reducers: {
    loadData(state, action: PayloadAction<any>) {
      state.loadShapeData = true;
    },
    loadedShapeData(state, action: PayloadAction<any>) {
      state.loadedShapeData = action.payload;
    },

  },
});

export const { actions, reducer, name: sliceKey } = shapeTempDaySlice;

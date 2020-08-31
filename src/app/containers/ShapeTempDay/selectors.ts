import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.shapeTempDay || initialState;

export const selectShapeTempDay = createSelector(
  [selectDomain],
  shapeTempDayState => shapeTempDayState,
);

import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) =>
  state.weekTemperature || initialState;

export const selectWeekTemperature = createSelector(
  [selectDomain],
  weekTemperatureState => weekTemperatureState,
);

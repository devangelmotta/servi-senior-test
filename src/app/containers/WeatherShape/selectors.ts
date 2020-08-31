import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.weatherShape || initialState;

export const selectWeatherShape = createSelector(
  [selectDomain],
  weatherShapeState => weatherShapeState,
);

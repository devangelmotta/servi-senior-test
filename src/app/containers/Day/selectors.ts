import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.day || initialState;

export const selectDay = createSelector([selectDomain], dayState => dayState);

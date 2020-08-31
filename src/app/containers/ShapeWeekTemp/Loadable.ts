/**
 *
 * Asynchronously loads the component for WeekTemperature
 *
 */

import { lazyLoad } from 'utils/loadable';

export const WeekTemperature = lazyLoad(
  () => import('./index'),
  module => module.WeekTemperature,
);

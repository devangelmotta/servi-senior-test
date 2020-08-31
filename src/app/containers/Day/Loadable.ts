/**
 *
 * Asynchronously loads the component for Day
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Day = lazyLoad(
  () => import('./index'),
  module => module.Day,
);

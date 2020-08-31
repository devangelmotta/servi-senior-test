/**
 *
 * Asynchronously loads the component for ShapeTempDay
 *
 */

import { lazyLoad } from 'utils/loadable';

export const ShapeTempDay = lazyLoad(
  () => import('./index'),
  module => module.ShapeTempDay,
);

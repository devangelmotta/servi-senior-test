/**
 *
 * ShapeTempDay
 *
 */

import React, { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';
import { selectShapeTempDay } from './selectors';
import { selectDay } from 'app/containers/Day/selectors'
import { shapeTempDaySaga } from './saga';

import { ParentSize } from '@vx/responsive';
import Row from 'app/components/Row';
import WeatherShape from 'app/containers/WeatherShape';

interface Props {}

export const ShapeTempDay = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: shapeTempDaySaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const shapeTempDay = useSelector(selectShapeTempDay);
  const { loadedDayData } = useSelector(selectDay);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  const useEffectOnMount = (effect: React.EffectCallback) => {
    useEffect(effect, []);
  };

  useEffect(() => {
    dispatch(actions.loadData(loadedDayData))
  });

  return (
    <Row width='100%' height='100px'>
      <ParentSize>
        {({ width, height }) => <WeatherShape feedData={shapeTempDay.loadedShapeData} width={width} height={height}/>}
      </ParentSize>
    </Row>
  );
});

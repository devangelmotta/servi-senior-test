/**
 *
 * WeekTemperature
 *
 */

import React, { memo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';
import { selectWeekTemperature } from './selectors';
import { weatherData } from 'app/containers/Home/selectors';
import weekTemperatureSaga from './saga';
import { ParentSize } from '@vx/responsive';

import Row from 'app/components/Row';
import WeatherShape from 'app/containers/WeatherShape';

interface Props {}

export const WeekTemperature = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: weekTemperatureSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const weekTemperature = useSelector(selectWeekTemperature);
  const weekStateData = useSelector(weatherData);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  useEffect(()=> {
    dispatch(actions.loadAverage(weekStateData.weatherData))
  }, [])
  return (
    <>
      <Helmet>
        <title>WeekTemperature</title>
        <meta name="description" content="Description of WeekTemperature" />
      </Helmet>
      <Row width='100%' height='100px'>
        <ParentSize>
        {({ width, height }) => <WeatherShape feedData={weekTemperature.successDataAverage} width={width} height={height}/>}
        </ParentSize>
      </Row>
    </>
  );
});

const Div = styled.div``;

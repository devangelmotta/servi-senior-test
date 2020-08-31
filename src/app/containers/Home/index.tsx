/**
 *
 * Home
 *
 */

import React, { memo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { weatherData } from './selectors';
import { actions } from './slice';
import homeSaga from './saga';
import { DayCard } from './sections/DayItem';
import Row from 'app/components/Row';
import Column from 'app/components/Column';
import { Link } from 'app/components/Link';
import Text from 'app/components/Text'
import { WeekTemperature } from 'app/containers/ShapeWeekTemp'

import { ErrorBoundary} from 'app/containers/BoundaryError';
import { daysOfWeek } from 'utils/weatherUtils';

interface Props {}

export const Home = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: homeSaga });

  const home = useSelector(weatherData);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const useEffectOnMount = (effect: React.EffectCallback) => {
    useEffect(effect, []);
  };

  useEffectOnMount(() => {
    dispatch(actions.loadWeatherData());
  });

  const getDayIndexWeek = (item) => {
    let dayIndexWeek = new Date(item[0].dt_txt).getDay();
    return daysOfWeek[dayIndexWeek].toLowerCase();
   }

  return (
    <>
      <ErrorBoundary>
        <Helmet>
          <title>Home</title>
          <meta name="Weather Information" content="See all information week forecast" />
        </Helmet>

        <Column justifyContent='center' width='100%' height={`${window.innerHeight}px`}>
          <Column width='60%' justifyContent='flex-start'>
            <Text fontFamily="'Open Sans', sans-serif" fontSize='3rem' margin='40px 0' width='60%'>
                Quickly access the state of the weather in your city. Multilanguage, off-line and on the web.
            </Text>
          </Column>
         
          <Column justifyContent='center' width='fit-content'>
            <Row>
            {home.weatherData.map((item, i)=>(
                <Link to={`/${getDayIndexWeek(item)}`} key={i}>
                  <DayCard forecastDay={item}/>
                </Link>
              ))}
            </Row>
            <Column margin='10px 0'>
              <WeekTemperature />
            </Column>
          </Column>
        </Column>
      </ErrorBoundary>
    </>
  );
});



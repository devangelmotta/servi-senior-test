/**
 *
 * Day
 *
 */

import React, { memo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from './slice';
import { changeTheme } from 'styles/theme/slice';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectDay } from './selectors';
import { weatherData } from 'app/containers/Home/selectors';
import { daySaga } from './saga';
import { BinarySearchTree } from 'utils/BynaryTree'; 

import { ErrorBoundary } from 'app/containers/BoundaryError';
import { PrincipalInfo } from './sections/principal-information';
import { AdditionalData } from './sections/addictional-data';
import { ShapeTempDay } from 'app/containers/ShapeTempDay'
import Column from 'app/components/Column';
import Text from 'app/components/Text';

import { unixTimestamp, weatherType  } from 'utils/weatherUtils';
import { isEmpty } from 'utils/object-is-empty';
import { dayOfWeekPredicted } from 'lib';

interface Props {}

const bstTemp = new BinarySearchTree();
const bstDate = new BinarySearchTree();

export const Day = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: daySaga });

  let { dayOfWeek } = useParams();

  const { loadedDayData } = useSelector(selectDay);
  const { weatherData: weekData } = useSelector(weatherData);

  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const useEffectOnMount = (effect: React.EffectCallback) => {
    useEffect(effect, []);
};

loadedDayData.map((element)=>{
    bstTemp.add(element.main.temp);
    bstDate.add(new Date(element.dt_txt));
  })

  var minTempInfo: any = {};
  var maxTempInfo = {};
  var averageTempInfo = {};
  var minTemp = bstTemp.findMin();
  var maxTemp = bstTemp.findMax();
  var dateNearToNow: any = {}
  var timestamp: any = 0;

  dateNearToNow = bstDate.findMostClosed(new Date());
  timestamp = unixTimestamp(dateNearToNow);
  
  loadedDayData.map((item)=>{
    if(item.main.temp == minTemp){
      minTempInfo = item;
    }
    if(item.main.temp == maxTemp){
      maxTempInfo = item;
    }
    if(timestamp){
      if(item.dt === timestamp?.getTime()/1000){
        averageTempInfo = item;
      }
    }
  })

  const setTheme =(item) => {
    if(isEmpty(item)) return;
    let key = weatherType[item.weather[0].main].key;
    if(key){
        dispatch(changeTheme(key));
    }
  }
  useEffectOnMount(() => {
    setTheme(averageTempInfo);
    dispatch(actions.loadDayData({weekData, dayOfWeek}));
  });

  return (
    <Column 
      justifyContent='space-around' 
      width={`${window.innerWidth}px`} 
      height={`${window.innerHeight}px`}>
      <Helmet>
        <title>Weather Day</title>
        <meta name="description" content="Informatio of this day weather" />
      </Helmet>
      <ErrorBoundary>
        <Column width='60%' backgroundColor='#9099a1' borderRadius='15px'>
          <Text margin='40px 0' fontSize='2rem'>{dayOfWeekPredicted(averageTempInfo)}</Text>
          <PrincipalInfo minTempInfo={minTempInfo} 
            averageTempInfo= {averageTempInfo} 
            maxTempInfo={maxTempInfo}/>
          <AdditionalData averageTempInfo={averageTempInfo}/>
          <ShapeTempDay />
        </Column>
      </ErrorBoundary>
    </Column>
  );
});

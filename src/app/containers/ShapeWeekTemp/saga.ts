
import { put, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import {  WeekTemperatureErrorType } from './types';
import { isEmpty } from 'utils/object-is-empty';
import { kelvinToC } from 'utils/weatherUtils'

export function* getAverageTemp(params) {

  if(isEmpty(params.payload)) {
    return;
  }

  const data = params.payload;
  const averagePerDay: any[] = [];
  var currentDay: string = "";
  var tempAverage = 0;

  try {
    
    data.map((element)=>{
      currentDay = element[0].dt_txt;
      tempAverage = 0;
      element.forEach(item => {
        tempAverage += item.main.temp / element.length;
      });
      averagePerDay.push({date: currentDay, value: kelvinToC(tempAverage) })
    })

    yield put(actions.successAverage(averagePerDay));

  } catch (err) {
      yield put(actions.errorAverage(WeekTemperatureErrorType.UNEXPECTED_DATA));
  }
}

export default function* weekTemperatureSaga() {
  yield takeLatest(actions.loadAverage.type, getAverageTemp);
}





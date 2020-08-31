import { call, put, takeLatest } from 'redux-saga/effects';
import { request } from 'utils/request';
import { actions } from './slice';
import { WeatherErrorType } from './types';

export function* getWeatherData() {
  const requestURL = `http://api.openweathermap.org/data/2.5/forecast?q=Popayan&APPID=a5b77162dae21bb826566df4eb634a31`;
  var forecastDays: any[] = [];
  var arrayDayForecast: any[] = [];
  var currentDay: string = "";
  try {
    // Call our request helper (see 'utils/request')
    const data = yield call(request, requestURL);
    if (data?.list?.length > 0) {
      data.list.map((item, i)=>{
        var day = item.dt_txt.split(" "); 
        if(currentDay === "") { currentDay = day[0] }
        if(currentDay !== day[0]){
          currentDay = day[0];
          forecastDays.push(arrayDayForecast);
          arrayDayForecast = [];
        }
        arrayDayForecast.push(item);

      })
      yield put(actions.loadesWeatherData(forecastDays));
    } else {
      yield put(actions.loadedWeatherError(WeatherErrorType.RESPONSE_ERROR));
    }
  } catch (err) {
      console.log("Error ", err)
      yield put(actions.loadedWeatherError(WeatherErrorType.RESPONSE_ERROR));
  }
}

export default function* weatherDataSaga() {
  yield takeLatest(actions.loadWeatherData.type, getWeatherData);
}
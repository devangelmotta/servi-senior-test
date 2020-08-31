
import { put, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import { isEmpty } from 'utils/object-is-empty';
import { daysOfWeek } from 'utils/weatherUtils'
 
export function* getDayData(params) {

  if(isEmpty(params.payload)) {
    return;
  }

  try {
    var selectedItem: any[] = []
    const { weekData, dayOfWeek, } = params.payload;
    let captalizeNameDay = dayOfWeek[0].toUpperCase() + dayOfWeek.slice(1);
    const  dayIndexWeek = daysOfWeek.indexOf(captalizeNameDay);
    weekData.map((item)=>{
      item.map((element)=>{
        let currentDay = new Date(element.dt_txt).getDay()
        if(currentDay === dayIndexWeek) {
        console.log("index curr ", currentDay, " index dow ", dayIndexWeek)
        selectedItem = item;
      }
      })
    })

    yield put(actions.loadedDayData(selectedItem));
  } catch (err) {
    console.log(err);
  }
}

export function* daySaga() {
  yield takeLatest(actions.loadDayData.type, getDayData);
}

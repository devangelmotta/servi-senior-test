
import { put, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import { isEmpty } from 'utils/object-is-empty';
import { kelvinToC } from 'utils/weatherUtils';
 
export function* prepareDataShape(params) {

  if(isEmpty(params.payload)) {
    return;
  }

  try {
    const data = params.payload;
    var shappeableData: any[] = [];
    data.map((item )=>{
      shappeableData.push({
        date: item.dt_txt,
        value: kelvinToC(item.main.temp)
      })
    })
    yield put(actions.loadedShapeData(shappeableData));

  } catch (err) {
    console.log(err);
  }
}

export function* shapeTempDaySaga() {
  yield takeLatest(actions.loadData.type, prepareDataShape);
}

/* 
  Son 8 arrays, de cada uno sacamos la temperatura y la fecha, y la metemos a otro array. Fin.
*/
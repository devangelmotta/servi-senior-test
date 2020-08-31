import { isEmpty } from 'utils/object-is-empty';
import { daysOfWeek } from 'utils/weatherUtils';
export const dayOfWeekPredicted = (item) => { 
  if(isEmpty(item)) return;
  var day = new Date(item.dt_txt).getDay()
  return daysOfWeek[day];
}


// Week weather
export const localeTime = (item) => isEmpty(item) ? null : new Date(item.dt_txt).toLocaleTimeString();
export const getMostNearTemp = (item) => isEmpty(item) ? 0: item.main.temp;
// export const getMinTemp = () => bstTemp.findMin();
// export const getMaxTemp = () => bstTemp.findMax();
export const getMainWeather = (item) => isEmpty(item) ? "Undefined" : item.weather[0].main;
// export const getWeatherColor = () => weatherType[getMainWeather(nearestForecast)].color;

// Weather Day
export const time = (itemInfo) => isEmpty(itemInfo) ? null : new Date(itemInfo.dt_txt).toLocaleTimeString();
export const temp = (itemInfo) => isEmpty(itemInfo) ? null : itemInfo.main.temp;
export const mainWeather = (itemInfo) => isEmpty(itemInfo) ? null : itemInfo.weather[0].main;
export const mainDescription = (itemInfo) => isEmpty(itemInfo) ? null : itemInfo.weather[0].description;
export const tempFeelsLike = (itemInfo) => isEmpty(itemInfo) ? null : itemInfo.main.feels_like; 
export const humidity = (itemInfo) => isEmpty(itemInfo) ? null : itemInfo.main.humidity;
export const cloudiness = (itemInfo) => isEmpty(itemInfo) ? null : itemInfo.clouds.all;
  
export const pressure = (itemInfo) => isEmpty(itemInfo) ? null : itemInfo.main.pressure;
export const seaLevel = (itemInfo) => isEmpty(itemInfo) ? null : itemInfo.main.sea_level;
export const windSpeed = (itemInfo) => isEmpty(itemInfo) ? null : itemInfo.wind.speed;
export const windDirection = (itemInfo) => isEmpty(itemInfo) ? null : itemInfo.wind.deg;
export const probPrecipitation = (itemInfo) => isEmpty(itemInfo) ? null : itemInfo.pop;
export const visibility = (itemInfo) => isEmpty(itemInfo) ? null : itemInfo.visibility;
export const groundLevel = (itemInfo) => isEmpty(itemInfo) ? null : itemInfo.main.grnd_level;

// shared
export const weatherIcon = (item: any)=> isEmpty(item) ? "": `http://openweathermap.org/img/wn/${item.weather[0].icon}.png`;
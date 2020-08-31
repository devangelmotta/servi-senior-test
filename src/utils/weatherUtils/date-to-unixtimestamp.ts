export const unixTimestamp = (dateNearToNow) => {
  if(dateNearToNow>0){
  return new Date(Date.UTC(
    dateNearToNow.getFullYear(),
    dateNearToNow.getMonth(),
    dateNearToNow.getUTCDate(), 
    dateNearToNow.getHours(),
    dateNearToNow.getMinutes(),
    dateNearToNow.getSeconds()));
  }
}

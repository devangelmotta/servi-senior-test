/* --- STATE --- */
export interface WeekTemperatureState {
  loadDataAverage: boolean,
  successDataAverage: any[],
  errorDataAverage: any
}

export enum WeekTemperatureErrorType {
  OBJECT_NO_FOUND = 1,
  UNEXPECTED_DATA = 2,
  NOT_CONNECT = 3,
}

export type ContainerState = WeekTemperatureState;

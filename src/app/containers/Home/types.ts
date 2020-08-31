    /* --- STATE --- */
export interface HomeState {
  loading: boolean;
  error?: WeatherErrorType | null;
  weatherData: any[];
  weatherTheme: any;
}

/* Stack error */
export enum WeatherErrorType {
  RESPONSE_ERROR = 1,
  NOT_CONNECT = 2,
}

export type ContainerState = HomeState;


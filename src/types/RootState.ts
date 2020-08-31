// import { GithubRepoFormState } from 'app/containers/GithubRepoForm/types';
import { ThemeState } from 'styles/theme/types';
import { WeatherShapeState } from 'app/containers/WeatherShape/types';
import { HomeState } from 'app/containers/Home/types';
import { WeekTemperatureState } from 'app/containers/ShapeWeekTemp/types';
import { DayState } from 'app/containers/Day/types';
import { ShapeTempDayState } from 'app/containers/ShapeTempDay/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
  Properties are optional because they are injected when the components are mounted sometime in your application's life. 
  So, not available always
*/
export interface RootState {
  theme?: ThemeState;
  //githubRepoForm?: GithubRepoFormState;
  weatherShape?: WeatherShapeState;
  home?: HomeState;
  weekTemperature?: WeekTemperatureState;
  day?: DayState;
  shapeTempDay?: ShapeTempDayState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}

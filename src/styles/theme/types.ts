import { themes } from './themes';

export type ThemeKeyType = keyof typeof themes | 'clouds';

export interface ThemeState {
  selected: ThemeKeyType;
}

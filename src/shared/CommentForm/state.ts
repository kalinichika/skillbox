import { atom } from 'recoil';
export const valueTextState = atom({
  key: 'valueTextState', // unique ID (with respect to other atoms/selectors)
  default: 'Привет из Recoil!', // default value (aka initial value)
});

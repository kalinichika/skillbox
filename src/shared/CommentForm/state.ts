import { atom } from 'recoil';
export const valueTextState = atom({
  key: 'valueTextState',
  default: 'Привет из Recoil!', // default value (aka initial value)
});

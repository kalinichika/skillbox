import { Reducer } from 'redux';
import { initialState } from './initialState';
import { TypeState } from './typeState';
import { UPDATE_COMMENT, GET_TOKEN } from './const';

export const rootReducer: Reducer<TypeState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case UPDATE_COMMENT:
    case GET_TOKEN:
      return {
        ...state,
        [action.field]: action.payload.data,
      };
    default:
      return state;
  }
};

import { Reducer } from 'redux';
import { initialState, CommonState } from './initialState';
import { UPDATE_COMMENT, GET_TOKEN } from './const';

export const commonReducer: Reducer<CommonState> = (
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

import { Reducer } from 'redux';
import { initialState, UserState } from './initialState';
import {
  GET_USER_DATA,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_ERROR,
} from './const';
import {
  UserDataRequestAction,
  UserDataRequestActionError,
  UserDataRequestActionSuccess,
} from './actions';

type UserActions =
  | UserDataRequestAction
  | UserDataRequestActionError
  | UserDataRequestActionSuccess;

export const userReducer: Reducer<UserState, UserActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GET_USER_DATA_SUCCESS:
      return {
        ...state,
        data: { ...state.data, ...action.data },
        loading: false,
      };
    case GET_USER_DATA_ERROR:
      return {
        ...state,
        error: action.error || null,
        loading: false,
      };
    case GET_USER_DATA:
      return {
        data: initialState.data,
        error: null,
        loading: true,
      };
    default:
      return state;
  }
};

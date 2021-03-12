import { Reducer } from 'redux';
import { initialState, PostState } from './initialState';
import {
  GET_POST_DATA,
  GET_POST_DATA_SUCCESS,
  GET_POST_DATA_ERROR,
  SET_AFTER,
} from './const';
import {
  PostRequestAction,
  PostRequestActionError,
  PostRequestActionSuccess,
  SetAfterAction,
} from './actions';

type PostActions =
  | PostRequestAction
  | PostRequestActionError
  | PostRequestActionSuccess
  | SetAfterAction;

export const postReducer: Reducer<PostState, PostActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GET_POST_DATA_SUCCESS:
      return {
        ...state,
        data: [...state.data, ...action.data],
        loading: false,
      };
    case GET_POST_DATA_ERROR:
      return {
        ...state,
        error: action.error || null,
        loading: false,
      };
    case GET_POST_DATA:
      return {
        ...state,
        data: initialState.data,
        error: null,
        loading: true,
      };
    case SET_AFTER: {
      return {
        ...state,
        after: action.data,
      };
    }
    default:
      return state;
  }
};

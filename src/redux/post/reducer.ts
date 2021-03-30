import { Reducer } from 'redux';
import { initialState, PostState } from './initialState';
import {
  GET_POST_DATA,
  GET_POST_DATA_SUCCESS,
  GET_POST_DATA_ERROR,
} from './const';
import {
  PostRequestAction,
  PostRequestActionError,
  PostRequestActionSuccess,
} from './actions';

type PostActions =
  | PostRequestAction
  | PostRequestActionError
  | PostRequestActionSuccess;

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
        data: initialState.data,
        error: null,
        loading: true,
      };
    default:
      return state;
  }
};

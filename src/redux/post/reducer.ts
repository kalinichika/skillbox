import { Reducer } from 'redux';
import { initialState, PostState } from './initialState';
import {
  GET_POST_DATA,
  GET_POST_DATA_SUCCESS,
  GET_POST_DATA_ERROR,
  SET_AFTER,
  SET_LOAD_MORE,
  SET_OPENED_POST_DATA,
} from './const';
import {
  PostRequestAction,
  PostRequestActionError,
  PostRequestActionSuccess,
  SetAfterAction,
  SetLoadMoreAction,
  SetOpenedPostDataAction,
} from './actions';

type PostActions =
  | PostRequestAction
  | PostRequestActionError
  | PostRequestActionSuccess
  | SetAfterAction
  | SetLoadMoreAction
  | SetOpenedPostDataAction;

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
        error: null,
        loading: true,
      };
    case SET_AFTER: {
      return {
        ...state,
        after: action.data,
      };
    }
    case SET_LOAD_MORE: {
      return {
        ...state,
        loadMore: action.data
          ? state.loadMore
            ? state.loadMore + 1
            : 1
          : action.data,
      };
    }
    case SET_OPENED_POST_DATA: {
      return {
        ...state,
        opened: action.data,
      };
    }
    default:
      return state;
  }
};

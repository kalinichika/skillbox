import { ActionCreator, AnyAction } from 'redux';
import { UPDATE_COMMENT, GET_TOKEN } from './const';

export const updateComment: ActionCreator<AnyAction> = (value: string) => {
  return {
    type: UPDATE_COMMENT,
    field: 'commentText',
    payload: { data: value },
  };
};

export const setToken = (token: string) => {
  return {
    type: GET_TOKEN,
    field: 'token',
    payload: { data: token },
  };
};

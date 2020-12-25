import { Action, ActionCreator, AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { UserState } from '../user/initialState';
import { UPDATE_COMMENT, GET_TOKEN } from './const';
import { CommonState } from './initialState';
import axios from 'axios';

export const updateComment: ActionCreator<AnyAction> = (value: string) => {
  return {
    type: UPDATE_COMMENT,
    field: 'commentText',
    payload: { data: value },
  };
};

export const setToken: ActionCreator<AnyAction> = (token: string) => {
  return {
    type: GET_TOKEN,
    field: 'token',
    payload: { data: token },
  };
};

export const getToken = (
  token: string
): ThunkAction<
  void,
  { common: CommonState; user: UserState },
  unknown,
  Action<string>
> => (dispatch) => {
  console.log('getToken');
  axios
    .post(
      'https://www.reddit.com/api/v1/access_token',
      `grant_type=authorization_code&code=${token}&redirect_uri=http://localhost:3000/auth`,
      {
        auth: {
          username: 'JgKiK8iIy9px3g',
          password: 'AZM8u-wJSj256QrLk44inAdn65KXjQ',
        },
        headers: { 'Content-type': 'application/x-www-form-urlencoded' },
      }
    )
    .then(({ data }) => {
      console.log(data);
      dispatch(setToken(data['access_token']));
    })
    .catch(console.log);
};

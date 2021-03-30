import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { UserState } from './initialState';
import axios from 'axios';
import {
  GET_USER_DATA,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_ERROR,
} from './const';
import { CommonState } from '../common/initialState';

interface IUserData {
  name?: string;
  iconImg?: string;
}

export type UserDataRequestAction = {
  type: typeof GET_USER_DATA;
};
export const userDataRequest: ActionCreator<UserDataRequestAction> = () => {
  return {
    type: GET_USER_DATA,
  };
};

export type UserDataRequestActionSuccess = {
  type: typeof GET_USER_DATA_SUCCESS;
  data: IUserData;
};
export const userDataRequestSuccess: ActionCreator<UserDataRequestActionSuccess> = (
  data: IUserData
) => {
  return {
    type: GET_USER_DATA_SUCCESS,
    data,
  };
};

export type UserDataRequestActionError = {
  type: typeof GET_USER_DATA_ERROR;
  error: Error;
};
export const userDataRequestError: ActionCreator<UserDataRequestActionError> = (
  error: Error
) => {
  return {
    type: GET_USER_DATA_ERROR,
    error,
  };
};

export const userDataRequestAsync = (
  token: string
): ThunkAction<
  void,
  { common: CommonState; user: UserState },
  unknown,
  Action<string>
> => (dispatch) => {
  dispatch(userDataRequest());
  axios
    .get('https://oauth.reddit.com/api/v1/me', {
      headers: { Authorization: `bearer ${token}` },
    })
    .then((resp) => {
      const userData = resp.data;
      dispatch(
        userDataRequestSuccess({
          name: userData.name,
          iconImg: userData.icon_img,
        })
      );
    })
    .catch((error) => {
      console.log('ERROR IN userDataRequestAsync');
      console.log(error);
      dispatch(userDataRequestError(error));
    });
};

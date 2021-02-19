import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';
import {
  GET_POST_DATA,
  GET_POST_DATA_SUCCESS,
  GET_POST_DATA_ERROR,
} from './const';
import { CommonState } from '../common/initialState';
import { UserState } from '../user/initialState';

interface IPostData {
  id: string;
  url: string;
  title: string;
  time: Date;
  preview: string;
  karmaValue: number;
  commentsValue: number;
  author: {
    name: string;
    href: string;
    avatar: string;
  };
}

interface IPostContextData {
  data: {
    id: string;
    url: string;
    author: string;
    title: string;
    num_comments: number;
    ups: number;
    sr_detail: {
      icon_img: string;
      header_img: string;
      created_utc: number;
    };
  };
}

export type PostRequestAction = {
  type: typeof GET_POST_DATA;
};
export const postRequest: ActionCreator<PostRequestAction> = () => {
  return {
    type: GET_POST_DATA,
  };
};

export type PostRequestActionSuccess = {
  type: typeof GET_POST_DATA_SUCCESS;
  data: IPostData[];
};
export const postRequestSuccess: ActionCreator<PostRequestActionSuccess> = (
  data: IPostData[]
) => {
  return {
    type: GET_POST_DATA_SUCCESS,
    data,
  };
};

export type PostRequestActionError = {
  type: typeof GET_POST_DATA_ERROR;
  error: Error;
};
export const postRequestError: ActionCreator<PostRequestActionError> = (
  error: Error
) => {
  return {
    type: GET_POST_DATA_ERROR,
    error,
  };
};

export const getPostData = (
  token: string
): ThunkAction<
  void,
  { common: CommonState; user: UserState },
  unknown,
  Action<string>
> => (dispatch) => {
  dispatch(postRequest());

  axios
    .get('https://oauth.reddit.com/rising/', {
      headers: {
        'Content-type': `application/json`,
        Authorization: `bearer ${token}`,
      },
    })
    .then((resp) => {
      const formattedPostData = resp.data.data.children.map(
        ({ data }: IPostContextData) => {
          const {
            id = '',
            url = '',
            title = '',
            author = '',
            ups = 0,
            num_comments = 0,
            sr_detail = {
              icon_img: '',
              header_img: '',
              created_utc: 0,
            },
          } = data || {};
          return {
            id: id,
            url: url,
            title: title,
            time: new Date(new Date().getTime() - sr_detail.created_utc),
            preview: sr_detail.header_img,
            karmaValue: ups,
            commentValue: num_comments,
            author: {
              name: author,
              href: '#user-url',
              avatar: sr_detail.icon_img,
            },
          };
        }
      );
      dispatch(postRequestSuccess(formattedPostData));
    })
    .catch((error) => {
      console.log(error);
      dispatch(postRequestError(error));
    });
};

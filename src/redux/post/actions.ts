import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';
import {
  GET_POST_DATA,
  GET_POST_DATA_SUCCESS,
  GET_POST_DATA_ERROR,
  SET_AFTER,
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
    author_flair_text: string;
    created_utc: number;
    thumbnail: string;
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

export type SetAfterAction = {
  type: typeof SET_AFTER;
  data: string;
};
export const setAfter = (after: string) => {
  return {
    type: SET_AFTER,
    data: after,
  };
};

export const getPostData = ({
  token,
  after,
}: {
  token: string;
  after: string;
}): ThunkAction<
  void,
  { common: CommonState; user: UserState },
  unknown,
  Action<string>
> => (dispatch) => {
  dispatch(postRequest());

  axios
    .get('https://oauth.reddit.com/rising', {
      headers: {
        'Content-type': `application/json`,
        Authorization: `bearer ${token}`,
      },
      params: {
        limit: 10,
        after,
      },
    })
    .then(
      ({
        data: {
          data: { after, children },
        },
      }) => {
        console.log('get post data!!!!!!');
        const formattedPostData = children.map(({ data }: IPostContextData) => {
          const {
            id = '',
            url = '',
            title = '',
            author = '',
            ups = 0,
            num_comments = 0,
            created_utc = 0,
            thumbnail = '',
          } = data || {};

          dispatch(setAfter(after));

          return {
            id,
            url,
            title,
            time: new Date(new Date().getTime() - created_utc),
            preview: url,
            karmaValue: ups,
            commentValue: num_comments,
            author: {
              name: author,
              href: '#user-url',
              avatar: thumbnail,
            },
          };
        });
        dispatch(postRequestSuccess(formattedPostData));
      }
    )
    .catch((error) => {
      console.log(error);
      dispatch(postRequestError(error));
    });
};

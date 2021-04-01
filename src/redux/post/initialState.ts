import { now } from 'moment';

export interface IPostData {
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

export type PostState = {
  data: IPostData[];
  loading: boolean;
  error: null | Error | Object | String;
  after: string;
  loadMore: number | false;
  opened: IPostData;
};

const defaultData = {
  id: '',
  url: '',
  title: '',
  time: new Date(),
  preview: '',
  karmaValue: 0,
  commentsValue: 0,
  author: {
    name: '',
    href: '',
    avatar: '',
  },
};

export const initialState: PostState = {
  data: [],
  loading: false,
  error: null,
  after: '',
  loadMore: false,
  opened: defaultData,
};

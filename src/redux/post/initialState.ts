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

export type PostState = {
  data: IPostData[];
  loading: boolean;
  error: null | Error | Object | String;
  after: string;
};

export const initialState: PostState = {
  data: [],
  loading: false,
  error: null,
  after: '',
};

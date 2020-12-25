export type UserState = {
  data: {
    name: string;
    iconImg: string;
  };
  loading: boolean;
  error: null | Error | Object | String;
};

export const initialState: UserState = {
  data: { name: '', iconImg: '' },
  loading: false,
  error: null,
};

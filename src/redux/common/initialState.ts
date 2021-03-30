export type CommonState = {
  commentText: string;
  token: string;
};

export const initialState: CommonState = {
  commentText: 'Hello, Skillbox!',
  token: '',
};

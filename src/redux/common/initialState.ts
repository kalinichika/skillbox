export type CommonState = {
  commentText: string;
  token: string | undefined;
};

export const initialState: CommonState = {
  commentText: 'Hello, Skillbox!',
  token: undefined,
};

import React from 'react';

type CommentContextType = {
  value: string;
  onChange: (value: string) => void;
};

export const commentsListContext = React.createContext<CommentContextType>({
  value: '',
  onChange: () => {},
});

import React, { createContext } from 'react';
import { usePostData } from '../hooks/usePostData';

interface IPostContextData {
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
export const postContext = createContext<{
  contextData: IPostContextData[];
  loading: boolean;
}>({ contextData: [], loading: false });

export function PostContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <postContext.Provider value={usePostData()}>
      {children}
    </postContext.Provider>
  );
}

import React, { createContext } from 'react';
import { usePostData } from '../../hooks/usePostData';

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
export const postContext = createContext<IPostContextData[]>([]);

export function PostContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [data] = usePostData();
  return <postContext.Provider value={data}>{children}</postContext.Provider>;
}

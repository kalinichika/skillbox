import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostData } from '../redux/post/actions';

import { PostState } from '../redux/post/initialState';
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

export function usePostData() {
  const data = useSelector<{ post: PostState }, IPostData[]>(
    (state) => state.post.data
  );
  const loading = useSelector<{ post: PostState }, boolean>(
    (state) => state.post.loading
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostData());
  }, []);

  return { contextData: data, loading };
}

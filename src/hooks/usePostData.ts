import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isConditionalExpression } from 'typescript';
import { CommonState } from '../redux/common/initialState';
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

  const error = useSelector<{ post: PostState }, Object | String | null>(
    (state) => state.post.error
  );
  const token = useSelector<{ common: CommonState }, string | undefined>(
    (state) => state.common.token
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token || token === 'undefined' || token === '') return;
    dispatch(getPostData(token));
  }, [token]);

  return { contextData: data, loading, error };
}

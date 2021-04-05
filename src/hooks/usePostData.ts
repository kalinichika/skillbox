import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CommonState } from '../redux/common/initialState';
import { getPostData, setLoadMore } from '../redux/post/actions';

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
  const after = useSelector<{ post: PostState }, string>(
    (state) => state.post.after
  );

  const error = useSelector<{ post: PostState }, Object | String | null>(
    (state) => state.post.error
  );
  const token = useSelector<{ common: CommonState }, string | undefined>(
    (state) => state.common.token
  );
  const loadMore = useSelector<{ post: PostState }, number | false | undefined>(
    (state) => state.post.loadMore
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token || token === 'undefined' || token === '') return;
    dispatch(getPostData({ token: token, after: after }));
  }, [token]);

  useEffect(() => {
    if (
      loading ||
      data.length === 0 ||
      !token ||
      token === 'undefined' ||
      token === '' ||
      !loadMore
    )
      return;
    dispatch(getPostData({ token: token, after: after }));
  }, [loadMore]);

  return { data, loading, error };
}

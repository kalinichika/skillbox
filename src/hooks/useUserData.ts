import axios from 'axios';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userDataRequestAsync } from '../redux/user/actions';
import { CommonState } from '../redux/common/initialState';
import { UserState } from '../redux/user/initialState';

interface IUserData {
  name?: string;
  iconImg?: string;
}

export function useUserData() {
  const data = useSelector<{ user: UserState; common: CommonState }, IUserData>(
    (state) => state.user.data
  );
  const loading = useSelector<
    { user: UserState; common: CommonState },
    boolean
  >((state) => state.user.loading);

  const token = useSelector<{ user: UserState; common: CommonState }, string>(
    (state) => state.common.token
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (!token || token === 'undefined' || token === '') return;
    else dispatch(userDataRequestAsync(token));
  }, [token]);

  return { data, loading };
}

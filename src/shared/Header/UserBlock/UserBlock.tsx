import React, { useEffect } from 'react';
import { Icon } from '../../Icon';
import { Text, EColor } from '../../Text';
import styles from './UserBlock.css';
import { useUserData } from '../../../hooks/useUserData';
import { Loading } from '../../Loading';
import { setToken } from '../../../redux/common/actions';
import { useDispatch } from 'react-redux';

export function UserBlock() {
  const {
    data: { iconImg, name },
    loading,
  } = useUserData();
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.__token__) {
      dispatch(setToken(window.__token__));
    }
  }, []);

  return (
    <a
      href="https://www.reddit.com/api/v1/authorize?client_id=JgKiK8iIy9px3g&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity"
      className={styles.userBox}
    >
      <div className={styles.avatarBox}>
        {iconImg ? (
          <img src={iconImg} alt="user avatar" className={styles.avatarImage} />
        ) : (
          <Icon icon="avatar" size={28} />
        )}
      </div>

      <div className={styles.username}>
        {loading ? (
          <Loading />
        ) : (
          <Text size={16} color={name ? EColor.black : EColor.grey99}>
            {name || 'Аноним'}
          </Text>
        )}
      </div>
    </a>
  );
}

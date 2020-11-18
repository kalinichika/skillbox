import React from 'react';
import { Icon } from '../../Icon';
import { Text } from '../../Text';
import { EColor } from '../../Text';
import styles from './UserBlock.css';

interface IUserBlockProps {
  avatarSrc?: string;
  username?: string;
}

export function UserBlock({ avatarSrc, username }: IUserBlockProps) {
  return (
    <a
      href="https://www.reddit.com/api/v1/authorize?client_id=JgKiK8iIy9px3g&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity"
      className={styles.userBox}
    >
      <div className={styles.avatarBox}>
        {avatarSrc ? (
          <img
            src={avatarSrc}
            alt="user avatar"
            className={styles.avatarImage}
          />
        ) : (
          <Icon icon="avatar" size={28} />
        )}
      </div>

      <div className={styles.username}>
        <Text size={16} color={username ? EColor.black : EColor.grey99}>
          {username || 'Аноним'}
        </Text>
      </div>
    </a>
  );
}

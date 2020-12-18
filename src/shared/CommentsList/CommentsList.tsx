import React from 'react';
import { Comment } from '../Comment';
import styles from './commentsList.css';

export function CommentsList() {
  return (
    <div className={styles.commentsList}>
      <Comment commentsList={['Текст комментария текст комментария']} />
      <Comment />
      <Comment />
    </div>
  );
}

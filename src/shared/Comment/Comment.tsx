import React, { useState } from 'react';
import { CommentForm } from '../CommentForm';
import styles from './comment.css';

interface IComment {
  commentsList?: string[];
}

export function Comment({ commentsList }: IComment) {
  const [commentFormIsOpen, setCommentFormState] = useState(false);

  function changeHandlerCommentFormState() {
    setCommentFormState((prev) => !prev);
  }

  return (
    <div className={styles.commentBlock}>
      <div>
        Текст комментария Текст комментария Текст комментария Текст комментария
        Текст комментария Текст комментария Текст комментария Текст комментария
      </div>
      <div className={styles.buttonsBlock}>
        <button
          className={styles.button}
          onClick={changeHandlerCommentFormState}
        >
          Reply
        </button>
      </div>
      {commentFormIsOpen && <CommentForm type="reply" />}
      {commentsList && commentsList.length !== 0 && <Comment></Comment>}
    </div>
  );
}

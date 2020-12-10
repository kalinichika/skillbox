import React, { FormEvent, useRef, useEffect, useState } from 'react';
import styles from './commentForm.css';

interface ICommentForm {
  type?: string;
}

export function CommentForm({ type }: ICommentForm) {
  const ref = useRef<HTMLTextAreaElement>(null);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(ref.current?.value);
  }

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        ref={ref}
        className={styles.input}
        defaultValue={type === 'reply' ? 'Михаил Рогов, ' : undefined}
      />
      <div className={styles.buttonsBlock}>
        <button type="submit" className={styles.button}>
          {type === 'reply' ? 'Reply' : 'Comment'}
        </button>
      </div>
    </form>
  );
}

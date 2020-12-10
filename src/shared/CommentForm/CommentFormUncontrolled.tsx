import React, { FormEvent, useRef } from 'react';
import styles from './commentForm.css';

interface ICommentForm {
  buttonText: string;
}

export function CommentForm({ buttonText }: ICommentForm) {
  const ref = useRef<HTMLTextAreaElement>(null);
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(ref.current?.value);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea className={styles.input} ref={ref} />
      <div className={styles.buttonsBlock}>
        <button type="submit" className={styles.button}>
          {buttonText}
        </button>
      </div>
    </form>
  );
}

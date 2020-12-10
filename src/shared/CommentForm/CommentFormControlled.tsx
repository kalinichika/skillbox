import React, { ChangeEvent, FormEvent, useEffect } from 'react';
import styles from './commentForm.css';

interface ICommentForm {
  value: string;
  buttonText: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (event: FormEvent) => void;
}

export function CommentFormControlled({
  value,
  buttonText,
  onChange,
  onSubmit,
}: ICommentForm) {
  const ref = React.useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <textarea
        className={styles.input}
        value={value}
        onChange={onChange}
        ref={ref}
      />
      <div className={styles.buttonsBlock}>
        <button type="submit" className={styles.button}>
          {buttonText}
        </button>
      </div>
    </form>
  );
}

import React, {
  ChangeEvent,
  FormEvent,
  useContext,
  useEffect,
  useState,
} from 'react';
import { commentContext } from '../context/commentContext';
import styles from './commentForm.css';

interface ICommentForm {
  type?: string;
}

export function CommentForm({ type }: ICommentForm) {
  const context = type === 'reply' ? useState('') : useContext(commentContext);

  const [value, onChange] = Array.isArray(context)
    ? context
    : [context.value, context.onChange];

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(value);
  }

  const ref = React.useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    ref.current?.focus();
    if (type === 'reply') onChange('Михаил Рогов, ');
  }, []);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        className={styles.input}
        value={value}
        onChange={handleChange}
        ref={ref}
      />
      <div className={styles.buttonsBlock}>
        <button type="submit" className={styles.button}>
          {type === 'reply' ? 'Reply' : 'Comment'}
        </button>
      </div>
    </form>
  );
}

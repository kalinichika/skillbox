import React, { ChangeEvent, FormEvent, useContext, useState } from 'react';
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

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        className={styles.input}
        value={value}
        onChange={handleChange}
      />
      <div className={styles.buttonsBlock}>
        <button type="submit" className={styles.button}>
          {type === 'reply' ? 'Reply' : 'Comment'}
        </button>
      </div>
    </form>
  );
}

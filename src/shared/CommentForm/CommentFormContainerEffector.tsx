import React, { ChangeEvent, useEffect } from 'react';
import { CommentFormControlled } from './CommentFormControlled';
import { createEvent, createStore } from 'effector';
interface ICommentForm {
  type?: string;
}

import { useStore } from 'effector-react';

const updateComment = createEvent<string>();

const $comment = createStore('Hello from Effector').on(
  updateComment,
  (_, newValue) => newValue
);

export function CommentFormEffector({ type }: ICommentForm) {
  // const [value, setTextValue] = useRecoilState(valueTextState);
  const value = useStore($comment);

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    console.log(event.target.value);
    updateComment(event.target.value);
  }

  function handleSubmit() {
    console.log('Submit: ', value);
  }

  useEffect(() => {
    if (type === 'reply') updateComment('Михаил Рогов, ');
  }, []);

  return (
    <CommentFormControlled
      value={value}
      buttonText={type === 'reply' ? 'Reply' : 'Comment'}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}

import React, { ChangeEvent, useEffect } from 'react';
import { CommentFormControlled } from './CommentFormControlled';

import { useRecoilState } from 'recoil';
import { valueTextState } from './state';

interface ICommentForm {
  type?: string;
}

export function CommentForm({ type }: ICommentForm) {
  const [value, setTextValue] = useRecoilState(valueTextState);

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    console.log(setTextValue);
    setTextValue(event.target.value);
  }

  function handleSubmit() {
    console.log('Submit: ', value);
  }

  useEffect(() => {
    if (type === 'reply') setTextValue('Михаил Рогов, ');
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

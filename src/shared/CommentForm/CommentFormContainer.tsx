import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CommonState } from '../../redux/common/initialState';
import { updateComment } from '../../redux/common/actions';
import { CommentFormControlled } from './CommentFormControlled';

import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import { valueTextState } from './state';

interface ICommentForm {
  type?: string;
}

export function CommentForm({ type }: ICommentForm) {
  const [value, setTextValue] = useRecoilState(valueTextState);

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setTextValue((old) => {
      console.log(old, event.target.value);
      return event.target.value;
    });
  }

  function handleSubmit() {
    console.log('Submit: ', value);
  }

  // useEffect(() => {
  // if (type === 'reply') setTextValue('Михаил Рогов, ');
  // }, []);

  return (
    <CommentFormControlled
      value={valuetext}
      buttonText={type === 'reply' ? 'Reply' : 'Comment'}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}

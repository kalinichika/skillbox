import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CommonState } from '../../redux/common/initialState';
import { updateComment } from '../../redux/common/actions';
import { CommentFormControlled } from './CommentFormControlled';

interface ICommentForm {
  type?: string;
}

export function CommentForm({ type }: ICommentForm) {
  const dispatch = useDispatch();

  const [value, onChange] =
    type === 'reply'
      ? useState('')
      : [
          useSelector<{ common: CommonState }, string>(
            (state) => state.common.commentText
          ),
          (val: string) => {
            dispatch(updateComment(val));
          },
        ];

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    console.log('Submit: ', value);
    event.preventDefault();
  }

  useEffect(() => {
    if (type === 'reply') onChange('Михаил Рогов, ');
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

import React, { ChangeEvent, useEffect } from 'react';
import { CommentFormControlled } from './CommentFormControlled';
import { Provider, Subscribe, Container } from 'unstated-typescript';

interface ICommentForm {
  type?: string;
}

type ValueState = {
  value: string;
};
class UnstatedContainer extends Container<ValueState> {
  state = {
    value: 'Hello from Unstated!',
  };
  setValue(value: string) {
    this.setState({ value });
  }
}

export function CommentForm({ type }: ICommentForm) {
  function handleChange(value: any, event: ChangeEvent<HTMLTextAreaElement>) {
    value.setValue(event.target.value);
  }

  function handleSubmit(value: any) {
    console.log('Submit: ', value.state.value);
  }

  return (
    <Provider>
      <Subscribe to={[UnstatedContainer]}>
        {(value: any) => (
          <CommentFormControlled
            value={value.state.value}
            buttonText={type === 'reply' ? 'Reply' : 'Comment'}
            onChange={(event) => handleChange(value, event)}
            onSubmit={() => handleSubmit(value)}
          />
        )}
      </Subscribe>
    </Provider>
  );
}

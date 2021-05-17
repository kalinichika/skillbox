import React, { ChangeEvent, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';

import styles from './commentForm.css';

interface ICommentForm {
  value: string;
  buttonText: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: () => void;
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
  });

  return (
    <div className={styles.form}>
      <Formik
        initialValues={{ comment: value }}
        onSubmit={onSubmit}
        className={styles.form}
      >
        <Form>
          <label htmlFor="comment">Comment</label>
          <Field
            value={value}
            name="comment"
            type="text"
            onChange={onChange}
            innerRef={ref}
          />
          <div className={styles.buttonsBlock}>
            <button type="submit" className={styles.button}>
              {buttonText}
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

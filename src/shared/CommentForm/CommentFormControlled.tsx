import React, { ChangeEvent, FormEvent, useEffect } from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';

import styles from './commentForm.css';

interface ICommentForm {
  value: string;
  buttonText: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (value: string) => void;
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

  interface Values {
    comment: string;
  }

  return (
    <div className={styles.form}>
      <Formik
        initialValues={{ comment: value }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          onSubmit(values.comment);
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
        className={styles.form}
      >
        <Form>
          <label htmlFor="comment">Comment</label>
          <Field name="comment" type="text" onChange={onChange} />
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

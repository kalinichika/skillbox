import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './title.css';

interface IPropsTitle {
  title: string;
  url: string;
  id: string;
  setOpenedPostData: (openedPostId: string) => void;
}

export function Title({ title, url, id, setOpenedPostData }: IPropsTitle) {
  return (
    <h2 className={styles.title}>
      <Link
        to={`/posts/${id}`}
        className={styles.postLink}
        onClick={() => setOpenedPostData(id)}
      >
        {title}
      </Link>
    </h2>
  );
}

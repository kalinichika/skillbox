import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './title.css';

interface IPropsTitle {
  title: string;
  url: string;
  id: string;
}

export function Title({ title, url, id }: IPropsTitle) {
  return (
    <h2 className={styles.title}>
      <Link to={`/post/${id}`} className={styles.postLink}>
        {title}
      </Link>
    </h2>
  );
}

import React, { useState } from 'react';
import { Post } from '../../../../Post';
import styles from './title.css';

interface IPropsTitle {
  title: string;
  url: string;
}

export function Title({ title, url }: IPropsTitle) {
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <h2 className={styles.title}>
      <button
        className={styles.postLink}
        onClick={() => {
          setIsModalOpened(true);
        }}
      >
        {title}
      </button>

      {isModalOpened && (
        <Post
          title={title}
          text={
            'Not have to worry about money.\nIm tired of every decision I make revolving around money...\n"Can I afford it?"\n"What would I have to compromise?"\n"What happens is I mess up and cant afford it again?"\n"How long will it take to save?"\n"Do I have to skip food for several days again?"'
          }
          onClose={() => setIsModalOpened(false)}
        ></Post>
      )}
    </h2>
  );
}

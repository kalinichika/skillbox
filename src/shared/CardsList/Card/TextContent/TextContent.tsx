import React from 'react';
import styles from './textContent.css';

interface ITextContent {
  url: string,
  time: Date,
  title: string,
  author: {
    name: string,
    avatar: string,
    href: string,
  },
}

export function TextContent({author, time = new Date(), title, url}: ITextContent) {
  const {name, avatar, href} = author;
  return (
      <div className={styles.textContent}>
        <div className={styles.metaData}>
          <div className={styles.userLink}>
            <img 
              className={styles.avatar}
              src={avatar}
              alt='avatar'/>
            <a href={href} className={styles.userName}>
              {name} 
            </a>
          </div>
          <span className={styles.createdAt}>
            <span className={styles.publishedLabel}> опубликовано 
            </span>
            {time.toString()}
          </span>
        </div>
        <h2 className={styles.title}>
          <a href={url} className={styles.postLink}>
            {title}
          </a>
        </h2>
      </div>
  );
}

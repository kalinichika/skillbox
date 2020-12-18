import React from 'react';
import moment from 'moment';
import styles from './textContent.css';
import { Title } from './Title';

interface ITextContent {
  url: string;
  time: Date;
  title: string;
  author: {
    name: string;
    avatar: string;
    href: string;
  };
}

export function TextContent({
  author,
  time = new Date(),
  title,
  url,
}: ITextContent) {
  const { name, avatar, href } = author;
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img className={styles.avatar} src={avatar} alt="avatar" />
          <a href={href} className={styles.userName}>
            {name}
          </a>
        </div>
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>
            <span> published </span>
            {moment(time.toString()).fromNow()}
          </span>
          <span className={styles.publishedWithoutLabel}>
            {moment(time.toString()).format('DD MMMM YYYY, HH:mm')}
          </span>
        </span>
      </div>
      <Title title={title} url={url} />
    </div>
  );
}

import React from 'react';
import styles from './textContent.css';

export function TextContent() {
  return (
      <div className={styles.textContent}>
        <div className={styles.metaData}>
          <div className={styles.userLink}>
            <img className={styles.avatar}
            src='https://cdn.dribbble.com/users/24158/screenshots/3990796/batman.jpg'
            alt='avatar'/>
            <a href='#user-url' className={styles.userName}>
              Виктория Калинина 
            </a>
          </div>
          <span className={styles.createdAt}>
            <span className={styles.publishedLabel}> опубликовано </span>
            4 часа назад</span>
        </div>
        <h2 className={styles.title}>
          <a href='#post-url' className={styles.postLink}>
            Следует отметить, что новая модель организационной деятельности Следует отметить, что новая модель организационной деятельности 
          </a>
        </h2>
      </div>
  );
}

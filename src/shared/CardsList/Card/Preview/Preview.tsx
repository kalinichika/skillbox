import React from 'react';
import styles from './preview.css';

export function Preview() {
  return (
    <div className={styles.preview}>
      <img className={styles.previewImg} src="https://cdn.dribbble.com/users/1090020/screenshots/14413782/media/faea5fc85a5d10af253f830be5105781.jpeg" 
        />
    </div> 
  );
}

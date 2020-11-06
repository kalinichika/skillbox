import React from 'react';
import styles from './preview.css';

interface IPreview {
  preview: string
}

export function Preview({preview}: IPreview) {
  return (
    <div className={styles.preview}>
      <img className={styles.previewImg} src={preview} 
        />
    </div> 
  );
}

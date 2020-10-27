import React from 'react';
import styles from './controls.css';
import {SaveButton, ShareButton, ArrowButton, CommentsButton} from '../../../SVGButtons';

export function Controls() {
  return (

      <div className={styles.controls}>
        <div className={styles.karmaCounter}>
          <ArrowButton className={styles.up} />
          <span className={styles.karmaValue}>234</span>
          <ArrowButton className={styles.down}/>
        </div>

        <CommentsButton classNames={{button:styles.commentsButton, number:styles.commentsNumber}} commentsNumber={24}/>

        <div className={styles.actions}>
          <ShareButton className={styles.shareButton}/>
          <SaveButton className={styles.saveButton}/>
        </div>

      </div>

  );
}

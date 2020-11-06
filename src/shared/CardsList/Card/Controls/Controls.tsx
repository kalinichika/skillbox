import React from 'react';
import styles from './controls.css';
import {SaveButton, ShareButton, ArrowButton, CommentsButton} from '../../../SVGButtons';

interface IControls {
  karmaValue: number,
  setKarmaValue: (value: number) => void,
}

export function Controls({karmaValue, setKarmaValue}: IControls) {
  return (

      <div className={styles.controls}>
        <div className={styles.karmaCounter}>
          <ArrowButton className={styles.up} onClick={()=>setKarmaValue(karmaValue + 1)} />
          <span className={styles.karmaValue}>{karmaValue}</span>
          <ArrowButton className={styles.down} onClick={()=>setKarmaValue(karmaValue - 1)} />
        </div>

        <CommentsButton classNames={{button:styles.commentsButton, number:styles.commentsNumber}} commentsNumber={24}/>

        <div className={styles.actions}>
          <ShareButton className={styles.shareButton}/>
          <SaveButton className={styles.saveButton}/>
        </div>

      </div>

  );
}

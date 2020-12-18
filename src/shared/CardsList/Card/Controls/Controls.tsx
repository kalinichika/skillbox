import React from 'react';
import styles from './controls.css';
import { Icon } from '../../../Icon';

interface IControls {
  commentsValue: number;
  karmaValue: number;
  setKarmaValue: (value: number) => void;
}

export function Controls({
  karmaValue,
  setKarmaValue,
  commentsValue,
}: IControls) {
  return (
    <div className={styles.controls}>
      <div className={styles.karmaCounter}>
        <Icon
          icon="arrow"
          As="button"
          className={styles.up}
          onClick={() => setKarmaValue(karmaValue + 1)}
        />
        <span className={styles.karmaValue}>
          {karmaValue > 1000 ? Math.floor(karmaValue / 1000) + 'K' : karmaValue}
        </span>
        <Icon
          icon="arrow"
          As="button"
          className={styles.down}
          onClick={() => setKarmaValue(karmaValue - 1)}
        />
      </div>

      <Icon
        icon="comments"
        As="button"
        className={styles.commentsButton}
        counter={commentsValue}
      />

      <div className={styles.actions}>
        <Icon icon="share" As="button" className={styles.shareButton} />
        <Icon icon="save" As="button" className={styles.saveButton} />
      </div>
    </div>
  );
}

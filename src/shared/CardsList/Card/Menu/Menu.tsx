import React from 'react';
import styles from './menu.css';
import { MenuButton } from '../../../SVGButtons'

export function Menu() {
  return (
      <div className={styles.menu}>
        <MenuButton className={styles.menuButton}/>
      </div> 
  );
}

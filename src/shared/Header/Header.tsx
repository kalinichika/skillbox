import React from 'react';
import styles from './header.css';
import { SearchBlock } from './SearchBlock';
import { SortBlock } from './SortBlock';
import { UserBlock } from './UserBlock';
import { ThreadTitle } from './ThreadTitle';

export function Header() {
  return (
    <header className={styles.header}>
      <SearchBlock />
      <ThreadTitle />
      <SortBlock />
      <UserBlock />
      <div id="dropdown-bookmarks" />
    </header>
  );
}

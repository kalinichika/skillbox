import React from 'react';
import styles from './card.css';
import { TextContent } from './TextContent';
import { Preview } from './Preview';
import { Menu } from './Menu';
import { Controls } from './Controls';
import { Icon } from '../../../shared/Icon';

interface ICard {
  id: string;
  key: string;
  time: Date;
  url: string;
  title: string;
  preview: string;
  karmaValue: number;
  commentsValue: number;
  author: {
    name: string;
    avatar: string;
    href: string;
  };
  setKarmaValue: (id: string, value: number) => void;
  hiddenCard: (id: string) => void;
  changeBookmark: (id: string, type: 'add' | 'delete') => void;
  inBookmarks: boolean;
  openedMenuId: string;
  setOpenedMenuId: (id: string) => void;
}

export function Card({
  id,
  url,
  title,
  preview,
  time,
  author,
  karmaValue,
  commentsValue,
  setKarmaValue,
  hiddenCard,
  changeBookmark,
  inBookmarks,
  openedMenuId,
  setOpenedMenuId,
}: ICard) {
  return (
    <li className={styles.card} key={id}>
      {inBookmarks && (
        <Icon
          icon="bookmark"
          size={16}
          className={styles.bookmark}
          onClick={() => changeBookmark(id, 'delete')}
        />
      )}

      <TextContent author={author} title={title} time={time} url={url} />

      <Preview preview={preview} />

      <Menu
        setOpenedMenuId={setOpenedMenuId}
        openedMenuId={openedMenuId}
        hiddenCard={hiddenCard}
        addBookmark={(id: string) => changeBookmark(id, 'add')}
        cardId={id}
      />

      <Controls
        commentsValue={commentsValue}
        karmaValue={karmaValue}
        setKarmaValue={(value) => setKarmaValue(id, value)}
      />
    </li>
  );
}

import React from 'react';
import styles from './card.css';
import { TextContent } from './TextContent';
import { Preview } from './Preview';
import { Menu } from './Menu';
import { Controls } from './Controls';
import { Icon } from '../../../shared/Icon';

interface ICard {
  id: number;
  key: number;
  time: Date;
  url: string;
  title: string;
  preview: string;
  karmaValue: number;
  author: {
    name: string;
    avatar: string;
    href: string;
  };
  moveHandler: (id: number, text: string) => void;
  setKarmaValue: (id: number, value: number) => void;
  hiddenCard: (id: number) => void;
  changeBookmark: (id: number, type: 'add' | 'delete') => void;
  inBookmarks: boolean;
}

export function Card({
  id,
  url,
  title,
  preview,
  time,
  author,
  karmaValue,
  moveHandler,
  setKarmaValue,
  hiddenCard,
  changeBookmark,
  inBookmarks,
}: ICard) {
  const [background, setBackground] = React.useState('white');
  return (
    <li className={styles.card} key={id} style={{ background: background }}>
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
        setBackground={(color) => {
          setBackground(color);
        }}
        moveHandler={moveHandler}
        hiddenCard={hiddenCard}
        addBookmark={(id: number) => changeBookmark(id, 'add')}
        cardId={id}
      />

      <Controls
        karmaValue={karmaValue}
        setKarmaValue={(value) => setKarmaValue(id, value)}
      />
    </li>
  );
}

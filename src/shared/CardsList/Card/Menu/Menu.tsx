import React from 'react';
import styles from './menu.css';
import { Icon } from '../../../Icon';
import { Dropdown } from '../../../Dropdown';
import { GenericList } from '../../../GenericList';
import { merge } from '../../../../utils/js/merge';

const LIST = [
  { id: '0', text: 'Поднять' },
  { id: '1', text: 'Опустить' },
  { id: '2', text: 'В самый верх' },
  { id: '3', text: 'В самый низ' },
];

const LIST2 = [
  { id: '0', text: 'Скрыть', value: 'higgen', icon: 'block' },
  { id: '1', text: 'В закладки', value: 'bookmark', icon: 'bookmark' },
];

interface IMenu {
  cardId: string;
  moveHandler: (id: string, text: string) => void;
  hiddenCard: (id: string) => void;
  addBookmark: (id: string) => void;
  setOpenedMenuId: (id: string) => void;
  openedMenuId: string;
}

interface IItemDropdown {
  id: string;
  text: string;
  value?: string;
  icon?: string;
}
interface IListDropdown {
  [n: string]: IItemDropdown[];
}

export function Menu({
  moveHandler,
  hiddenCard,
  addBookmark,
  cardId,
  openedMenuId,
  setOpenedMenuId,
}: IMenu) {
  const listDropdown: IListDropdown = {
    Moved: LIST,
    Operations: LIST2,
  };

  const handleItemClick = (
    id: number | string,
    text: string,
    header: string,
    cardId: string
  ) => {
    if (header === 'Moved') {
      moveHandler(cardId, text);
    } else if (header === 'Operations') {
      if (text === LIST2[0].text) {
        hiddenCard(cardId);
      } else {
        addBookmark(cardId);
      }
    }
  };

  return (
    <div
      className={styles.menu}
      id={`dropdown-menu--${cardId}`}
      onClick={() => setOpenedMenuId(cardId)}
    >
      <Dropdown
        nodeId={`dropdown-menu--${cardId}`}
        button={
          <Icon
            As="button"
            icon="menu"
            size={20}
            className={styles.menuButton}
          />
        }
      >
        {cardId === openedMenuId &&
          Object.entries(listDropdown).map(([header, list]) => (
            <div key={header} className={styles.menuGroup}>
              <span className={styles.menuGroupHeader}>{header}</span>
              <GenericList
                header={header}
                list={list.map(
                  merge({
                    onClick: (id: string | number, text: string) =>
                      handleItemClick(id, text, header, cardId),
                    className: styles.menuItem,
                  })
                )}
              />
            </div>
          ))}
      </Dropdown>
    </div>
  );
}

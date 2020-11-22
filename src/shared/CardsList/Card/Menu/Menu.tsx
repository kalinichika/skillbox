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
  { id: '0', text: 'white', value: 'white' },
  { id: '1', text: 'grey-blue', value: 'rgb(190, 214, 250)' },
  { id: '2', text: 'light-mint', value: 'rgb(190, 250, 250)' },
  { id: '3', text: 'sweet-peach', value: 'rgb(250, 217, 190)' },
];

const LIST3 = [
  { id: '0', text: 'Скрыть', value: 'higgen', icon: 'block' },
  { id: '1', text: 'В закладки', value: 'bookmark', icon: 'bookmark' },
];

interface IMenu {
  cardId: string;
  setBackground: (text: string) => void;
  moveHandler: (id: string, text: string) => void;
  hiddenCard: (id: string) => void;
  addBookmark: (id: string) => void;
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
  setBackground,
  moveHandler,
  hiddenCard,
  addBookmark,
  cardId,
}: IMenu) {
  const listDropdown: IListDropdown = {
    Moved: LIST,
    'Background Card': LIST2,
    Operations: LIST3,
  };

  const handleItemClick = (
    id: number | string,
    text: string,
    header: string,
    cardId: string
  ) => {
    if (header === 'Moved') {
      moveHandler(cardId, text);
    } else if (header === 'Background Card') {
      const newBackground = listDropdown['Background Card'].find(
        (item) => item.text === text
      );
      setBackground(
        newBackground && newBackground.value ? newBackground.value : ''
      );
    } else if (header === 'Operations') {
      if (text === LIST3[0].text) {
        hiddenCard(cardId);
      } else {
        addBookmark(cardId);
      }
    }
  };

  return (
    <div className={styles.menu}>
      <Dropdown
        button={
          <Icon
            As="button"
            icon="menu"
            size={20}
            className={styles.menuButton}
          />
        }
      >
        {Object.entries(listDropdown).map(([header, list]) => (
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

import React from 'react';
import styles from './menu.css';
import { MenuButton } from '../../../SVGButtons'
import { Dropdown } from '../../../Dropdown';
import { GenericList } from '../../../GenericList';
import { generateId } from '../../../../utils/react/generateRandomIndex';
import { merge } from '../../../../utils/js/merge';

const LIST = [
  {id: '0', text: 'Поднять', value: ''},
  {id: '1', text: 'Опустить', value: ''},
  {id: '2', text: 'В самый верх', value: ''},
  {id: '3', text: 'В самый низ', value: ''},
];

const LIST2 = [
  {id: '0', text: 'white', value: 'white'},
  {id: '1', text: 'grey-blue', value: 'rgb(190, 214, 250)'},
  {id: '2', text: 'light-mint', value: 'rgb(190, 250, 250)'},
  {id: '3', text: 'sweet-peach', value: 'rgb(250, 217, 190)'},
];

interface IMenu {
  cardId: number,
  setBackground: (text: string) => void,
  moveHandler: (id: number, text: string) => void
}

export function Menu({setBackground, moveHandler, cardId}: IMenu) {
  
  const listDropdown = {"Moved": LIST, "Background Card": LIST2};

  const handleItemClick = (id: string, text: string, header: string, cardId: number) => {
    if (header === 'Moved') {
      moveHandler(cardId, text);
    }
    else if (header === 'Background Card') {
      const newBackground = listDropdown['Background Card'].find(item=>item.text===text);
      setBackground(newBackground ? newBackground.value : '');
    }
  }

  return (
    <div className={styles.menu}>
      <Dropdown button={<MenuButton className={styles.menuButton}/>}>
        {Object.entries(listDropdown).map(([header, list]) => (
          <div key={header} className={styles.menuGroup}>
            <span className={styles.menuGroupHeader}>{header}</span>
            <GenericList header={header} list={list.map(merge({
                onClick: (id: string, text: string) => handleItemClick(id, text, header, cardId), 
                className: styles.menuItem
              }))}/>
          </div>
        ))}
      </Dropdown>
    </div> 
  );
}

import React, { useContext, useEffect } from 'react';
import { Card } from './Card';
import { Icon } from '../Icon';
import { Dropdown } from '../Dropdown';
import { GenericList } from '../GenericList';
import classNames from 'classnames';
import styles from './cardslist.css';
import { usePostData } from '../../hooks/usePostData';

export function CardsList() {
  interface IPostData {
    id: string;
    url: string;
    title: string;
    time: Date;
    preview: string;
    karmaValue: number;
    commentsValue: number;
    author: {
      name: string;
      href: string;
      avatar: string;
    };
  }

  type TBookmarks = string[];
  interface IKarmaValues {
    [N: string]: number;
  }

  const { contextData, loading } = usePostData();

  const [data, setData] = React.useState<IPostData[]>(contextData);
  const [openedMenuId, setOpenedMenuId] = React.useState('');

  useEffect(() => {
    setData(contextData);
    contextData.forEach(({ id, karmaValue }) => setKarmaValue(id, karmaValue));
  }, [contextData]);

  const [bookmarks, setBookmarks] = React.useState<TBookmarks>([]);
  const [karmaValues, setKarmaValues] = React.useState<IKarmaValues>({});

  const setKarmaValue = (id: string, value: number) => {
    setKarmaValues((prevState) => ({ ...prevState, [id]: value }));
  };

  const moveHandler = (id: string, type: string) => {
    switch (type) {
      case 'В самый верх': {
        setData((prev) => [
          ...prev.filter((item) => item.id === id),
          ...prev.filter((item) => item.id !== id),
        ]);
        break;
      }
      case 'В самый низ': {
        setData((prev) => [
          ...prev.filter((item) => id !== item.id),
          ...prev.filter((item) => id === item.id),
        ]);
        break;
      }
      case 'Поднять': {
        const index = data.map((item) => item.id).indexOf(id);
        if (index > 0)
          setData((prev) => [
            ...prev.filter((item, i) => i < index - 1),
            prev[index],
            prev[index - 1],
            ...prev.filter((item, i) => i > index),
          ]);
        break;
      }
      case 'Опустить': {
        const index = data.map((item) => item.id).indexOf(id);
        if (index < data.length - 1)
          setData((prev) => [
            ...prev.filter((item, i) => i < index),
            prev[index + 1],
            prev[index],
            ...prev.filter((item, i) => i > index + 1),
          ]);
        break;
      }
    }
  };

  const hiddenCard = (id: string) => {
    setData((prev) => prev.filter((item) => item.id !== id));
  };

  const changeBookmark = (id: string, type: 'add' | 'delete') => {
    if (type === 'add') setBookmarks((prev) => [...prev, id]);
    else if (type === 'delete')
      setBookmarks((prev) => prev.filter((bookmarksId) => bookmarksId !== id));
  };

  type TBookmarksItem = {
    id: string;
    text: string;
    As: 'div';
  };
  const getBookmarksList = () => {
    let listData: TBookmarksItem[] = [];
    bookmarks.map((id) => {
      const findData = data.find((itemData) => itemData.id === id);
      if (findData)
        listData.push({
          id: findData.id.toString(),
          text: findData.title,
          As: 'div',
        });
    });
    return listData;
  };

  const classesBookmarksList = classNames(styles.bookmarksList);

  return (
    <>
      {bookmarks.length !== 0 && (
        <Dropdown
          nodeId="dropdown-bookmarks"
          button={
            <Icon
              icon="bookmark"
              size={20}
              counter={bookmarks.length}
              className={styles.bookmarks}
            />
          }
          childrenClassName={classesBookmarksList}
        >
          <GenericList list={getBookmarksList()} />
        </Dropdown>
      )}
      <ul className={styles.cardsList}>
        {data.map((dataCard: IPostData) => (
          <Card
            {...dataCard}
            key={dataCard.id}
            hiddenCard={hiddenCard}
            moveHandler={moveHandler}
            changeBookmark={changeBookmark}
            inBookmarks={bookmarks.includes(dataCard.id)}
            karmaValue={karmaValues[dataCard.id]}
            setKarmaValue={(id: string, value: number) =>
              setKarmaValue(id, value)
            }
            openedMenuId={openedMenuId}
            setOpenedMenuId={setOpenedMenuId}
          />
        ))}
      </ul>
    </>
  );
}

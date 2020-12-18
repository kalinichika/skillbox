import React, { useContext, useEffect } from 'react';
import { Card } from './Card';
import { Icon } from '../Icon';
import { Dropdown } from '../Dropdown';
import { GenericList } from '../GenericList';
import { postContext } from '../../context/postContext';
import classNames from 'classnames';
import styles from './cardslist.css';

export function CardsList() {
  // const defaultData = [
  //   {
  //     id: 0,
  //     time: new Date(),
  //     url: '#post-url',
  //     title: 'Как я учусь на платформе Skillbox?',
  //     preview:
  //       'https://cdn.dribbble.com/users/1090020/screenshots/13924809/media/cbf89f0d4c5c24575f491a43d23b919e.png',
  //     author: {
  //       name: 'Viktoriya Kalinina',
  //       href: '#user-url',
  //       avatar:
  //         'https://cdn.dribbble.com/users/1090020/screenshots/10586074/media/4a2e94eb47ed8eda1b5bea258b6759d8.png',
  //     },
  //   },
  //   {
  //     id: 1,
  //     time: new Date(),
  //     url: '#post-url',
  //     title:
  //       'Следует отметить, что новая модель организационной деятельности...',
  //     preview:
  //       'https://cdn.dribbble.com/users/1090020/screenshots/11669071/media/ba7888f13a6b889223b9f5b0f0e316f2.png',
  //     author: {
  //       name: 'Ivan Ivanov',
  //       href: '#user-url',
  //       avatar:
  //         'https://cdn.dribbble.com/users/24158/screenshots/3990796/batman.jpg',
  //     },
  //   },
  //   {
  //     id: 2,
  //     time: new Date(),
  //     url: '#post-url',
  //     title: 'Я понял, что необходимо рационально тратить время, избегая...',
  //     preview:
  //       'https://cdn.dribbble.com/users/1090020/screenshots/11952091/media/7e02a4d54b4f3790ceccfb6ce98edc3e.png',
  //     author: {
  //       name: 'Aleksandra Petrova',
  //       href: '#user-url',
  //       avatar:
  //         'https://cdn.dribbble.com/users/1090020/screenshots/12110878/media/957c8b83c8624399e54b630dedce2310.png',
  //     },
  //   },
  //   {
  //     id: 3,
  //     time: new Date(),
  //     url: '#post-url',
  //     title: 'Какой фильм посмотреть?',
  //     preview:
  //       'https://cdn.dribbble.com/users/1090020/screenshots/11906331/media/36124f3ac0a7a047d3bbc7be0baa846b.png',
  //     author: {
  //       name: 'Harry Potter',
  //       href: '#user-url',
  //       avatar:
  //         'https://cdn.dribbble.com/users/1090020/screenshots/11481390/media/9223685c90d17859298858b426fe2e7e.png',
  //     },
  //   },
  // ];
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

  const contextData = useContext<IPostData[]>(postContext);

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

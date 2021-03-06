import React, { useContext, useEffect, useRef, useState } from 'react';
import { Card } from './Card';
import { Icon } from '../Icon';
import { Dropdown } from '../Dropdown';
import { GenericList } from '../GenericList';
import classNames from 'classnames';
import styles from './cardslist.css';
import { usePostData } from '../../hooks/usePostData';
import {
  getPostData,
  setLoadMore,
  setOpenedPostData,
} from '../../redux/post/actions';
import { useDispatch, useSelector } from 'react-redux';
import { PostState } from '../../redux/post/initialState';

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
  type TState = {
    data: any | IPostData[];
    loading: boolean;
    error: null | Object | string;
  };
  type TBookmarksItem = {
    id: string;
    text: string;
    As: 'div';
  };

  const postData = usePostData();
  const [state, setState] = useState<TState>(postData);
  const [stateLoadMore, setStateLoadMore] = useState<number | false>(false);

  const [openedMenuId, setOpenedMenuId] = React.useState('');
  const [bookmarks, setBookmarks] = React.useState<TBookmarks>([]);
  const [karmaValues, setKarmaValues] = React.useState<IKarmaValues>({});
  const classesBookmarksList = classNames(styles.bookmarksList);
  const bottomOfList = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();

  const setOpenedPostDataFunc = (openedPostId: string) => {
    dispatch(
      setOpenedPostData(
        state.data.find(({ id }: { id: string }) => {
          return openedPostId === id;
        })
      )
    );
  };

  const setKarmaValue = (id: string, value: number) => {
    setKarmaValues((prevState) => ({ ...prevState, [id]: value }));
  };

  const hiddenCard = (id: string) => {
    setState((prev) => {
      return {
        ...state,
        data: prev.data.filter((item: any) => item.id !== id),
      };
    });
  };

  const changeBookmark = (id: string, type: 'add' | 'delete') => {
    if (type === 'add') setBookmarks((prev) => [...prev, id]);
    else if (type === 'delete')
      setBookmarks((prev) => prev.filter((bookmarksId) => bookmarksId !== id));
  };

  const getBookmarksList = () => {
    let listData: TBookmarksItem[] = [];
    bookmarks.map((id) => {
      const findData = state.data.find((itemData: any) => itemData.id === id);
      if (findData)
        listData.push({
          id: findData.id.toString(),
          text: findData.title,
          As: 'div',
        });
    });
    return listData;
  };
  const loadMore = useSelector<{ post: PostState }, number | false>(
    (state) => state.post.loadMore
  );

  useEffect(() => {
    setStateLoadMore(loadMore);
  }, [loadMore]);

  useEffect(() => {
    if (postData.data.length !== state.data.length) {
      setState(postData);
      state.data.forEach(
        ({ id, karmaValue }: { id: string; karmaValue: number }) =>
          setKarmaValue(id, karmaValue)
      );
    }
    if (postData.loading !== state.loading) {
      setState((state) => ({
        ...state,
        loading: postData.loading,
      }));
    }
    if (postData.error !== state.error) {
      setState((state) => ({
        ...state,
        error: postData.error,
      }));
    }
  }, [postData]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      () => {
        if (
          state.data.length !== '0' &&
          stateLoadMore !== undefined &&
          stateLoadMore < 3
        ) {
          if (!state.loading) dispatch(setLoadMore(true));
        }
      },
      { rootMargin: '10px' }
    );

    if (bottomOfList.current) {
      observer.observe(bottomOfList.current);
    }
    return () => {
      if (bottomOfList.current) {
        observer.unobserve(bottomOfList.current);
      }
    };
  }, [bottomOfList.current]);

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
        {state.data.map((dataCard: IPostData, index: number) => (
          <Card
            {...dataCard}
            key={dataCard.id + index}
            hiddenCard={hiddenCard}
            changeBookmark={changeBookmark}
            inBookmarks={bookmarks.includes(dataCard.id)}
            karmaValue={karmaValues[dataCard.id]}
            setKarmaValue={(id: string, value: number) =>
              setKarmaValue(id, value)
            }
            openedMenuId={openedMenuId}
            setOpenedMenuId={setOpenedMenuId}
            setOpenedPostData={setOpenedPostDataFunc}
          />
        ))}
      </ul>

      {loadMore < 3 && <div ref={bottomOfList} />}

      {(state.loading && <div className={styles.info}>Загрузка...</div>) ||
        (state.error && <div className={styles.error}>Ошибка</div>) ||
        (state.data.length === 0 && (
          <div className={styles.info}>Нет данных</div>
        ))}
      {state.data.length !== 0 &&
        !state.loading &&
        stateLoadMore !== undefined &&
        stateLoadMore > 2 && (
          <button
            className={styles.loadMore}
            onClick={() => {
              dispatch(setLoadMore(true));
            }}
          >
            Load More...
          </button>
        )}
    </>
  );
}

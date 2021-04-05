import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { CommentsList } from '../CommentsList';
import { CommentForm } from '../CommentForm';
import { Icon } from '../Icon';
import { Text } from '../Text';
import styles from './post.css';

interface IPropsPost {
  title: string;
  text: string;
  onClose: () => void;
}

export function Post({ title, text, onClose }: IPropsPost) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target))
        onClose();
    }
    document.addEventListener('click', handleClick);

    return () => document.removeEventListener('click', handleClick);
  }, []);
  const node = document.querySelector('#modal-root');
  if (!node) return null;

  return ReactDOM.createPortal(
    <div className={styles.postContainer} ref={ref}>
      <Text As={'h3'} size={20}>
        {title}
      </Text>
      <Icon
        As="button"
        icon="close"
        className={styles.close}
        size={16}
        onClick={onClose}
      />
      <Text size={14}>{text}</Text>
      <CommentForm />
      <CommentsList />
    </div>,
    node
  );
}

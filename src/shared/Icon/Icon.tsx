import React from 'react';
import styles from './icon.css';
import classNames from 'classnames';

interface IIcon {
  icon: string;
  As?: 'span' | 'button' | 'div';
  size?: 12 | 16 | 20 | 24 | 28;
  onClick?: any;
  counter?: number | string;
  className?: string;
}

const Noop = () => {};

export function Icon(props: IIcon) {
  const { As = 'button', icon, size = 16, onClick, className, counter } = props;
  const classes = classNames(
    { [styles[`s${size}`]]: size },
    { [`${className}`]: className }
  );
  return (
    <As className={classes} onClick={onClick ? onClick : Noop}>
      <svg>
        <use xlinkHref={`#${icon}`} />
      </svg>
      {counter ? <span>{counter}</span> : null}
    </As>
  );
}

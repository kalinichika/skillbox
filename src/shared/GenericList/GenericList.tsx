import React from 'react';
import { Icon, EIcon } from '../Icon';

interface IItem {
  id: number | string;
  text: string;
  icon?: string;
  value?: string;
  onClick?: (id: number | string, text: string) => void;
  className?: string;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
}

interface IGenericListProps {
  list: IItem[];
  header?: string;
  className?: string;
}
const Noop = () => {};

export function GenericList({ header, list, className }: IGenericListProps) {
  return (
    <div className={className ? className : ''}>
      {list.map(
        ({ As = 'div', text, value, icon, onClick, className, id, href }) => (
          <As
            key={header ? `${header}-${id}` : id}
            href={href}
            className={className}
            onClick={onClick ? () => onClick(id, text) : Noop}
            style={
              header && header === 'Background Card'
                ? { background: value }
                : {}
            }
          >
            {icon && EIcon.hasOwnProperty(icon) ? (
              <Icon icon={icon} size={16} />
            ) : null}
            {text}
          </As>
        )
      )}
    </div>
  );
}

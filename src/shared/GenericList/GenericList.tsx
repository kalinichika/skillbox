import React from 'react';

interface IItem {
  id: string;
  text: string;
  value?: string;
  onClick: (id: string, text: string) => void;
  className?: string;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
}

interface IGenericListProps {
  list: IItem[];
  header: string;
}

export function GenericList({ header, list }: IGenericListProps) {
  return (
    <>
      {list.map(({ As = 'div', text, value, onClick, className, id, href }) => (
        <As
          key={`${header}-${id}`}
          href={href}
          className={className}
          onClick={() => onClick(id, text)}
          style={header === 'Background Card' ? { background: value } : {}}
        >
          {text}
        </As>
      ))}
    </>
  );
}

import React from 'react';

interface IProps {
    className: string
}

function ArrowButton({className} : IProps) {
  return (
    <button className={className}>
      <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.5 0L0 10H19L9.5 0Z" fill="#C4C4C4" />
      </svg>
    </button>
  )
}

export {ArrowButton};
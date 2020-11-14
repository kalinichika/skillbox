import React from 'react';

interface IProps {
  className: string;
}

function SaveButton({ className }: IProps) {
  return (
    <button className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="11"
        height="8"
        viewBox="0 0 426.667 440"
        fill="none"
      >
        <path
          d="M42.667,85.333H0V384c0,23.573,19.093,42.667,42.667,42.667h298.667V384H42.667V85.333z"
          fill="white"
        />
        <path
          d="M384,0H128c-23.573,0-42.667,19.093-42.667,42.667v256c0,23.573,19.093,42.667,42.667,42.667h256 c23.573,0,42.667-19.093,42.667-42.667v-256C426.667,19.093,407.573,0,384,0z M362.667,192h-85.333v85.333h-42.667V192h-85.333 v-42.667h85.333V64h42.667v85.333h85.333V192z"
          fill="white"
        />
      </svg>
    </button>
  );
}

export { SaveButton };

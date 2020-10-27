import React from 'react';

interface IProps {
  classNames: {
    button: string,
    number: string
  },
  commentsNumber: number
}

function CommentsButton({classNames, commentsNumber} : IProps) {
  return (
    <button className={classNames.button}>
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 550 510" fill="none">
        <path d="M459,0H51C22.95,0,0,22.95,0,51v459l102-102h357c28.05,0,51-22.95,51-51V51C510,22.95,487.05,0,459,0z M408,306H102v-51 h306V306z M408,229.5H102v-51h306V229.5z M408,153H102v-51h306V153z" fill="#C4C4C4"/>
      </svg>
      <span className={classNames.number}>{commentsNumber}</span>
   </button>
  )
}

export {CommentsButton};
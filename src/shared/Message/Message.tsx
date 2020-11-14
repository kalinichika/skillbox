import React, { useState } from 'react';

interface IMessage {
  text: string;
  time: number;
}

export function Message({ text, time }: IMessage) {
  const [show, setShow] = useState(true);

  React.useEffect(() => {
    let interval = setTimeout(() => setShow(false), time);
    return clearInterval(interval);
  });

  return show && <div>{text}</div>;
}

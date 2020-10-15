import  React from 'react';

/* Number 5 */
function HomeComponent (props:{firstProp: string}) {
  return (
    <div>
      {props.firstProp}
    </div>
  )
}

type TMyType<T> = {
  // props: T extends React.ComponentType<T> ? React.ComponentType<T> : [];
}


interface IProprs {
  firstProp: string
}

const t = TMyType<typeof HomeComponent>;

console.log( );

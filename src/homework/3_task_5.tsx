import  React from 'react';

/* Number 5 */
function HomeComponent (props:{firstProp: string}) {
  return (
    <div>
      {props.firstProp}
    </div>
  )
}

function HomeComponent2 (props: IProprs) {
  return (
    <div>
      {props.firstProp}
    </div>
  )
}

interface IProprs {
  [n:string]: string
}

type TProps<T> = T extends React.ComponentType<infer props> ? props : any;

const propsInHomeComponent:TProps<typeof HomeComponent> = {
  firstProp: 'Hello React text',
};

const propsInHomeComponent2: TProps<typeof HomeComponent2> = {
  firstProp: 'Hello React text',
  secondProp: 'second field in component'
}
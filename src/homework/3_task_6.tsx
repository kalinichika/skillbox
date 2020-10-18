import * as React from 'react';

const props: TDivProps = {
    className: 'handler',
    // some: '1233',
}

type TDivProps = TGetJSXPropsProp<'div'>;

type TGetJSXPropsProp<T extends keyof JSX.IntrinsicElements> = Exclude<TProps<T>[keyof TProps<T>], React.DOMAttributes<null>>;

type TProps<T extends keyof JSX.IntrinsicElements> = {
    [n in T]: JSX.IntrinsicElements[T]
};





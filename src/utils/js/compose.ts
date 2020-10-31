// Функция для выполнения переданных функций по очереди (слева - направо)
// onChange={preventDefault(stopPropagation(getValue(onChange)))}
// onChange={compose(onChange, getValue, stopPropagation, preventDefault)}

import { filter } from "../../../webpack.config";

export function compose<U>(...fns: Function[]) {
  return <E,>(initialValue: any): U =>
    fns.reduceRight((previousValue, fn) => fn(previousValue), initialValue);
}

// Функция выполнения переданных функций (справа - налево)
// onChange={pipe(preventDefault, stopPropagation, getValue, onChange)}

export function pipe<U>(...fns: Function[]) {
  return <E,>(initialValue: any) : U =>
  fns.reduce((previousValue, fn) => fn(previousValue), initialValue)
} 

// Забирает свойства из объекта
export function pick<K extends string>(prop: K) {
  return <O extends Record<K, any>> (obj: O) => obj[prop]
}

// Проверяет на равенство
export function isEqual<T>(left: T) {
  return <E extends T>(right: E) => left === right;
}

// /!value
export function cond(value: boolean) {
  return !value;
}

const comments = [
  {text: 'text one', id: 22},
  {text: 'text two', id: 44}
]

// const filteredComments = comments.filter(item=> item.id!==22)

// const filteredComments = comments.filter(pipe(pick('id'), isEqual(22), cond))

// const filterWithId = (id: number) => pipe(pick('id'), isEqual(id), cond);
// const filteredComments = comments.filter(filterWithId(22))

const createFilterBy = (prop: string) => (id: number) => pipe(pick('id'), isEqual(id), cond);
const filterWithId = createFilterBy('id');
const filterWithValue = createFilterBy('vaule');
const filteredComments = comments.filter(filterWithId(22))
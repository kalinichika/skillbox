/* Number 1 */
type TConcatTwoString = (str1:string, str2:string) => string;

const concatTwoString:TConcatTwoString = 
  (str1:string, str2:string) => str1 + str2;

concatTwoString('Hello', 'World');

/* Number 2 */
interface IMyHometask {
  howIDoIt: string,
  simeArray: (string|number)[],
  withData?: IMyHometask[]
}

const MyHomeTask: IMyHometask = {
  howIDoIt: 'I do it well',
  simeArray:['string one', 'string two', 42],
  withData: [
    {
      howIDoIt: 'I do it well',
      simeArray:['string one', 32]
    }
  ]
}

/* Number 3 */
interface MyArray<T> {
  [N: number]: T;
  reduce<U>(fn: (accumulator: U, value:T) => U, initialValue: (U)): U;
}

/* Number 4 */
interface IHomeTask {
  data: string;
  numbericData: number;
  date: Date;
  externalData: {
      basis: number;
      value: string;
  }
}

type MyPartial<T> = {
  [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N]
}

const homeTask: MyPartial<IHomeTask> = {
  externalData: {
      value: 'win'
  }
}

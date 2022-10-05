export abstract class Table<T> {
  constructor(
    public data: T[],
    public columns: {
      key: keyof T;
      title: string;
      format?: (val: any) => string;
      classList?: string[];
    }[]
  ) {}

  push = (item: T) => this.data.push(item);
  remove = (index: number) => this.data.splice(index, 1);
}

export const toCurrency = (val: number) =>
  new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
  }).format(val);

//example
interface User {
  username: string;
  password: string;
  age: number;
}

export class UserTable extends Table<User> {
  constructor(data: User[]) {
    super(data, [
      {
        key: 'age',
        title: 'Age',
        classList: ['green'],
        format: toCurrency,
      },
      {
        key: 'username',
        title: 'User',
      },
      { key: 'password', title: 'PW' },
    ]);
  }
}

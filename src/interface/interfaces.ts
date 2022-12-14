export interface User {
  id?: number;
  username: string;
  classe: string;
  level: number;
  password: string;
}

export type UserLogin = Omit<User, 'classe' | 'level' | 'id'>;

export interface Product {
  id?: number;
  name: string;
  amount: string;
}

export interface ErrorHandler extends Error {
  status: number;
}

export interface Order {
  id?: number;
  userId: number;
  productsIds?: number[] | number;
}

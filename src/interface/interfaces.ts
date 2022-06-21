export interface Product {
  id?: number;
  name: string;
  amount: string;
}

export interface ErrorHandler extends Error {
  status: number;
}

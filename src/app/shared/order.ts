import { Customer } from './customer';

export interface order {
  id: number;
  customer: Customer;
  total: number;
  placed: Date;
  fulfilled: Date;
  status: string;
}

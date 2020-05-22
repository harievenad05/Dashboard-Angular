export interface Order {
    order_id?: number;
    customer_id?: number;
    name: string;
    state: string;
    total: number;
    placed: Date;
    completed: Date;
    status?: string;
  }
  
  export class OrderData {
    success: number;
    data: Order[];
    constructor(){
        this.success = null;
        this.data = null;
    }
  }
  
  export class OrderDataResponse {
    success: number;
    message: string;
    data: Order;
    constructor(){
      this.success = null;
      this.message = null;
      this.data = null;
    }
  }
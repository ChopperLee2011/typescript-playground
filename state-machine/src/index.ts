import { CreatedOrderState } from './OrderState';

class Order {
    state: any;
    constructor() {
        this.state = new CreatedOrderState();
    }
    process(event:string){
        this.state = this.state.process(event);
    } 
}

const order = new Order();
console.log(order.state);
order.process('paid');
console.log(order.state);
order.process('paid');
console.log(order.state);
order.process('create');
console.log(order.state);
order.process('completed');
console.log(order.state);


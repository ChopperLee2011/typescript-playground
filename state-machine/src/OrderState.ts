import BaseState from './BaseState'
export class CreatedOrderState extends BaseState{
    process(event:string) : any {
        if(event === 'paid') {
            return new PaidOrderState();
        }
        return this;
    }

}
export class PaidOrderState extends BaseState{
    process(event:string) : any{
        if(event === 'completed'){
            return new CompletedOrderState()
        }
        return this;
    }
}

export class CompletedOrderState extends BaseState{
 process(event:string) : any {
     return this;
 }   
}
export default abstract class BaseState {
    state: any;
    constructor(){
        console.log(`Processing current state: ${this}`)
    }
    abstract process(event: string): void
    toString(): String{
        return `${(<any>this).constructor.name}`
    }
}

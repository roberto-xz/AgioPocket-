
import ClientModel from "./ClientModel";

export default class UserModel {
    private id: number;
    private name: string;
    private last: string;
    private balance: number;
    private clients: ClientModel[] = [];

    constructor(name: string,last: string,balance: number) {
        this.name = name;
        this.last = last;
        this.balance = balance;
        this.id = 0;
    }

    get getName(): string { return this.name}
    get getLast(): string { return this.last}
    get getId(): number {return this.id}
    get getBalance(): number { return this.balance}
    get getClients(): ClientModel[] {return this.clients}

    set setName(name:string) { this.name = name}
    set setLast(last:string) { this.last = last}
    set setId(id:number) {this.id = id}
    set setBalance(value:number){ this.balance = value}
    set setClient(client:ClientModel){this.clients.push(client)}
}

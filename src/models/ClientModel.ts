import LoansModel from "./LoansModel";


export default class ClientModel {
  private id: number;
  private name: string;
  private last: string;
  private cpf: string;
  private birthDay: string;
  private city: string;
  private neighborhood: string;
  private street: string;
  private homeNumber: string;
  private email: string;
  private phoneNumber: string;
  private loans: LoansModel[] = [];

  constructor(
        name: string,
        last: string,
        cpf: string,
        birthDay: string,
        city: string,
        neighborhood: string,
        street: string,
        homeNumber: string,
        email: string,
        phoneNumber: string
    ) {
        this.name = name;
        this.last = last;
        this.cpf = cpf;
        this.birthDay = birthDay;
        this.city = city;
        this.neighborhood = neighborhood;
        this.street = street;
        this.homeNumber = homeNumber;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.id = 0;
  }

    get getId(): number { return this.id; }
    get getName(): string { return this.name; }
    get getFullName():String {return this.name+" "+this.last;}
    get getLast(): string { return this.last; }
    get getCpf(): string { return this.cpf; }
    get getBirthDay(): string { return this.birthDay; }
    get getCity(): string { return this.city; }
    get getNeighborhood(): string { return this.neighborhood; }
    get getStreet(): string { return this.street; }
    get getHomeNumber(): string { return this.homeNumber; }
    get getEmail(): string { return this.email; }
    get getPhoneNumber(): string { return this.phoneNumber; }
    get getLoans(): LoansModel[] { return this.loans; }
    set setId(value: number) { this.id = value; }

//   set Name(value: string) { this.name = value; }

//   set Last(value: string) { this.last = value; }

//   set Cpf(value: string) { this.cpf = value; }

//   set BirthDay(value: string) { this.birthDay = value; }

//   set City(value: string) { this.city = value; }

//   set Neighborhood(value: string) { this.neighborhood = value; }

//   set Street(value: string) { this.street = value; }

//   set HomeNumber(value: string) { this.homeNumber = value; }

//   set Email(value: string) { this.email = value; }

//   set PhoneNumber(value: string) { this.phoneNumber = value; }

//   set Loans(value: LoansModel[]) { this.loans = value; }
}


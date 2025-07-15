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

//   get Id() { return this.id; }
//   set Id(value: number) { this.id = value; }
//   get Name() { return this.name; }
//   set Name(value: string) { this.name = value; }
//   get Last() { return this.last; }
//   set Last(value: string) { this.last = value; }
//   get Cpf() { return this.cpf; }
//   set Cpf(value: string) { this.cpf = value; }
//   get BirthDay() { return this.birthDay; }
//   set BirthDay(value: string) { this.birthDay = value; }
//   get City() { return this.city; }
//   set City(value: string) { this.city = value; }
//   get Neighborhood() { return this.neighborhood; }
//   set Neighborhood(value: string) { this.neighborhood = value; }
//   get Street() { return this.street; }
//   set Street(value: string) { this.street = value; }
//   get HomeNumber() { return this.homeNumber; }
//   set HomeNumber(value: string) { this.homeNumber = value; }
//   get Email() { return this.email; }
//   set Email(value: string) { this.email = value; }
//   get PhoneNumber() { return this.phoneNumber; }
//   set PhoneNumber(value: string) { this.phoneNumber = value; }
//   get Loans() { return this.loans; }
//   set Loans(value: LoansModel[]) { this.loans = value; }
}


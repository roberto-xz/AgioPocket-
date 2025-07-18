import LoanModel from "./LoanModel";


export default class ClientModel {
  private id: number;
  private name: string;
  private last: string;
  private email: string;
  private phoneNumber: string;
  private sendEmails: boolean;
  private loans: LoanModel[] = [];

  constructor(
        name: string,
        last: string,
        email: string,
        phoneNumber: string,
        sendEmails: boolean
    ) {
        this.name = name;
        this.last = last;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.sendEmails = sendEmails;
        this.id = 0;
  }

    get getId(): number { return this.id; }
    get getName(): string { return this.name; }
    get getFullName():String {return this.name+" "+this.last;}
    get getLast(): string { return this.last; }
    get getEmail(): string { return this.email; }
    get getPhoneNumber(): string { return this.phoneNumber; }
    get getLoans(): LoanModel[] { return this.loans; }

    get getSendEmail():string {
        return (this.sendEmails) ? "Y" : "N";
    }


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


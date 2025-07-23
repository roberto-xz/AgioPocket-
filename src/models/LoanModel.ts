
export default class LoanModel {
    private id: number
    private clientId: number
    private value: number
    private date: string
    private percentual: number
    private loans: number
    private loansPrices: number

    constructor (
        client_id: number,
        value: number,
        date: string,
        percentual: number,
        loans: number,
        loansPrices: number) {
            this.clientId = client_id;
            this.value = value;
            this.date = date;
            this.percentual = percentual;
            this.loans = loans,
            this.loansPrices = loansPrices
            this.id = NaN;
    }

    public get getId():number {return this.id}
    public get getClientId():number {return this.clientId;}
    public get getValue():number {return this.value;}
    public get getDate():string  {return this.date;}
    public get getPercentual():number {return this.percentual;}
    public get getLoans(): number {return this.loans}
    public get getLoansPrices(): number {return this.loansPrices}
    public set setId(id: number) {this.id = id}
}

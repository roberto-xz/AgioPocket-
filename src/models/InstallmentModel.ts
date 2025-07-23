

export default class InstallmentModel {
    private id: number;
    private loanId: number;
    private partNum: number;
    private value: number;
    private status: string;
    private dueDate: string

    constructor (
        loanId: number,
        partNum: number,
        value: number,
        status: string,
        dueDate: string,
    ){
        this.loanId = loanId;
        this.partNum = partNum;
        this.value = value;
        this.status = status;
        this.dueDate = dueDate;
        this.id = NaN;
    }

    public get getLoanId(): number {return this.loanId}
    public get getPartNum(): number {return this.partNum}
    public get getValue(): number {return this.value}
    public get getStatus(): string {return this.status}
    public get getDueDate(): string {return this.dueDate}
    public set setId(id: number) {this.id = id}
}

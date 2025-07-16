
import InstallmentsModel from "./InstallmentsModel"

export default class LoanModel {
    private id: number
    private client_id: number
    private value: number
    private firstInstallmentDate: string
    private percentual: number
    private installMentsCount: number
    private installments: InstallmentsModel[];

    constructor (
        client_id: number,
        value: number,
        firstInstallmentDate: string,
        percentual: number,
        installMentsCount: number) {
            this.client_id = client_id;
            this.value = value;
            this.firstInstallmentDate = firstInstallmentDate;
            this.percentual = percentual;
            this.installMentsCount = installMentsCount;
    }

    public get getId():number {return this.id}
    public get getClientId():number {return this.client_id;}
    public get getValue():number {return this.value;}
    public get getFirstInstallmentDate():string  {return this.firstInstallmentDate;}
    public get getPercentual():number {return this.percentual;}
    public get getInstallmentsCount():number {return this.installMentsCount}

    public set setId(id: number) {this.id = id}
}

import InstallmentsModel from "./InstallmentsModel"


export default class LoansModel {
    private id: number
    private client_id: number
    private value: number
    private firstInstallmentDate: string
    private percentual: number
    private installMentsCount: number
    private installments: InstallmentsModel[];

    constructor(){}
}

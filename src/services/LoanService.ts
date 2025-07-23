
import LoanDao from "../daos/LoanDao";
import InstallmentModel from "../models/InstallmentModel";
import LoanModel from "../models/LoanModel";
import InstallmentService from "./InstallmentService";

export default class LoanService {
    private loanDao: LoanDao;

    constructor() {
        this.loanDao = new LoanDao();
    }

    public create(loan:LoanModel): boolean | null  {
        const loanId = this.loanDao.insert(loan);
        const service = new InstallmentService();

        if (loanId) {
            for (let x=0; x<loan.getLoans; x++) {
                const result = service.create (
                    new InstallmentModel(loanId,x+1,loan.getLoansPrices,"aberta",loan.getDate)
                );
                if (result == false) return false;
            }
            return true;
        }
        return false;
    }

    public remove(id: number): boolean | null  {
        const service = new InstallmentService();
        if (this.loanDao.remove(id) && service.remove(id)){
            return true;
        }
        return false;
    }


    selectByClientId(id: number):LoanModel[] | null {
        return this.loanDao.selectByClientId(id);
    }
}
